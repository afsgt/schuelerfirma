import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import notizbuchImage from "@/assets/products/Notizbücher/IMG_1729.jpeg";

const Notizbuch = () => {
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
                      src={notizbuchImage}
                      alt="Notizbuch"
                      className="w-full h-80 object-contain cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <img
                      src={notizbuchImage}
                      alt="Notizbuch"
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    Notizbuch
                  </h1>
                  <p className="text-2xl font-bold text-secondary">4,99 €</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Beschreibung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere vielfältig einsetzbaren Notizbücher sind einzigartig und nur bei uns zu finden. Sie bieten dir ein hellgrünes Cover mit einem modernen Sterne-AFS-Logo auf der Vorderseite und innen ein gepunktetes Papier, dass dir Zeichnen, Schreiben, Rechnen, Dichten, Lernen und vieles mehr ermöglicht. Die Punkte helfen dir bei der Orientierung und Ausrichtung deiner Arbeit auf dem Papier, aber sind beim Betrachten der fertigen Arbeit nur noch kaum wahrnehmbar. Die schöne helle Farbe des Covers macht es dir leicht, dein Notizbuch schnell zu finden. Selbst in deiner Tasche kannst du es schnell finden, wo nur wenig Licht hinkommt. Du willst einfach schnell etwas eintragen, oder hast Angst es gleich schnell wieder zu vergessen? Mit unseren Notizbüchern ist das kein Problem! Klappe einfach schnell das Notizbuch mit einem Handgriff auf, zücke deinen Stift und schon bist du startklar deine Notiz oder Skizze zu machen. Übrigens: Unsere eigenen AFS-Kugelschreiber sind dafür genau das richtige! Schau doch einfach auf unserer Produkteliste hier auf der Website nochmal vorbei. Die kleine, kompakte Größe unserer Notizbücher im A5-Format ermöglicht einen einfachen Transport zu jedem Ort hin. Es passt in nahezu jedes Taschenfach. Damit deine wichtigen Notizen und schönen Bilder sowie Erinnerungen nicht verloren gehen oder durcheinander wirbeln, wie man es von manche Collegeblöcken kennt, haben unsere Notizbücher keine Abreisstreifen, die mit der Zeit immer loser werden. So bleiben deine Notizen immer bei dir an Ort und Stelle und du hast keine plötzliche böse Überraschung, dass etwas fehlt. Unsere Notizbücher sind relativ dünn und dadurch extra leicht, aber an Papier wird es dir nicht fehlen. So bekommst du mit einem Notizbuch 2 in 1. Tragekomfort und genug Platz für deine kreativen Werke.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Details</h2>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 100 Seiten liniertes Papier</li>
                    <li>• Feste Kunststoffbindung</li>
                    <li>• Maße: A5 (148 x 210 mm)</li>
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

export default Notizbuch;