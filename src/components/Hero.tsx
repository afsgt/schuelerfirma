import { Button } from "@/components/ui/button";
import { ShoppingBag, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute top-16 md:top-20 bottom-0 left-0 right-0 z-0">
        <img 
          src={heroImage} 
          alt="Alles für Schule Team"
          className="w-full h-full object-cover brightness-110"
        />
        <div className="absolute inset-0 gradient-hero opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in">
            Wir sind{" "}
            <span className="text-green-500">Alles für Schule</span>!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Dieses Jahr hat sich unsere neue Schülerfirma gegründet. Stöbere gerne in unserem Shop und finde tolle, einzigartige Produkte. Erfahre außerdem mehr über uns und sei mit unseren News immer auf dem neusten Stand. Wir wünschen dir viel Spaß und freuen uns auf dich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg px-8 py-6 font-semibold shadow"
              onClick={() => navigate('/shop')}
            >
              Zum Shop
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 font-semibold"
              onClick={() => navigate('/ueber-uns')}
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <ShoppingBag className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
              <p className="text-white/90">Produkte</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-1">20+</h3>
              <p className="text-white/90">Aktive Schüler</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-1">5+</h3>
              <p className="text-white/90">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
