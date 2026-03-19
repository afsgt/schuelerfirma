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
          <div className="grid gap-8">
            {/* Calendar Sidebar */}
            <div className="max-w-2xl mx-auto w-full">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Kalender</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center w-full">
                    <iframe
                      src="https://calendar.google.com/calendar/embed?src=kalender.afs%40gmail.com&ctz=Europe%2FBerlin"
                      style={{ border: 0 }}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      scrolling="no"
                      className="rounded-lg border max-w-full"
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
