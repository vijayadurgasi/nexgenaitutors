'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Award,
  BookOpen,
  Brain,
  Calculator,
  Code,
  DraftingCompass,
  ExternalLink,
  GraduationCap,
  Heart,
  HeartPulse,
  Languages,
  Laptop, Lightbulb,
  Microscope,
  School
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const subjectCategories = [
  {
    id: 'core-academic',
    name: 'Core Academic Subjects',
    subjects: [
      { icon: <Calculator className="w-8 h-8" />, title: "Mathematics", description: "From algebra to calculus, master mathematical concepts", slug: "mathematics" },
      { icon: <BookOpen className="w-8 h-8" />, title: "English", description: "Reading, writing, grammar, and comprehension", slug: "english" },
      { icon: <Microscope className="w-8 h-8" />, title: "Science", description: "Physics, Chemistry, and Biology made simple", slug: "science" },
      { icon: <Brain className="w-8 h-8" />, title: "Thinking Skills", description: "Critical thinking and problem-solving", slug: "thinking-skills" }
    ]
  },
  {
    id: 'regional-languages',
    name: 'Regional Languages',
    subjects: [
      { icon: <Languages className="w-8 h-8" />, title: "Hindi", description: "Learn to read, write and speak fluently", slug: "hindi" },
      { icon: <Languages className="w-8 h-8" />, title: "Telugu", description: "Master Telugu with native speakers", slug: "telugu" },
      { icon: <Languages className="w-8 h-8" />, title: "Tamil", description: "Comprehensive Tamil language courses", slug: "tamil" },
      { icon: <Languages className="w-8 h-8" />, title: "Other Languages", description: "Additional regional language options", slug: "other-languages" }
    ]
  },
  {
    id: 'coding-tech',
    name: 'Coding & Tech Skills',
    subjects: [
      { icon: <Code className="w-8 h-8" />, title: "Scratch Programming", description: "Visual programming for beginners", slug: "scratch" },
      { icon: <Code className="w-8 h-8" />, title: "Beginner Python", description: "Learn Python programming fundamentals", slug: "python" },
      { icon: <Laptop className="w-8 h-8" />, title: "Digital Literacy", description: "Essential computer and internet skills", slug: "digital-literacy" }
    ]
  },
  {
    id: 'skill-building',
    name: 'Skill-Building Programs',
    subjects: [
      { icon: <Lightbulb className="w-8 h-8" />, title: "Vedic Maths", description: "Fast mental calculation techniques", slug: "vedic-maths" },
      { icon: <DraftingCompass className="w-8 h-8" />, title: "Abacus", description: "Ancient counting tool for mental math", slug: "abacus" },
      { icon: <Brain className="w-8 h-8" />, title: "Chess", description: "Strategy and critical thinking development", slug: "chess" }
    ]
  },
  {
    id: 'well-being',
    name: 'Well-being for Kids',
    subjects: [
      { icon: <Heart className="w-8 h-8" />, title: "Yoga", description: "Physical and mental wellness through yoga", slug: "yoga" },
      { icon: <HeartPulse className="w-8 h-8" />, title: "Mindfulness", description: "Techniques for emotional balance", slug: "mindfulness" }
    ]
  },
  {
    id: 'exam-prep',
    name: 'Exam Preparation',
    subjects: [
      { icon: <Award className="w-8 h-8" />, title: "NAPLAN", description: "National Assessment Program preparation", slug: "naplan" },
      { icon: <School className="w-8 h-8" />, title: "OC Test", description: "Opportunity Class placement test prep", slug: "oc-test" },
      { icon: <GraduationCap className="w-8 h-8" />, title: "Selective School Exams", description: "Comprehensive preparation for selective schools", slug: "selective-school" }
    ]
  }
];

const SubjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState(subjectCategories[0].id);

  const selectedCategory = subjectCategories.find(category => category.id === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6">
            Explore Our Offerings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            From foundational academics to advanced skills, our virtual platform supports a wide range of learning needs for students from Kindergarten to Grade 12.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 h-screen">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className="flex flex-col space-y-2">
              {subjectCategories.map(category => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "text-xl h-auto py-5 rounded-full",
                    activeCategory === category.id 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Content Area */}
          <div className="w-full md:w-3/4">
            {selectedCategory && (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{selectedCategory.name}</h3>
                  <div className="h-1 w-20 bg-blue-600 mt-2"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCategory.subjects.map((subject, index) => (
                    <Link href={`/subjects/${subject.slug}`} key={index}>
                      <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-navy-600 group h-full">
                        <CardContent className="relative pt-6 flex flex-col items-center h-full">
                          <ExternalLink className="absolute top-0 right-0 text-navy-400" />
                          <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform text-navy-600">
                            {subject.icon}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{subject.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{subject.description}</p>
                          <div className="mt-auto pt-4 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>Learn more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;