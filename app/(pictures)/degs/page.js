import ImageGallery from '../ImageGallery';

export default function DegsPage() {
  const degsImages = [
    { 
      id: 'heatmap_gv', 
      src: '/degs/heatmap_GV.png', 
      alt: 'Heatmap GV visualization', 
      title: 'Heatmap (GV)' 
    },
    { 
      id: 'heatmap_mature', 
      src: '/degs/heatmap_mature.png', 
      alt: 'Heatmap mature visualization', 
      title: 'Heatmap (Mature)' 
    },
    { 
      id: 'volcano_gv', 
      src: '/degs/volcano_GV.png', 
      alt: 'Volcano plot GV visualization', 
      title: 'Volcano (GV)' 
    },
    { 
      id: 'volcano_mature', 
      src: '/degs/volcano_mature.png', 
      alt: 'Volcano plot mature visualization', 
      title: 'Volcano (Mature)' 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Differentially Expressed Genes</h1>
      <p className="mb-8">Analysis of differentially expressed genes in our study...</p>
      
      <h2 className="text-2xl font-semibold mb-4">Results Gallery</h2>
      <ImageGallery images={degsImages} columns={3} />
    </div>
  );
}

