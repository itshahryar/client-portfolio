import ImageGallery from '../ImageGallery';

export default function MetascapeMaturePage() {
  const metascapeMatureImages = [
    { id: 'colorbycluster', src: '/metascape-mature/ColorByCluster.png', alt: 'Color By Cluster', title: 'Color By Cluster Analysis' },
    { id: 'gene_mcode', src: '/metascape-mature/Gene_MCODE_ALL_PPIColorByCluster.png', alt: 'Gene MCODE Analysis', title: 'Gene MCODE Cluster Analysis' },
    { id: 'gene_ppi', src: '/metascape-mature/Gene_PPIColorByCluster.png', alt: 'Gene PPI Cluster', title: 'Gene PPI Cluster Analysis' },
    { id: 'heatmap_disgenet', src: '/metascape-mature/HeatmapSelectedGO_DisGenET.png', alt: 'Heatmap DisGenET', title: 'Heatmap of Selected GO DisGenET Analysis' },
    { id: 'heatmap_pagenbase', src: '/metascape-mature/HeatmapSelectedGO_PaGenBase.png', alt: 'Heatmap PaGenBase', title: 'Heatmap of Selected GO PaGenBase Analysis' },
    { id: 'heatmap_trrust', src: '/metascape-mature/HeatmapSelectedGO_TRRUST.png', alt: 'Heatmap TRRUST', title: 'Heatmap of Selected GO TRRUST Analysis' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Metascape Analysis - Mature Group</h1>
      <p className="mb-8">Comprehensive pathway analysis for mature samples...</p>
      
      <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
      <ImageGallery images={metascapeMatureImages} columns={3} />
    </div>
  );
}
