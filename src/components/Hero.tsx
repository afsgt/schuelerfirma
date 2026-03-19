import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { requestNotificationPermission, sendNotification } from "@/lib/utils";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 bg-gradient-to-br from-primary to-primary-dark">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 md:top-0 bottom-0 left-0 right-0 z-0">
        <img
          src={heroImage}
          alt="Bee Franktory Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in">
            Wir sind{" "}
            <span className="text-green-500">Bee Franktory</span>!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Stöbere gerne in unserem Shop und erfahre mehr über uns. Wir wünschen dir viel Spaß und freuen uns auf dich!
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
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 font-semibold"
              onClick={async () => {
                const granted = await requestNotificationPermission();
                setNotificationsEnabled(granted);
                if (granted) {
                  sendNotification('Willkommen bei Bee Franktory!', {
                    body: 'Du wirst jetzt über Neuigkeiten informiert.',
                    icon: '/favicon.ico'
                  });
                }
              }}
            >
              <Bell className="mr-2 h-5 w-5" />
              {notificationsEnabled ? 'Benachrichtigungen aktiviert' : 'Benachrichtigungen aktivieren'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
