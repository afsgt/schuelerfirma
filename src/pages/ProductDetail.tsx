import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { getProducts, Product } from "@/lib/data";

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find(p => p.slug === slug && p.published);
      setProduct(foundProduct || null);
      setLoading(false);
    };
    loadProduct();
  }, [slug]);

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
              <img
                src={product.images[0] || '/src/assets/placeholder.svg'}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg shadow-lg"
              />
              {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {product.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
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

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Product Information</h3>
                <p className="text-sm text-muted-foreground">
                  This product is managed through our admin panel and is available for purchase.
                  Contact us for ordering information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;