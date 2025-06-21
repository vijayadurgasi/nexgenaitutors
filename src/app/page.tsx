
import ChatbotButton from "@/components/Chat/ChatbotButton";
import CtaSection from "@/components/home/CtaSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import WhyNextGenAISection from "@/components/home/WhyNextGenAISection";
import WhatWeOfferSection from "@/components/home/WhatWeOfferSection";
import SuccessPlanSection from "@/components/home/SuccessPlanSection";
import LearningStyleSection from "@/components/home/LearningStyleSection";
import TrustSection from "@/components/home/TrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <WhyNextGenAISection />
        <WhatWeOfferSection />
        <SuccessPlanSection />
        <LearningStyleSection />
        <FeaturesSection />
        <TrustSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <ChatbotButton />
    </div>
  );
};

export default Page;
