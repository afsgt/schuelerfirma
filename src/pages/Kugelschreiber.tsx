import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import kugelschreiberImage from "@/assets/products/Stifte/IMG_1728.jpeg";

const Kugelschreiber = () => {
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
                      src={kugelschreiberImage}
                      alt="Kugelschreiber"
                      className="w-full h-80 object-contain cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <img
                      src={kugelschreiberImage}
                      alt="Kugelschreiber"
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    Kugelschreiber
                  </h1>
                  <p className="text-2xl font-bold text-secondary">1,20 €</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Beschreibung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere hochwertigen AFS-Kugelschreiber aus blau, rot und grün gefärbtem Metall schreiben flüssig und ohne Unterbrechung. Sie eignen sich perfekt für die Schule und deinen Alltag. Besonders in der Klausurphase sind sie nicht wegzudenken, wenn Effizienz, Zuverlässigkeit und ein guter Zeitplan gefragt sind. Egal ob für Notizen, Analysen oder zum Kugelschreiber-Zeichnen in deiner Freizeit. Ihre angenehme Schreibweise und der bequeme Halt sorgen dafür, dass jeder sie über lange Zeit in der Hand halten kann, ohne dabei zu ermüden. Der elegante Glanz der Farben und das AFS-Logo auf dem Kugelschreiber sorgen für ein cooles, lässiges und einzigartiges Design, dass nur bei uns erhältlich ist. Doch du hast auch die Wahl zwischen der Tintenfarbe. Wählst du den roten Kugelschreiber, erhältst du eine schwarze Farbe. Entscheidest du dich hingegen für den grünen oder blauen Kugelschreiber, erhältst du einen blauen Schriftzug. Der praktische Clip am Kugelschreiber sorgt für zusätzlichen Komfort. Befestige ihn beispielsweise am Hemd oder an deinem Collegeblock, ohne immer darauf zu achten, dass du ihn nicht verlierst. So bleibt er immer deiner. Doch nicht nur wir sind von der Qualität unseres Produkts überzeugt. Viele unserer Kunden, die sich für einen unserer Kugelschreiber entschieden haben, haben die Qualität und Leistung des Kugelschreibers gelobt. Sie sind sehr zufrieden und haben sich manchmal auch dazu entschieden, weitere Kugelschreiber zu kaufen, nachdem sie einen ausprobiert haben. Mit dem einfachen Klick-Mechanismus an der Oberseite unserer Kugelschreiber kannst du ganz einfach, die Schreibspitze hervorschieben oder auch wieder verstecken, damit nichts versehentlich angemalt wird. So kannst du deinen Kugelschreiber auch ganz entspannt in deiner Hosentasche tragen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Details</h2>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Blau schreibende Mine</li>
                    <li>• Ergonomischer Griff</li>
                    <li>• Langlebige Tinte</li>
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

export default Kugelschreiber;