import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Year2021_2022 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Geschichte
            </Button>

            {/* Year Header */}
            <div className="text-center mb-12">
              <Lightbulb className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                2021/2022
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                Hidden Classics
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kleidung, Logo entworfen und Bestellprozess für Lehrer aufgebaut.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-md border border-border p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">Hidden Classics 2021/2022</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground text-center">
                  <p className="mb-4">
                    Hidden Classics war eine Schülerfirma der Anne-Frank-Gesamtschule Gütersloh. 
                    Wir haben uns auf Kleidung spezialisiert und ein eigenes Logo entworfen.
                  </p>
                  <p className="mb-4">
                    Ein besonderes Projekt war der Aufbau eines Bestellprozesses für Lehrer, 
                    sodass sie bequem Schulbekleidung bestellen konnten.
                  </p>
                  <p className="mb-4">
                    Wir haben verschiedene Kleidungsstücke mit unserem Logo angeboten und 
                    waren stolz darauf, die Schulgemeinschaft mit hochwertiger Kleidung zu versorgen.
                  </p>
                  <p className="mb-4">
                    Die Zusammenarbeit mit Lehrern und Schülern war eine großartige Erfahrung 
                    und hat uns viel über Unternehmensführung beigebracht.
                  </p>
                  <p>
                    Mit freundlichen Grüßen eure Hidden Classics!
                  </p>
                </div>
              </div>

              {/* External Link to AFS Article */}
              <div className="bg-secondary/10 rounded-lg border-2 border-secondary p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Hidden Classics in den Medien
                </h3>
                <p className="text-muted-foreground mb-4">
                  Lesen Sie mehr über unser Projekt: Willkommensbeutel für neue Mitschülerinnen aus der Ukraine
                </p>
                <a
                  href="https://afs-gt.de/hidden-classics-die-schuelerinnenfirma-der-anne-frank-schule-stellt-willkommensbeutel-fuer-neue-mitschuelerinnen-aus-der-ukraine-zusammen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Zum Artikel
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Gallery Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => navigate('/gallery/2021-2022')}
                className="px-16 py-6 text-lg"
              >
                Unsere Gallerie
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Year2021_2022;
