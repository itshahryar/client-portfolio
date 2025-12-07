import ExcelTable from '../ExcelTable';

export default function DegGvIvoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">DEGs_GV_vs_IVO-MII</h1>
      <ExcelTable filePath="/files/DEGs_GV_vs_IVO-MII.xlsx" />
    </div>
  );
}

