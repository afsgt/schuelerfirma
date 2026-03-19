import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Year2025_2026 = () => {
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
                2025/2026
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                Bee Franktory
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unsere aktuelle Schülerfirma mit dem Bienen-Thema.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-md border border-border p-8 text-center">
                <p className="text-lg text-muted-foreground">
                  Mehr Informationen folgen bald!
                </p>
              </div>

            </div>

            {/* Gallery Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => navigate('/gallery/2025-2026')}
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

export default Year2025_2026;
