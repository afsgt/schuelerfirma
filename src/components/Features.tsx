import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Users2, Newspaper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import shopFeature from "@/assets/shop-feature.jpg";
import teamFeature from "@/assets/team-feature.jpg";
import newsFeature from "@/assets/news-feature.jpg";

const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      id: "shop",
      title: "Unsere Produkte",
      description: "Entdecke unsere vielfältige Produktpalette. Von Schulartikeln bis zu individuellen Geschenken – hier findest du alles, was dein Herz begehrt.",
      icon: ShoppingCart,
      image: shopFeature,
      color: "secondary",
    },
    {
      id: "about",
      title: "Über uns",
      description: "Lerne unser engagiertes Team kennen. Wir sind Schülerinnen und Schüler, die gemeinsam ein erfolgreiches Unternehmen führen und dabei wertvolle Erfahrungen sammeln.",
      icon: Users2,
      image: teamFeature,
      color: "primary",
    },
    {
      id: "news",
      title: "Neuigkeiten & Updates",
      description: "Bleibe immer auf dem Laufenden mit unseren neuesten Projekten, Events und Produkten. Verpasse keine wichtigen Ankündigungen!",
      icon: Newspaper,
      image: newsFeature,
      color: "accent",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Was wir bieten
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecke alle Möglichkeiten unserer Schülerfirma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-secondary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-secondary p-3 rounded-lg shadow-glow-green">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold shadow"
                    onClick={() => {
                      if (feature.id === 'about') {
                        navigate('/ueber-uns');
                      } else if (feature.id === 'news') {
                        navigate('/news');
                      } else if (feature.id === 'shop') {
                        navigate('/shop');
                      }
                    }}
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
