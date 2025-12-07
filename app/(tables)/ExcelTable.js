"use client";

import React, { useState, useEffect, useMemo } from 'react';
import * as XLSX from 'xlsx';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

function ExcelTable({ filePath, sheetName }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        
        const sheet = sheetName 
          ? workbook.Sheets[sheetName] 
          : workbook.Sheets[workbook.SheetNames[0]];
        
        // Convert to JSON with raw option to preserve all values
        const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: false });
        
        if (jsonData.length > 0) {
          // Get headers from the first row
          const headers = Object.keys(jsonData[0]);
          
          // Create columns with accessor functions to handle special characters
          const dynamicColumns = headers.map(header => ({
            // Use accessor function instead of accessorKey to handle special characters
            accessorFn: (row) => row[header],
            header: header.replace(/_/g, ' ').replace(/\./g, '. '),
            id: header, // Add unique ID for each column
          }));
          
          setColumns(dynamicColumns);
          setData(jsonData);
          
          // Log data for debugging
          console.log("Loaded data:", jsonData);
          console.log("Generated columns:", dynamicColumns);
        }
      } catch (error) {
        console.error('Error loading Excel file:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filePath, sheetName]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    
    return data.filter(row => 
      Object.values(row).some(value => 
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination },
    onPaginationChange: setPagination,
  });

  if (loading) return <div className="p-4">Loading table data...</div>;

  // Get current page and total pages
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search table..."
          className="px-4 py-2 border rounded-md w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider" // Removed "uppercase"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
        <div className="text-sm text-gray-300">
          Showing {table.getState().pagination.pageSize * table.getState().pagination.pageIndex + 1} to{' '}
          {Math.min(
            table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1),
            filteredData.length
          )}{' '}
          of {filteredData.length} results
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          
          <div className="text-sm text-gray-300">
            Page {currentPage} of {totalPages}
          </div>
          
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExcelTable;

