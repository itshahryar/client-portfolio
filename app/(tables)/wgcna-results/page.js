import ExcelTable from '../ExcelTable';

export default function WgcnaResultsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">WGCNA Results</h1>
      <ExcelTable filePath="/files/WGCNA_results.xlsx" />
    </div>
  );
}

