import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import tasseImage from "@/assets/products/Tassen/IMG_9249.jpeg";

const Kaffeetasse = () => {
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
              Zurück zum Shop
            </Button>

            {/* Product Details */}
            <div className="grid grid-cols-1 gap-8">
              {/* Product Image */}
              <div className="rounded-lg overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src={tasseImage}
                      alt="Kaffeetasse"
                      className="w-full h-80 object-contain cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <img
                      src={tasseImage}
                      alt="Kaffeetasse"
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    Kaffeetasse
                  </h1>
                  <p className="text-2xl font-bold text-secondary">5,99 €</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Beschreibung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere hochwertigen Tassen eignen sich für alle Getränke deiner Wahl. Fülle zum Beispiel im Sommer einen Eistee oder ein frisch gekochtes, abgekühltes Fruchtgetränk hinein. Zusätzlich sind unsere Tassen auch Mikrowellenfest und ermöglichen so ein schnelles erwärmen von verschiedenen Getränken. Genieße im Winter einen leckeren, warmen Kakao am Kamin, oder eine warme Milch mit leckeren Plätzchen. Auch eine schöne Tasse Tee ist eine gute Wahl. Um dir und allen das Leben zu erleichtern und den schönen, entspannten Moment nicht zu verderben, bieten unsere Tassen eine Waschmaschinenfestigkeit an. Genieße morgens einen schönen warmen Kaffee oder und stelle nach dem leckeren Frühstück die Tasse einfach in die Spülmaschine, ohne dir gleich am Morgen den Kopf über dreckiges Geschirr zerbrechen zu müssen. Das hübsche Sterne-Logo, welches beidseitig aufgedruckt ist, bietet gemeinsam mit der schönen, glatt glänzenden Oberfläche einen tollen Look. Doch unsere Tassen überzeugen nicht nur mit ihrem Aussehen. Da wir großen Wert auf Qualität unserer Produkte setzen, sind uns die Form und der Halt unserer Tassen wichtig. Die breite Unterseite unserer Tassen führt zu einem stabilen Stand, der verhindert, dass die Tasse schnell versehentlich kippt und alles dreckig macht. Außerdem bieten unsere Tassen einen guten und rutschfesten Halt, damit sie gut in der Hand sitzen und nicht herausrutschen. Um dir den Komfort noch weiter zu steigern und deinen Entspannungsmoment unvergesslich zu machen, besitzen alle unsere Tassen einen großen und sehr bequemen Henckel, der das Greifen kinderleicht macht. So kannst du die Tasse auch dann benutzen, wenn es doch mal etwas hektisch wird und du in kürzester Zeit schnell mal etwas trinken möchtest. Auch das Verstauen in deinem Geschirrschrank haben wir dir leicht gemacht, indem wir auf eine gute, aber kompakte Tassengröße gesetzt haben. In die Tasse passen etwa 320 Milliliter deines Wunschgetränks. Und die gerade, senkrechte Tassenform ermöglicht, dass möglichst viele Tassen in den Geschirrschrank passen. Das trinken aus der Tasse ist sehr bequem und wurde von uns persönlich an mehreren unserer Tassen ausprobiert. Unsere Tasse sieht deutlich kleiner aus, als so manche großen Tassen, aber der Schein trügt. So kannst du genug trinken und gleichzeitig Platz in deinem Haus sparen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Details</h2>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 300ml Fassungsvermögen</li>
                    <li>• Hochwertige Keramik</li>
                    <li>• Spülmaschinenfest</li>
                    <li>• Mit Schülerfirma Logo</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kaffeetasse;