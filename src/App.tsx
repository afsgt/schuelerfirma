import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Kontakt from "./pages/Kontakt";
import Geschichte from "./pages/Geschichte";
import ProductDetail from "./pages/ProductDetail";
import Notizbuch from "./pages/Notizbuch";
import Stoffbeutel from "./pages/Stoffbeutel";
import Kugelschreiber from "./pages/Kugelschreiber";
import Sticker from "./pages/Sticker";
import Kaffeetasse from "./pages/Kaffeetasse";
import Year2024_2025 from "./pages/2025";
import Fugamo from "./pages/Fugamo";
import Gallery from "./pages/Gallery";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Haftungsbeschraenkung from "./pages/Haftungsbeschraenkung";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    try {
      const search = window.location.search;
      if (search.startsWith('/?')) {
        // Get the path after "/?"
        let path = search.slice(2);
        
        // Validate the path - check it doesn't start with invalid characters
        // and doesn't contain malformed ~and~ sequences at the start
        if (!path.startsWith('&') && !path.startsWith('/&') && path.length > 0 && path.length < 200) {
          // Convert ~and~ back to & for proper query string handling
          const validPath = path.replace(/~and~/g, '&');
          
          // Only navigate if the path looks valid (doesn't start with /& or contain multiple & at start)
          if (!validPath.startsWith('/&') && !validPath.startsWith('&&')) {
            navigate(validPath, { replace: true });
          }
        }
      }
    } catch (e) {
      // Silently fail - don't break the app if redirect handler fails
      console.error('Redirect handler error:', e);
    }
  }, [navigate]);

  return null;
};

const AppRouterContent = () => {
  return (
    <>
      <ScrollToTop />
      <RedirectHandler />
      <Routes>
        <Route path="/*" element={<PublicLayout />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          basename={import.meta.env.BASE_URL}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <AppRouterContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const PublicLayout = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ueber-uns" element={<AboutUs />} />
      <Route path="/geschichte" element={<Geschichte />} />
      <Route path="/geschichte/2024/2025" element={<Year2024_2025 />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/notizbuch" element={<Notizbuch />} />
      <Route path="/shop/stoffbeutel" element={<Stoffbeutel />} />
      <Route path="/shop/kugelschreiber" element={<Kugelschreiber />} />
      <Route path="/shop/sticker" element={<Sticker />} />
      <Route path="/shop/kaffeetasse" element={<Kaffeetasse />} />
      <Route path="/shop/:slug" element={<ProductDetail />} />
      <Route path="/fugamo" element={<Fugamo />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/news" element={<News />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/haftungsbeschraenkung" element={<Haftungsbeschraenkung />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);


export default App;
