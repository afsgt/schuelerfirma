import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background py-12 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">DATENSCHUTZERKLÄRUNG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">I. Name und Anschrift des Verantwortlichen</h2>
                <p>Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:</p>
                <div className="mt-2 space-y-1">
                  <p>Anne-Frank-Schule</p>
                  <p>Städt. Gesamtschule</p>
                  <p>– Sekundarstufen I und II –</p>
                  <p>Saligmannsweg 40</p>
                  <p>33330 Gütersloh</p>
                  <p>Deutschland</p>
                  <p className="flex items-center gap-2 mt-2">
                    <Phone className="h-4 w-4" />
                    Tel.: +49 (0)5241 505 280 10
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail: sekretariat @ afs- gt. de
                  </p>
                  <p>Website: www.afs-gt.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">II. Name und Anschrift des Datenschutzbeauftragten</h2>
                <div className="space-y-1">
                  <p>Datenschutzbeauftragte</p>
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
                <h2 className="text-xl font-semibold mb-2 text-foreground">III. Allgemeines zur Datenverarbeitung</h2>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">1. Umfang der Verarbeitung personenbezogener Daten</h3>
                  <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
                  <p>Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.</p>
                  <p className="mt-2">Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.</p>
                  <p className="mt-2">Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.</p>
                  <p className="mt-2">Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">3. Datenlöschung und Speicherdauer</h3>
                  <p>Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">IV. Bereitstellung der Website und Erstellung von Logfiles</h2>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">1. Beschreibung und Umfang der Datenverarbeitung</h3>
                  <p>Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners.</p>
                  <p className="mt-2">Folgende Daten werden hierbei erhoben:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Informationen über den Browsertyp und die verwendete Version</li>
                    <li>Das Betriebssystem des Nutzers</li>
                    <li>Den Internet-Service-Provider des Nutzers</li>
                    <li>Die IP-Adresse des Nutzers</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                    <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">2. Rechtsgrundlage für die Datenverarbeitung</h3>
                  <p>Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">3. Zweck der Datenverarbeitung</h3>
                  <p>Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">4. Dauer der Speicherung</h3>
                  <p>Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist.</p>
                  <p className="mt-2">Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">V. Verwendung von Cookies</h2>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">a) Beschreibung und Umfang der Datenverarbeitung</h3>
                  <p>Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden.</p>
                  <p className="mt-2">In den Cookies werden dabei folgende Daten gespeichert und übermittelt:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Spracheinstellungen</li>
                    <li>Log-In-Informationen</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">b) Rechtsgrundlage für die Datenverarbeitung</h3>
                  <p>Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies ist Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">c) Dauer der Speicherung, Widerspruchs- und Beseitigungsmöglichkeit</h3>
                  <p>Cookies werden auf dem Rechner des Nutzers gespeichert und von diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer auch die volle Kontrolle über die Verwendung von Cookies. Durch eine Änderung der Einstellungen in Ihrem Internetbrowser können Sie die Übertragung von Cookies deaktivieren oder einschränken. Bereits gespeicherte Cookies können jederzeit gelöscht werden.</p>
                  <p className="mt-2">Zur Verwaltung der eingesetzten Cookies und ähnlichen Technologien setzen wir das Consent Tool „Real Cookie Banner" ein.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">VI. Kontaktformular und E-Mail-Kontakt</h2>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">1. Beschreibung und Umfang der Datenverarbeitung</h3>
                  <p>Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Betreff</li>
                    <li>Nachricht</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">2. Rechtsgrundlage für die Datenverarbeitung</h3>
                  <p>Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.</p>
                  <p className="mt-2">Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">3. Zweck der Datenverarbeitung</h3>
                  <p>Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">4. Dauer der Speicherung</h3>
                  <p>Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">VII. Plugins und Tools</h2>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">YouTube</h3>
                  <p>Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>
                  <p className="mt-2">Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: https://www.google.de/intl/de/policies/privacy</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">Google Web Fonts</h3>
                  <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden.</p>
                  <p className="mt-2">Weitere Informationen zu Google Web Fonts finden Sie unter: https://developers.google.com/fonts/faq</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">Google Maps</h3>
                  <p>Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                  <p className="mt-2">Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://www.google.de/intl/de/policies/privacy/</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">Google Calendar</h3>
                  <p>Auf unserer Webseite nutzen wir den Dienst Google Calendar, um Termine, Veranstaltungen und schulische Abläufe übersichtlich darzustellen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
                  <p className="mt-2">Weitere Informationen finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">Adobe Fonts</h3>
                  <p>Wir verwenden auf unserer Webseite Adobe Fonts, um Schriftarten einheitlich und optisch ansprechend darzustellen.</p>
                  <p className="mt-2">Weitere Informationen finden Sie in der Datenschutzerklärung von Adobe: https://www.adobe.com/de/privacy/policies/adobe-fonts.html</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">Cloudflare</h3>
                  <p>Zum Schutz unserer Webseite und zur Optimierung der Ladezeiten nutzen wir den Dienst Cloudflare.</p>
                  <p className="mt-2">Weitere Informationen finden Sie unter: https://www.cloudflare.com/privacypolicy</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">Matomo</h3>
                  <p>Unsere Webseite nutzt den Open-Source-Webanalysedienst Matomo, der auf unserem eigenen Server gehostet wird.</p>
                  <p className="mt-2">Sie können der anonymisierten Datenerhebung jederzeit widersprechen.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">VIII. WebAnalytics</h2>
                <p>Unsere Website wird bei 1&1 gehostet. Hier sind Tracking und Logging sind standardmäßig aktiviert.</p>
                <p className="mt-2">Mit welchen Technologien ermittelt 1&1 die Daten?</p>
                <p className="mt-2">Die Daten werden entweder durch einen Pixel oder durch ein Logfile ermittelt. Zum Schutz von personenbezogenen Daten verwendet 1&1 WebAnalytics keine Cookies.</p>
                <p className="mt-2">In 1&1 WebAnalytics werden Daten ausschließlich zur statistischen Auswertung und zur technischen Optimierung des Webangebots erhoben.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-foreground">IX. Rechte der betroffenen Person</h2>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">1. Auskunftsrecht</h3>
                  <p>Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">2. Recht auf Berichtigung</h3>
                  <p>Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">3. Recht auf Einschränkung der Verarbeitung</h3>
                  <p>Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">4. Recht auf Löschung</h3>
                  <p>Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">5. Recht auf Unterrichtung</h3>
                  <p>Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">6. Recht auf Datenübertragbarkeit</h3>
                  <p>Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">7. Widerspruchsrecht</h3>
                  <p>Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">8. Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</h3>
                  <p>Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">9. Automatisierte Entscheidung im Einzelfall einschließlich Profiling</h3>
                  <p>Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2 text-foreground">10. Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
                  <p>Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
