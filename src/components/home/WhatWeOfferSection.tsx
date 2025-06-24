
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Globe, Code, Star, Heart, Users } from "lucide-react";

const WhatWeOfferSection = () => {
  const programs = [
    {
      icon: <Book className="h-8 w-8 text-navy-600" />,
      title: "Core Academic Subjects",
      description: "Math, English, Science & Thinking Skills"
    },
    {
      icon: <Globe className="h-8 w-8 text-navy-600" />,
      title: "Regional Languages",
      description: "Hindi, Telugu, Tamil, and more — taught by native speakers"
    },
    {
      icon: <Code className="h-8 w-8 text-navy-600" />,
      title: "Coding & Tech Skills",
      description: "Scratch Programming, Beginner Python, Digital Literacy"
    },
    {
      icon: <Star className="h-8 w-8 text-navy-600" />,
      title: "Skill-Building Programs",
      description: "Vedic Maths, Abacus, Chess – enhance focus and logic"
    },
    {
      icon: <Heart className="h-8 w-8 text-navy-600" />,
      title: "Well-being for Kids",
      description: "Yoga and Mindfulness sessions for emotional balance"
    },
    {
      icon: <Users className="h-8 w-8 text-navy-600" />,
      title: "Exam Preparation",
      description: "Targeted support for NAPLAN, OC Test, and Selective School Exams"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">
            What We Offer: Programs for Every Learner
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            From foundational academics to advanced skills, our virtual platform supports a wide range of learning needs for students from Kindergarten to Grade 12:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-navy-200 hover:shadow-lg transition-all hover:border-navy-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-navy-50 rounded-full w-fit group-hover:bg-navy-100 transition-colors">
                  {program.icon}
                </div>
                <CardTitle className="text-xl text-navy-700">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
