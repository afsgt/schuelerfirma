import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { getProducts, Product, ProductColor } from "@/lib/data";

const CollageJacken: React.FC = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find(p => p.slug === 'collage-jacken' && p.published);
      setProduct(foundProduct || null);
      if (foundProduct && foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      setLoading(false);
    };
    loadProduct();
  }, []);

  const currentImage = selectedColor 
    ? (showBack && selectedColor.backImage ? selectedColor.backImage : selectedColor.image) 
    : (product?.images[0] || '/src/assets/placeholder.svg');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/shop')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <button
            onClick={() => navigate('/shop')}
            className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            ← Back to Shop
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div 
                className="cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                />
              </div>
              {/* Navigation arrows for front/back */}
              {selectedColor?.backImage && (
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => setShowBack(false)}
                    className={`px-3 py-1 rounded ${!showBack ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    Vorne
                  </button>
                  <button
                    onClick={() => setShowBack(true)}
                    className={`px-3 py-1 rounded ${showBack ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    Hinten
                  </button>
                </div>
              )}
              <p className="text-center text-sm text-gray-500 mt-2">Klicken Sie auf das Bild für eine größere Ansicht</p>
              {/* Color thumbnails */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => {
                        setSelectedColor(color);
                        setShowBack(false);
                      }}
                      className={`w-12 h-12 rounded-full border-2 transition-all overflow-hidden ${
                        selectedColor?.id === color.id
                          ? 'border-primary scale-110 shadow-md'
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ 
                        background: color.secondaryHex 
                          ? `linear-gradient(135deg, ${color.hex} 50%, ${color.secondaryHex} 50%)`
                          : color.hex 
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-3xl font-bold text-primary mb-4">{product.name}</h1>
              <div className="text-2xl font-bold text-primary mb-4">€{product.price.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground mb-2">Category: {product.category}</div>
              <p className="text-lg text-foreground mb-6">{product.description}</p>

              {/* Color Selection Buttons */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Wählen Sie eine Farbe:</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => {
                          setSelectedColor(color);
                          setShowBack(false);
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                          selectedColor?.id === color.id
                            ? 'border-primary shadow-md bg-primary/5'
                            : 'border-gray-200 hover:border-gray-400 bg-white'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-gray-300 shadow-sm overflow-hidden"
                          style={{ 
                            background: color.secondaryHex 
                              ? `linear-gradient(135deg, ${color.hex} 50%, ${color.secondaryHex} 50%)`
                              : color.hex 
                          }}
                        />
                        <span className="text-sm font-medium">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-green-800">Vor Ort erhältlich</h3>
                <p className="text-sm text-green-700">
                  Dieses Produkt ist in unserer Schülerfirma erhältlich. 
                  Besuchen Sie uns oder kontaktieren Sie uns für weitere Informationen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>
          <img
            src={currentImage}
            alt={product?.name}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CollageJacken;
