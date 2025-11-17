import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AFS-GT Logo" className="h-20 w-20" />
              <span className="text-lg font-bold">Alles für Schule</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Die innovative Schülerfirma der Anne-Frank-Gesamtschule in Gütersloh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Startseite", href: "#/" },
                { label: "Shop", href: "#/shop" },
                { label: "Über uns", href: "#/ueber-uns" },
                { label: "Neuigkeiten", href: "#/news" },
                { label: "Gallerie", href: "#/gallery" },
                { label: "Geschichte", href: "#/geschichte" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/Qe6idz6oYh58uJ6a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Anne-Frank-Gesamtschule<br />Gütersloh
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@afs-gt.de" className="hover:text-secondary transition-colors">
                  info@afs-gt.de
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:+495241123456" className="hover:text-secondary transition-colors">
                  +49 (0) 5241 123456
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Folge uns</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/annefranktastisch/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-secondary p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} Alles für Schule. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
