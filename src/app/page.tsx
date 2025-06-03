
import ChatbotButton from "@/components/Chat/ChatbotButton";
import ChooseYourLearningStyle from "@/components/home/ChooseYourLearningStyle";
import CtaSection from "@/components/home/CtaSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ThreeStepPlan from "@/components/home/ThreeStepPlan";
import WhyParentsTrustUs from "@/components/home/WhyParentsTrustUs";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <SubjectsSection />
        {/* <TestimonialsSection /> */}
        <ThreeStepPlan />
        <ChooseYourLearningStyle />
        <WhyParentsTrustUs />
        <CtaSection />
      </main>
      <ChatbotButton />
    </div>
  );
};

export default Page;
