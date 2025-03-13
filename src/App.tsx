
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Packages from "./pages/Packages";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Teachers from "./pages/Teachers";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectDetails from "./pages/SubjectDetails";
import SciencesPage from "./pages/SciencesPage";
import LanguagesPage from "./pages/LanguagesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/subjects/:subject" element={<SubjectDetails />} />
          <Route path="/subjects/sciences" element={<SciencesPage />} />
          <Route path="/subjects/languages" element={<LanguagesPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
