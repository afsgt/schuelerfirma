import React from "react";
import Footer from "@/components/Footer";

const Kontakt: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 max-w-xl py-12">
          <h1 className="text-4xl font-extrabold mb-10 text-primary text-center">Kontakt</h1>
          <p className="mb-8 text-center text-muted-foreground">
            Du hast Fragen oder möchtest mit uns in Kontakt treten? Schreib uns eine Nachricht oder nutze die untenstehenden Kontaktmöglichkeiten.
          </p>
          <form className="bg-card rounded-lg shadow-md border border-border p-6 flex flex-col gap-4 mt-12">
            <input
              type="text"
              placeholder="Dein Name"
              className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Deine Nachricht"
              rows={5}
              className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold shadow"
            >
              Nachricht senden
            </button>
          </form>
          <div className="mt-10 text-center text-sm text-muted-foreground">
            <div>Anne-Frank-Gesamtschule, Gütersloh</div>
            <div>Email: <a href="mailto:info@afs-gt.de" className="text-primary hover:underline">info@afs-gt.de</a></div>
            <div>Telefon: +49 (0) 5241 123456</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
