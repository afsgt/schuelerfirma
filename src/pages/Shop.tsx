import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { getProducts, Product } from "@/lib/data";

import fugamoImg from "@/assets/fugamo.webp";

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await getProducts();
      const publishedProducts = productsData.filter(product => product.published);
      setProducts(publishedProducts);
    };
    loadProducts();
  }, []);
  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 max-w-3xl py-12">
          <h1 className="text-4xl font-extrabold mb-10 text-primary text-center">Unsere Produkte</h1>
          <div className="grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <div key={product.id} className="bg-card rounded-lg shadow-md border border-border p-6 flex flex-col gap-2">
                <img
                  src={product.images[0] || '/src/assets/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                />
                <h2
                  className="text-xl font-semibold text-primary mb-1 cursor-pointer hover:text-primary/80"
                  onClick={() => navigate(`/shop/${product.slug}`)}
                >
                  {product.name}
                </h2>
                <div className="text-lg font-bold text-primary mb-2">€{product.price.toFixed(2)}</div>
                <p className="text-foreground text-sm flex-1">{product.description}</p>
                <button
                  onClick={() => navigate(`/shop/${product.slug}`)}
                  className="mt-2 px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold shadow w-full"
                >
                  Mehr erfahren
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Kleidung bei Fugamo</h2>
            <img
              src={fugamoImg}
              alt="Fugamo"
              className="mx-auto mb-4 max-w-xs"
            />
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              Zurzeit bieten wir nur die AFS-Kleidung unseres externen Anbieters Fugamo mit Versand an. Unsere restlichen Produkte sind momentan nur direkt vor Ort erhältlich. Die Fugamo-Kleidung ist ab sofort dauerhaft erhältlich - auch in den Ferien. Unsere anderen Produkte hängen von der Schülerfirma selbst ab, sodass sie möglicherweise im nächsten Schuljahr nicht mehr erhältlich sein werden, weil eine neue Schülerfirma ihre eigenen Produkte auf den Markt bringt.
            </p>
            <button
              onClick={() => navigate('/fugamo')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              So funktioniert's!
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
