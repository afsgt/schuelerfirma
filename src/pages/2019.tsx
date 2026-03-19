import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Year2019_2020 = () => {
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
                2019/2020
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                AmazingFoodStyles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Das erste Kochbuch der AFS wurde erstellt.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-md border border-border p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">AmazingFoodStyles 2019/2020</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground text-center">
                  <p className="mb-4">
                    AmazingFoodStyles war die erste Schülerfirma der Anne-Frank-Gesamtschule Gütersloh. 
                    Wir haben uns auf kulinarische Produkte spezialisiert und das erste Kochbuch der AFS erstellt.
                  </p>
                  <p className="mb-4">
                    Das Kochbuch enthielt Lieblingsrezepte von Schülern und Lehrern unserer Schule. 
                    Es war ein großartiges Projekt, das die Vielfalt unserer Schulgemeinschaft zeigte.
                  </p>
                  <p className="mb-4">
                    Neben dem Kochbuch haben wir auch andere kulinarische Projekte umgesetzt 
                    und dabei wertvolle Erfahrungen im Bereich Unternehmertrum gesammelt.
                  </p>
                  <p className="mb-4">
                    Als erste Schülerfirma haben wir viele Grundsteine gelegt, 
                    auf denen die nachfolgenden Schülerfirmen aufbauen konnten.
                  </p>
                  <p>
                    Mit freundlichen Grüßen eure AmazingFoodStyles!
                  </p>
                </div>
              </div>

              {/* External Link to AFS Article */}
              <div className="bg-secondary/10 rounded-lg border-2 border-secondary p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  AmazingFoodStyles in den Medien
                </h3>
                <p className="text-muted-foreground mb-4">
                  Lesen Sie mehr über unseren Projektkurs: Kein gewöhnlicher Projektkurs
                </p>
                <a
                  href="https://afs-gt.de/amazingfoodstyles-kein-gewoehnlicher-projektkurs/"
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
                onClick={() => navigate('/gallery/2019-2020')}
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

export default Year2019_2020;
