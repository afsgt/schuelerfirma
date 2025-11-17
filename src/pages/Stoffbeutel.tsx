import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import stoffbeutelImage from "@/assets/products/Beutel/IMG_1907.jpeg";

const Stoffbeutel = () => {
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
                      src={stoffbeutelImage}
                      alt="Stoffbeutel"
                      className="w-full h-80 object-contain cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <img
                      src={stoffbeutelImage}
                      alt="Stoffbeutel"
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    Stoffbeutel
                  </h1>
                  <p className="text-2xl font-bold text-secondary">3,50 €</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Beschreibung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere hochwertigen und lässig designten Stoffbeutel sehen nicht nur gut aus, sondern bestehen auch zu 100 % aus Baumwolle. Der starke Kontrast zwischen der schwarzen Stofffarbe und dem grün aufgedruckten Logo lässt den Stoffbeutel cool aussehen und macht ihn zu einem Hingucker. Doch unsere einzigartigen Stoffbeutel überzeugen nicht nur mit ihrem Aussehen und ihrer Qualität. Sie sind zudem sehr leicht, sodass man sie überall hin mitnehmen kann, ohne eine schwere Last mit sich tragen zu müssen. Der Stoff unserer Stoffbeutel ist sehr biegsam und nicht vergleichbar mit den harten Plastiktüten aus dem Supermarkt, weshalb du ihn ganz einfach ohne schwere Bemühungen so klein falten kannst, dass er in nahezu jede Hosentasche passt und du freie Hände bei all deinen Aktivitäten hast. Unsere Stoffbeutel sind zudem für nahezu jeden Inhalt gedacht, denn du bequem tragen möchtest. Egal ob deine Schulmaterialen, einen Einkauf in deinem Lieblingsgeschäft oder Leckereien für deine Freunde wenn du Geburtstag hast. Du hast außerdem die Wahl, ob du unseren Stoffbeutel über die Schulter gehangen tragen möchtest oder ihn doch lieber in der Hand hältst. Unsere Stoffbeutel besitzen zwei Stoffgriffe, die so konzipiert sind, dass du dich nicht auf eine bestimmte Trage-Art beschränken musst. Du musst auch nicht alleine mit unserem Stoffbeutel laufen, denn unsere Stoffbeutel eignen sich auch perfekt als Geschenk für Familie, Freunde und Verwandte. Gemeinsam könnt ihr dann im Partnerlook spazieren gehen. Macht euch gegenseitig das Leben leichter und habt Freunde mit unseren vielseitig einsetzbaren und komfortablen Stoffbeuteln.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Details</h2>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 100% Baumwolle</li>
                    <li>• Maße: 38 x 42 cm</li>
                    <li>• Traglast bis zu 10kg</li>
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

export default Stoffbeutel;