import React from "react";
import Footer from "@/components/Footer";

const Kontakt: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 md:pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-xl py-12">
          <h1 className="text-4xl font-extrabold mb-10 text-primary text-center">Kontakt</h1>
          <p className="mb-8 text-center text-muted-foreground">
            Du hast Fragen oder möchtest mit uns in Kontakt treten? Schreib uns eine E-Mail.
          </p>
          <div className="mt-10 text-center text-lg">
            <div className="mb-4">Anne-Frank-Gesamtschule, Gütersloh</div>
            <div className="mb-4">
              E-Mail: <a href="mailto:schuelerfirma@afs-gt.de" className="text-primary hover:underline font-semibold">schuelerfirma@afs-gt.de</a>
            </div>
            <div>Telefon: +49 (0) 5241 50528010</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
