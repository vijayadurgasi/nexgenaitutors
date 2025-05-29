
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import Packages from "./components/pages/Packages";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Teachers from "./components/pages/Teachers";
import SubjectsPage from "./components/pages/SubjectsPage";
import SubjectDetails from "./components/pages/SubjectDetails";
import SciencesPage from "./components/pages/SciencesPage";
import LanguagesPage from "./components/pages/LanguagesPage";
import Blog from "./components/pages/Blog";

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
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
