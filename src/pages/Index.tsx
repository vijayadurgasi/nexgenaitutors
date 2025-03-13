
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";

const Index = () => {
  return (
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
  );
};

export default Index;
