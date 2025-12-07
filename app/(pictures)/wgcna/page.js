import ImageGallery from '../ImageGallery';

export default function WgcncaPage() {
  const wgcncaImages = [
    { id: 'wgcna1', src: '/wgcna/1.png', alt: 'WGCNA Heatmap', title: 'Gene Expression Heatmap' },
    { id: 'wgcna2', src: '/wgcna/2.png', alt: 'WGCNA Distribution', title: 'Expression Distribution Plot' },
    { id: 'wgcna3', src: '/wgcna/3.png', alt: 'WGCNA Clustering', title: 'Gene Clustering Analysis' },
    { id: 'wgcna4', src: '/wgcna/4.png', alt: 'WGCNA Module Analysis', title: 'Module-Trait Relationships' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Weighted Gene Co-expression Network Analysis</h1>
      <p className="mb-8">Identification of co-expression modules and key hub genes...</p>
      
      <h2 className="text-2xl font-semibold mb-4">Network Analysis Results</h2>
      <ImageGallery images={wgcncaImages} columns={3} />
    </div>
  );
}

