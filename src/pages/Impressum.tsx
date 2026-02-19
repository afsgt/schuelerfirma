import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background py-12 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">IMPRESSUM</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Impressum</h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Anne-Frank-Schule</p>
                  <p>Saligmannsweg 40</p>
                  <p>33330 Gütersloh</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                <div className="text-muted-foreground space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Tel.: 05241 50528010
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Fax: 05241 50528031
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail: Sekretariat (ät) afs-gt.schule
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Schulleitung</h2>
                <div className="text-muted-foreground">
                  <p>Jan Rüter (Schulleiter)</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Schulträger</h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Stadt Gütersloh</p>
                  <p>Fachbereich Jugend und Bildung</p>
                  <p>Abteilungen 40.1 und 40.3 (Schulen)</p>
                  <p>Eickhoffstr. 38</p>
                  <p>33330 Gütersloh</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Betreiber / Dienstanbieter</h2>
                <div className="text-muted-foreground">
                  <p>Anne-Frank-Schule</p>
                  <p>(Adresse siehe oben)</p>
                  <p className="mt-2">gemäß § 5 TMG, § 55 RStV</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Redaktionell verantwortlich</h2>
                <div className="text-muted-foreground">
                  <p>Jan Rüter</p>
                  <p>(Adresse gemäß Schulleitung)</p>
                  <p className="mt-1">gemäß § 55 Abs. 2 RStV</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Datenschutzbeauftragte</h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Lehmich, Stephan und Heinemann, André</p>
                  <p>Schulamt des Kreises Gütersloh</p>
                  <p>Herzebrocker Str. 140</p>
                  <p>33324 Gütersloh</p>
                  <p className="mt-2">T: 05241 – 85-1472</p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    stephan.lehmich@bdsb.nrw.schule
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    a.heinemann@kreis-guetersloh.de
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Webhosting</h2>
                <div className="text-muted-foreground">
                  <p>1&1/IONOS</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Design & Umsetzung</h2>
                <div className="text-muted-foreground">
                  <p>Coded and designed by anders-mediadesign | powered by WordPress</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground italic">
                  Zur Verwendung der Daten: Einer Nutzung der in diesem Impressum 
                  veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit 
                  ausdrücklich widersprochen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
