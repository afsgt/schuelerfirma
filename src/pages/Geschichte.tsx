import Footer from "@/components/Footer";
import { Clock, Trophy, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Geschichte = () => {
  const navigate = useNavigate();

  const milestones = [
    {
      icon: Lightbulb,
      year: "2024/2025",
      title: "AnneFranktastisch",
      description: "Neue Produkte und Dienstleistungen wurden eingeführt."
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Clock className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                Unsere Geschichte
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Von der Gründung bis heute - die Entwicklung unserer Schülerfirma
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Wie alles begann
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Die Schülerfirma der Anne-Frank-Gesamtschule wurde 2018 gegründet mit dem Ziel,
                  Schülerinnen und Schülern praktische Erfahrungen im Unternehmertum zu vermitteln.
                </p>
                <p className="text-lg leading-relaxed">
                  Seitdem haben wir uns kontinuierlich weiterentwickelt, neue Produkte entwickelt
                  und unser Team erweitert. Jeder Meilenstein hat uns stärker gemacht.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Alle unsere Schülerfirmen der vergangenen Jahre
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div
                      key={milestone.year}
                      className="relative flex items-center mb-12 animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>

                      {/* Content */}
                      <div
                        className="ml-16 bg-background rounded-lg shadow-md border border-border p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                        onClick={() => navigate(`/geschichte/${milestone.year}`)}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                            <Icon className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {milestone.year}
                            </div>
                            <h3 className="text-lg font-semibold text-primary">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Die Zukunft
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir blicken gespannt in die Zukunft und freuen uns auf neue Herausforderungen,
                innovative Produkte und ein noch stärkeres Team.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Geschichte;