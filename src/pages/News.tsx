import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNews, NewsItem } from "@/lib/data";

const News: React.FC = () => {
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      const newsData = await getNews();
      const filteredNews = newsData.filter(item => item.published).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setNewsItems(filteredNews);
    };
    loadNews();
  }, []);

  return (
    <div className="min-h-screen">
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 max-w-7xl py-12">
          <h1 className="text-4xl font-extrabold mb-10 text-primary text-center">Neuigkeiten</h1>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* News Items */}
            <div className="lg:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                {newsItems.map((item) => (
                  <article key={item.id} className="bg-card rounded-lg shadow-md border border-border p-6 flex flex-col gap-2">
                    <h2 className="text-xl font-semibold text-primary mb-1">{item.title}</h2>
                    <time className="text-xs text-muted-foreground mb-2" dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString("de-DE")}
                    </time>
                    <p className="text-foreground text-sm flex-1">{item.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Calendar Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Kalender</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <iframe
                      src="https://calendar.google.com/calendar/embed?src=kalender.afs%40gmail.com&ctz=Europe%2FBerlin"
                      style={{ border: 0 }}
                      width="100%"
                      height="400"
                      frameBorder="0"
                      scrolling="no"
                      className="rounded-lg border"
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Im Kalender stehen alle unsere Verkaufstermine. Diese können sich manchmal spontan ändern.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
