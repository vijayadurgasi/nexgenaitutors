
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from '@/providers/query-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatbotButton from "@/components/Chat/ChatbotButton";
import CtaSection from "@/components/home/CtaSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

function App() {
  return (
    <QueryProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <FeaturesSection />
            <SubjectsSection />
            <TestimonialsSection />
            <CtaSection />
          </main>
          <Footer />
          <ChatbotButton />
        </div>
      </TooltipProvider>
    </QueryProvider>
  )
}

export default App
