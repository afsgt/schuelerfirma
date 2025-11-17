import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  // Dynamically import all .jpeg and .jpg images from src/assets/qual/
  const imageModules = import.meta.glob('../assets/qual/**/*.{jpeg,jpg}', { eager: true }) as Record<string, { default: string }>;
  const images = Object.values(imageModules).map(module => module.default);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (selectedIndex !== null) {
      const timer = setTimeout(() => setShowControls(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showControls, selectedIndex]);

  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Button>

            {/* Title */}
            <h1 className="text-4xl font-bold text-primary mb-4 text-center">
              Unsere Gallerie
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground mb-12 text-center">
              AnneFranktastisch
            </h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Zoom Dialog */}
            <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div
                  className="relative"
                  onMouseMove={() => setShowControls(true)}
                >
                  {/* Close Button */}
                  <Button
                    variant="default"
                    size="icon"
                    className={`absolute top-2 right-2 z-10 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setSelectedIndex(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  {/* Previous Button */}
                  {selectedIndex !== null && selectedIndex > 0 && (
                    <Button
                      variant="default"
                      size="icon"
                      className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                      onClick={() => setSelectedIndex(selectedIndex - 1)}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  )}

                  {/* Next Button */}
                  {selectedIndex !== null && selectedIndex < images.length - 1 && (
                    <Button
                      variant="default"
                      size="icon"
                      className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                      onClick={() => setSelectedIndex(selectedIndex + 1)}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  )}

                  {/* Image */}
                  {selectedIndex !== null && images[selectedIndex] && (
                    <img
                      src={images[selectedIndex]}
                      alt="Zoomed gallery image"
                      className="w-full h-auto max-h-[85vh] object-contain"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;