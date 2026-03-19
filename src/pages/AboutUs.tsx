import Footer from "@/components/Footer";
import teamPhoto from "@/assets/team-feature.png";

const AboutUs = () => {

  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-background py-12 pt-16 md:pt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-10 text-primary text-center">Über uns</h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Wir sind die Schülerfirma (Bee Franktory)<br />der Anne-Frank-Gesamtschule in Gütersloh
          </p>
        </div>

        {/* Team Photo Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamPhoto} 
                  alt="Schülerfirma Team"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              <p className="text-center text-muted-foreground mt-6 text-lg">
                Unser engagiertes Team der Schülerfirma
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Wer wir sind
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Die Schülerfirma ist ein Projekt der Anne-Frank-Gesamtschule in Gütersloh.
                  Wir sind Schülerinnen und Schüler, die gemeinsam ein echtes Unternehmen führen und dabei
                  wertvolle Erfahrungen sammeln.
                </p>
                <p className="text-lg leading-relaxed">
                  In unserer Schülerfirma übernehmen wir alle Aufgaben eines richtigen Unternehmens:
                  vom Einkauf über die Produktion bis hin zum Verkauf und Marketing. Dabei lernen wir nicht
                  nur theoretisches Wissen, sondern setzen es direkt in die Praxis um.
                </p>
                <p className="text-lg leading-relaxed">
                  Unser Team besteht aus motivierten Schülerinnen und Schülern verschiedener Jahrgangsstufen,
                  die mit Begeisterung und Kreativität an unseren Projekten arbeiten. Gemeinsam entwickeln wir
                  neue Produkte, organisieren Events und kümmern uns um unsere Kunden.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
