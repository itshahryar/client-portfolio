import ImageGallery from '../ImageGallery';

export default function DegsPage() {
  const gvImages = [
    {
      id: 'gv_heatmap',
      src: '/degs/GV-vs-IVO-MII/Heatmap.jpg',
      alt: 'GV vs IVO-MII Heatmap',
      title: 'Heatmap'
    },
    {
      id: 'gv_volcano',
      src: '/degs/GV-vs-IVO-MII/Volcano-plot.jpg',
      alt: 'GV vs IVO-MII Volcano Plot',
      title: 'Volcano Plot'
    }
  ];

  const matureImages = [
    {
      id: 'mature_heatmap',
      src: '/degs/Mature-vs-young/Heatmap.jpg',
      alt: 'Mature vs Young Heatmap',
      title: 'Heatmap'
    },
    {
      id: 'mature_volcano',
      src: '/degs/Mature-vs-young/volcano-plot.jpg',
      alt: 'Mature vs Young Volcano Plot',
      title: 'Volcano Plot'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Differentially Expressed Genes</h1>
      <p className="mb-8">
        Analysis of differentially expressed genes in our study...
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mb-4">GV vs IVO-MII</h2>
      <ImageGallery images={gvImages} columns={2} />

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Mature vs Young</h2>
      <ImageGallery images={matureImages} columns={2} />
    </div>
  );
}
