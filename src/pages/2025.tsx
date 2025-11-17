import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";

const Year2024_2025 = () => {
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
                2024/2025
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
                AnneFranktastisch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Neue Produkte und Dienstleistungen wurden eingeführt.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-md border border-border p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">AnneFranktastisch 2024/2025</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground text-center">
                  <p className="mb-4">
                    AnneFranktastisch war eine engagierte Schülerfirma der Anne-Frank Gesamtschule Gütersloh, welche aus 18 fleißigen Schülerinnen und Schülern und einer Lehrkraft bestand. Wir verkauften hochwertigen AFS-Merchandise, der nicht nur unsere Schulgemeinschaft stärkte, sondern auch mit Qualität überzeugte. Unser Sortiment umfasste einzigartige AFS-Produkte mit denen wir Freude an unserer Schule verteilen wollten. Wir hoffen, dass die Freude an unseren Produkten noch lange anhalten wird.
                  </p>
                  <p className="mb-4">
                    Wir haben über das gesamte Schuljahr hinweg nach neuen Ideen gesucht, und haben daran gearbeitet, unser Sortiment ständig zu erweitern. So entstanden nach und nach immer mehr einzigartige Produkte, die es nur an unserer Schule gab. Unsere Schülerfirma hat darauf gesetzt, Produkte mit Nutzen herzustellen. So haben wir für den Unterricht an unserer Schule unter anderem einzigartig designte Kugelschreiber und Notizbücher entworfen. Aber auch außerschulische Produkte wie Tassen und Kleidung waren dabei. Alle unsere Produkte kannst du oben in unserer Produkte-Galerie betrachten und kennenlernen.
                  </p>
                  <p className="mb-4">
                    Vermutlich hat schon jeder von euch zumindest einmal ein AFS-Shirt an unserer Schule gesehen. Vielleicht hast du dich schon immer gefragt wo man so eins herbekommt. Die Antwort war lange unbekannt und fast für jeden „Nirgendwo". Aber das haben wir für dich verändert. Unsere Produkte sind vielleicht schon weg und wurden von den kommenden Schülerfirmen nicht fortgeführt, aber die Kleidung bleibt für dich bestimmt für eine noch sehr lange Zeit erhältlich, denn wir haben unseren externen Partner Fugamo eingerichtet, der für uns die Kleidung produziert und verkauft. Du kannst ganz einfach online bestellen. Das Sortiment enthält das schon lang bekannte AFS-Logo und den dargestellten Bücherschrank auf dem Rücken, hinter dem sich Anne Frank früher versteckt hatte. Aber wir haben das Sortiment erweitert und haben zusätzlich noch ein neues AFS-Logo mit Sternen entwickelt, dass man auf vielen unserer Produkte finden konnte.
                  </p>
                  <p className="mb-4">
                    Während des gesamten Schuljahres haben wir an zahlreichen Tagen in den großen Pausen unsern Stand aufgebaut und unsere Produkte verkauft. Doch uns konnte man nicht nur an normalen Schultagen finden, sondern wir waren auch bei vielen tollen und lustigen Schulveranstaltungen wie dem aller ersten Ehemaligentreffen und dem zweiten Sommerfest an unserer Schule dabei. Dort haben wir beim Sommerfest mit bunten Luftballons zum Verschenken die Stimmung noch weiter angehoben.
                  </p>
                  <p className="mb-4">
                    Doch das war nicht alles, was wir als Schülerfirma gemacht haben. Neben Produktrecherchen, Qualitätskontrollen, Buchführung und vielem anderem haben wir auch diese Website entwickelt, auf der du dich gerade befindest. Noch nie zuvor wurde daran gearbeitet, für die Schülerfirma unserer Schule eine eigene Website zu erstellen, doch mit genug willen ist es uns fast gelungen. Wir haben innerhalb eines Jahres fast die gesamte Website aufgebaut. Nur einige Kleinigkeiten haben uns vor der Veröffentlichung getrennt. Deshalb hoffen wir, dass die nächste kommende Schülerfirma den letzten Feinschliff macht und die Website veröffentlicht. Vielleicht sieht ja die Website ganz anders aus, als wir sie noch kennen, aber sie existiert.
                  </p>
                  <p className="mb-4">
                    Die Zeit in der Schülerfirma war toll und eine gute Erfahrung. Dieser Projektkurs hat sich damals deutlich von unserem Unterricht unterschieden, da man viel lockerer und individueller arbeiten konnte. Insgesamt konnte man auch viele neue Erfahrungen sammeln, die einigen Abläufen einer echten Firma nahekommen.
                  </p>
                  <p className="mb-4">
                    Wir freuen uns sehr über deinen Besuch auf unserer Website.
                  </p>
                  <p>
                    Mit herzlichen Grüßen eure Schülerfirma AnneFranktastisch!
                  </p>
                </div>
              </div>

            </div>

            {/* Gallery Button */}
            <div className="text-center mt-8">
              <Button
                onClick={() => window.location.href = '#/gallery'}
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

export default Year2024_2025;