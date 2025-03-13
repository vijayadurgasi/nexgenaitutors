
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<Index />} /> {/* Placeholder for now */}
          <Route path="/courses" element={<Index />} /> {/* Placeholder for now */}
          <Route path="/teachers" element={<Index />} /> {/* Placeholder for now */}
          <Route path="/contact-us" element={<Index />} /> {/* Placeholder for now */}
          <Route path="/how-it-works" element={<Index />} /> {/* Placeholder for now */}
          <Route path="/subjects/:subject" element={<Index />} /> {/* Placeholder for now */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
