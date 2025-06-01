
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Languages, Microscope, Code, Music, Palette, Globe, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubjectsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We Offer: Programs for Every Learner
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Master any subject with our comprehensive curriculum and personalized approach
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SubjectCard
            icon={<Calculator className="w-8 h-8 text-navy-600" />}
            title="Mathematics"
            description="From algebra to calculus, master mathematical concepts"
          />
          <SubjectCard
            icon={<Languages className="w-8 h-8 text-navy-600" />}
            title="Languages"
            description="Learn English, Spanish, French, and more"
          />
          <SubjectCard
            icon={<Microscope className="w-8 h-8 text-navy-600" />}
            title="Sciences"
            description="Physics, Chemistry, and Biology made simple"
          />
          <SubjectCard
            icon={<Code className="w-8 h-8 text-navy-600" />}
            title="Computer Science"
            description="Programming, web development, and more"
          />
          <SubjectCard
            icon={<Music className="w-8 h-8 text-navy-600" />}
            title="Music"
            description="Theory, composition, and instrument lessons"
          />
          <SubjectCard
            icon={<Palette className="w-8 h-8 text-navy-600" />}
            title="Arts"
            description="Drawing, painting, and digital art"
          />
          <SubjectCard
            icon={<Globe className="w-8 h-8 text-navy-600" />}
            title="Social Studies"
            description="History, Geography, and Current Events"
          />
          <SubjectCard
            icon={<BookText className="w-8 h-8 text-navy-600" />}
            title="Literature"
            description="Reading comprehension and writing skills"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white px-8 py-6 text-lg hover:from-navy-700 hover:to-navy-900">
            View All Subjects
          </Button>
        </div>
      </div>
    </section>
  );
};

const SubjectCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-navy-600 group">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SubjectsSection;
