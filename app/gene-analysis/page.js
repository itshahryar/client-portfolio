"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  BarChart,
  Bar,
} from "recharts";

// Generate sample data
const generateSampleData = (geneName) => {
  // Generate sample DEGs data
  const degData = Array.from({ length: 20 }, (_, i) => ({
    geneId: `GENE${1000 + i}`,
    geneName: `${geneName}_${i + 1}`,
    log2FoldChange: Math.random() * 4 - 2,
    pValue: Math.random() * 0.05,
    adjustedPValue: Math.random() * 0.1,
  }));

  // Generate volcano plot data
  const volcanoData = degData.map(gene => ({
    gene: gene.geneName,
    log2FoldChange: gene.log2FoldChange,
    negLog10PValue: -Math.log10(gene.pValue),
    significant: gene.adjustedPValue < 0.05 && Math.abs(gene.log2FoldChange) > 1,
  }));

  // Generate heatmap data
  const samples = [`Sample1`, `Sample2`, `Sample3`, `Sample4`, `Sample5`];
  const genes = degData.slice(0, 10).map(g => g.geneName);
  
  const heatmapData = samples.map(sample => {
    const sampleData = { name: sample };
    genes.forEach(gene => {
      sampleData[gene] = Math.random() * 4 - 2;
    });
    return sampleData;
  });

  return {
    geneName,
    degData,
    volcanoData,
    heatmapData,
    genes,
    samples,
  };
};

// API function
const fetchGeneData = async (geneName) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, this would be an actual API call
  return generateSampleData(geneName);
};

export default function GeneAnalysisPage() {
  const [geneName, setGeneName] = useState("");
  const [geneData, setGeneData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!geneName.trim()) return;
    
    setIsLoading(true);
    try {
      // In a real app, this would fetch from your API
      const data = await fetchGeneData(geneName);
      setGeneData(data);
    } catch (error) {
      console.error("Error fetching gene data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Dark mode colors for charts
  const chartTextColor = "#e5e7eb";
  const chartGridColor = "#4b5563";
  const tooltipStyle = { 
    backgroundColor: '#1f2937', 
    borderColor: '#374151', 
    color: '#f3f4f6' 
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">Gene Expression Analysis</h1>
      
      {/* Gene Input Component */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end mb-8">
        <div className="w-full sm:w-auto">
          <label htmlFor="gene-name" className="block text-sm font-medium mb-1">
            Enter Gene Name
          </label>
          <Input
            id="gene-name"
            value={geneName}
            onChange={(e) => setGeneName(e.target.value)}
            placeholder="e.g., TP53, BRCA1"
            className="w-full sm:w-64"
          />
        </div>
        
        <Button 
          onClick={handleSearch} 
          disabled={isLoading || !geneName.trim()}
          className="flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          {isLoading ? "Analyzing..." : "Analyze Gene"}
        </Button>
      </div>
      
      {geneData && (
        <div className="mt-8 space-y-8">
          {/* Visualizations Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Volcano Plot */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Volcano Plot</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke={chartGridColor} />
                    <XAxis 
                      type="number" 
                      dataKey="log2FoldChange" 
                      name="Log2 Fold Change" 
                      stroke={chartTextColor}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="negLog10PValue" 
                      name="-log10(p-value)" 
                      stroke={chartTextColor}
                    />
                    <ZAxis range={[100, 100]} />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }} 
                      contentStyle={tooltipStyle}
                    />
                    <Legend wrapperStyle={{ color: chartTextColor }} />
                    <Scatter name="Genes" data={geneData.volcanoData} fill="#8884d8">
                      {geneData.volcanoData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.significant ? '#ef4444' : '#3b82f6'} 
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Heatmap */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Expression Heatmap</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={geneData.heatmapData}
                    layout="vertical"
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} />
                    <XAxis type="number" stroke={chartTextColor} />
                    <YAxis dataKey="name" type="category" stroke={chartTextColor} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend wrapperStyle={{ color: chartTextColor }} />
                    {geneData.genes.map((gene, index) => (
                      <Bar 
                        key={gene} 
                        dataKey={gene} 
                        stackId="a" 
                        fill={`hsl(${index * 36}, 70%, 50%)`}
                        name={gene}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* DEGs Table */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Differentially Expressed Genes (DEGs)</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 dark:bg-gray-700">
                    <TableHead className="text-gray-900 dark:text-gray-100">Gene ID</TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">Gene Name</TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">Log2 Fold Change</TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">P-value</TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">Adjusted P-value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {geneData.degData.map((gene, index) => (
                    <TableRow key={index} className="border-b dark:border-gray-700">
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">{gene.geneId}</TableCell>
                      <TableCell className="text-gray-900 dark:text-gray-100">{gene.geneName}</TableCell>
                      <TableCell className={gene.log2FoldChange > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                        {gene.log2FoldChange.toFixed(4)}
                      </TableCell>
                      <TableCell className="text-gray-900 dark:text-gray-100">{gene.pValue.toExponential(2)}</TableCell>
                      <TableCell className="text-gray-900 dark:text-gray-100">{gene.adjustedPValue.toExponential(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

