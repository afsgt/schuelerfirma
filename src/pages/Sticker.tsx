import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import stickerImage from "@/assets/products/Sticker/IMG_1909.jpeg";

const Sticker = () => {
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
                      src={stickerImage}
                      alt="Sticker"
                      className="w-full h-80 object-contain cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <img
                      src={stickerImage}
                      alt="Sticker"
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    Sticker
                  </h1>
                  <p className="text-2xl font-bold text-secondary">2,00 €</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Beschreibung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere einzigartigen Sticker gibt es nur bei uns zu kaufen, denn sie zeigen die lustigsten und bekanntesten Lehrersprüche von Lehrern unserer Schule. Sicherlich hast auch du schon mal den einen oder anderen Spruch gehört, und weißt, zu welchem Lehrer er gehört. Hör nochmal genauer hin, und mit etwas Glück findest du heraus, welcher Spruch zu welchem Lehrer gehört. Die leicht geschwungene, moderne Schriftart unserer Sticker und der leichte Farbverlauf der bunten Buchstaben sorgen für ein cooles und lässiges Design, das jeden Blick auf sie zieht. Zusätzlich harmoniert der Spruch zusammen mit dem schlichten Hintergrund und erzielt eine gute, nicht ablenkende Lesbarkeit. Auch von weit weg. Um dir und allen unseren Kunden den besten Komfort zu bieten, setzen wir auf hohe Qualität. Uns ist es wichtig, dass jeder mit unseren Produkten zufrieden ist. Deshalb lässt sich die Folie auf der Rückseite der Sticker leicht abziehen, sodass du den Sticker in nur wenigen Sekunden an deinen ausgewählten Platz kleben kannst, ohne dich ärgern zu müssen, dass die Folie nicht abgeht. Vor allem eine Mischung aus allen Sticker-Arten bildet einen fantastischen Eye-Catcher, denn die vielen verschiedenen bunten Farben ergeben zusammen ein tolles, auffälliges Aussehen. Egal, ob du deine Handyhülle, dein iPad, dein Collegeblock, dein Etui, dein Zimmer oder was ganz anderes verschönern willst. Mit unseren Stickern bekommst du nicht nur das hin, sondern hast auch immer eine schöne Erinnerung oder was zum Lachen, wenn du dich an den Moment erinnerst, als der Lehrer das zu dir oder deinen Mitschülern gesagt hat. Oder du hast einfach einen Spruch auf Lager, wenn zum Beispiel einer deiner Freunde mal wieder was auszusetzen hat. Bei uns hast du die Wahl zwischen fünf der besten Lehrersprüche. Zu diesen gehören:
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Details</h2>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Hochwertige Qualität</li>
                    <li>• Wasserdicht</li>
                    <li>• Verschiedene Motive verfügbar</li>
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

export default Sticker;