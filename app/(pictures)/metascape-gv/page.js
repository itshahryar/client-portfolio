import ImageGallery from '../ImageGallery';

export default function MetascapeGyPage() {
  const metascapeGyImages = [
    { id: 'colorbycluster', src: '/metascape-gv/ColorByCluster.png', alt: 'Color By Cluster', title: 'Color By Cluster Analysis' },
    { id: 'colorbypvalue', src: '/metascape-gv/ColorByPValue.png', alt: 'Color By P-Value', title: 'Color By P-Value Analysis' },
    { id: 'gene_mcode', src: '/metascape-gv/Gene_MCODE_ALL_LL_PPIColorByCluster.png', alt: 'Gene MCODE Analysis', title: 'Gene MCODE Cluster Analysis' },
    { id: 'heatmap_disgenet', src: '/metascape-gv/HeatmapSelectedGO_DisGenET.png', alt: 'Heatmap DisGenET', title: 'Heatmap of Selected GO DisGenET' },
    { id: 'heatmap_pagenbase', src: '/metascape-gv/HeatmapSelectedGO_PaGenBase.png', alt: 'Heatmap PaGenBase', title: 'Heatmap of Selected GO PaGenBase' },
    { id: 'heatmap_trrust', src: '/metascape-gv/HeatmapSelectedGO_TRRUST.png', alt: 'Heatmap TRRUST', title: 'Heatmap of Selected GO TRRUST' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Metascape Analysis - GV Group</h1>
      <p className="mb-8">Pathway enrichment analysis for the GV cohort...</p>
      
      <h2 className="text-2xl font-semibold mb-4">Analysis Visualizations</h2>
      <ImageGallery images={metascapeGyImages} columns={3} className="mt-6" />
    </div>
  );
}
