import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import fugamo1 from "@/assets/fugamo/1.webp";
import fugamo9 from "@/assets/9.webp";
import fugamo2 from "@/assets/fugamo/2.webp";
import fugamo3 from "@/assets/fugamo/3.webp";
import fugamo4 from "@/assets/fugamo/4.webp";
import fugamo5 from "@/assets/fugamo/5.webp";
import fugamo6 from "@/assets/fugamo/6.webp";
import fugamo7 from "@/assets/fugamo/7.webp";
import fugamo8 from "@/assets/fugamo/8.webp";

const Fugamo = () => {
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

            {/* Title */}
            <h1 className="text-4xl font-bold text-primary mb-12 text-center">
              Fugamo-Anleitung
            </h1>

            {/* Content */}
            <div className="space-y-8 text-center">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-8">Anmeldung</h2>
                <p className="text-muted-foreground mb-4">
                  Das Bestellen von Kleidung ist nicht direkt über unsere eigene Website möglich. Es läuft alles über die Firma Fugamo, weshalb ihr folgende Anmeldedaten auf <a href="https://fugamo.de/login/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://fugamo.de/login/</a> eingeben müsst:
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg border">
                  <p className="font-semibold">Benutzername: Anne</p>
                  <p className="font-semibold">Passwort: Gütersloh</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  Du willst die Anmeldedaten nicht mit der Hand abtippen? Kein Problem! Nutze diesen Link:
                </p>
                <img src={fugamo9} alt="Fugamo 9" className="max-w-xs scale-[0.95] mx-auto block mt-4" />
                <p className="text-muted-foreground mt-2">
                  Link: <a href="https://fugamo.de/login/?user=Anne&pw=G%C3%BCtersloh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://fugamo.de/login/?user=Anne&pw=Gütersloh</a>
                </p>
                <p className="text-muted-foreground mt-4">
                  Die Bedienung des Shops ist ganz einfach und wird direkt auf der Fugamo-Seite erklärt.
                </p>
                <p className="text-muted-foreground">
                  Dort könnt ihr T-Shirts, Poloshirts, Zip-Jacken und Pullover kaufen. Auch das Logo und die Farbe des Kleidungsstückes lässt sich auswählen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-8">Logos</h2>
                <p className="text-muted-foreground mb-4">
                  Bei allen Produkten könnt ihr zwischen den zwei Logos auswählen:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Das Sterne-Logo:</h3>
                    <img src={fugamo1} alt="Fugamo 1" className="max-w-xs scale-[2.5] mx-auto block mt-24 mb-24" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Der Bücherschrank, hinter dem sich Anne Frank versteckt hatte:</h3>
                    <img src={fugamo2} alt="Fugamo 2" className="max-w-xs scale-[2.5] mx-auto block mt-24 mb-24" />
                  </div>
                </div>
              </section>

              <section className="mb-8 mt-8">
                <h2 className="text-2xl font-semibold text-primary mb-32">Produkte</h2>
                <div className="space-y-[220px]">
                  <img src={fugamo3} alt="Fugamo 3" className="max-w-xs scale-[2.5] mx-auto block" />
                  <img src={fugamo4} alt="Fugamo 4" className="max-w-xs scale-[2.5] mx-auto block" />
                  <img src={fugamo5} alt="Fugamo 5" className="max-w-xs scale-[2.5] mx-auto block" />
                  <img src={fugamo6} alt="Fugamo 6" className="max-w-xs scale-[2.5] mx-auto block" />
                  <img src={fugamo7} alt="Fugamo 7" className="max-w-xs scale-[2.5] mx-auto block" />
                  <img src={fugamo8} alt="Fugamo 8" className="max-w-xs scale-[2.5] mx-auto block" />
                </div>
                <h2 className="text-2xl font-semibold text-primary mb-8 mt-32">Bezahlung</h2>
                <p className="text-muted-foreground">
                  Die Bezahlung erfolgt direkt an die Firma Fugamo. Es wird mit Vorkasse bezahlt.
                </p>
              </section>



              <section>
                <h2 className="text-2xl font-semibold text-primary mb-8">Lieferung</h2>
                <p className="text-muted-foreground mb-4">
                  Abschließend könnt ihr dann zwischen zwei Versandmöglichkeiten auswählen:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Ihr lasst die Produkte direkt zu euch nach Hause oder an eine angegebene Adresse liefern (Versandt: sechs Euro). Diese Versandart wird immer angeboten.</li>
                  <li>Ihr lasst die Produkte direkt zur Schule liefern (Versandt: gratis). Dort wird alles in den Klassen ausgeteilt.</li>
                </ol>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                  <p className="text-yellow-800 font-medium">
                    Wichtig: Diese Versandart wird bei Fugamo nur dann angeboten, wenn es eine Bestellaktion gibt. Im anderen Fall wird euch im "Zur Kasse"-Bereich von Fugamo diese Versandart nicht angezeigt. Du erfährst auf unserer Website und durch Flyer in der Schule, wenn es soweit ist und eine Bestellaktion stattfindet.
                  </p>
                </div>
              </section>

              <section className="text-center">
                <p className="text-lg text-muted-foreground">
                  Viel Spaß beim Durchstöbern des Shops!
                </p>
                <p className="text-lg font-semibold text-primary mt-2">
                  Eure Schülerfirma
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fugamo;