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
import Image from "next/image";
import { useState } from "react";

interface ICategory {
    id: string;
    name: string;
    slug: string;
    subjects: {
        icon: JSX.Element;
        title: string;
        description: string;
        slug: string;
    }[];
}

const subjectCategories: Array<ICategory> = [
  {
    id: 'core-academic',
    name: 'Core Academic Subjects',
    slug: 'core-academic-subjects',
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
    slug: 'regional-languages',
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
    slug: 'coding-and-tech-skills',
    subjects: [
      { icon: <Code className="w-8 h-8" />, title: "Scratch Programming", description: "Visual programming for beginners", slug: "scratch" },
      { icon: <Code className="w-8 h-8" />, title: "Beginner Python", description: "Learn Python programming fundamentals", slug: "python" },
      { icon: <Laptop className="w-8 h-8" />, title: "Digital Literacy", description: "Essential computer and internet skills", slug: "digital-literacy" }
    ]
  },
  {
    id: 'skill-building',
    name: 'Skill-Building Programs',
    slug: 'skill-building-programs',
    subjects: [
      { icon: <Lightbulb className="w-8 h-8" />, title: "Vedic Maths", description: "Fast mental calculation techniques", slug: "vedic-maths" },
      { icon: <DraftingCompass className="w-8 h-8" />, title: "Abacus", description: "Ancient counting tool for mental math", slug: "abacus" },
      { icon: <Brain className="w-8 h-8" />, title: "Chess", description: "Strategy and critical thinking development", slug: "chess" }
    ]
  },
  {
    id: 'well-being',
    name: 'Well-being for Kids',
    slug: 'well-being-for-kids',
    subjects: [
      { icon: <Heart className="w-8 h-8" />, title: "Yoga", description: "Physical and mental wellness through yoga", slug: "yoga" },
      { icon: <HeartPulse className="w-8 h-8" />, title: "Mindfulness", description: "Techniques for emotional balance", slug: "mindfulness" }
    ]
  },
  {
    id: 'exam-prep',
    name: 'Exam Preparation',
    slug: 'exam-preparation',
    subjects: [
      { icon: <Award className="w-8 h-8" />, title: "NAPLAN", description: "National Assessment Program preparation", slug: "naplan" },
      { icon: <School className="w-8 h-8" />, title: "OC Test", description: "Opportunity Class placement test prep", slug: "oc-test" },
      { icon: <GraduationCap className="w-8 h-8" />, title: "Selective School Exams", description: "Comprehensive preparation for selective schools", slug: "selective-school" }
    ]
  }
];

const SubjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState(subjectCategories[0].id);

  const selectedCategory : ICategory | undefined = subjectCategories.find(category => category.id === activeCategory);

  return (
    <section className="py-20 relative h-fit lg:h-[150vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Subject background"
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw"
        />
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-primary/40 dark:to-primary-foreground/40 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6 text-white">
            Explore Our Offerings
          </h2>
          <p className="text-xl text-gray-200">
            From foundational academics to advanced skills, our virtual platform supports a wide range of learning needs for students from Kindergarten to Grade 12.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col space-y-2">
              {subjectCategories.map(category => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "text-lg h-auto py-4 rounded-full",
                    activeCategory === category.id 
                      ? "bg-navy-500 text-white hover:bg-navy-600 border-navy-400" 
                      : "bg-white/20 text-white border-white/30 hover:text-white hover:bg-white/40"
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            {selectedCategory && (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedCategory.name}</h3>
                  <div className="h-1 w-20 bg-navy-500 mt-2"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCategory.subjects.map((subject, index) => (
                    <Link href={`/subjects/${selectedCategory.slug}/${subject.slug}`} key={index}>
                      <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-navy-400 group h-full bg-white/80">
                        <CardContent className="relative pt-6 flex flex-col items-center h-full">
                          <ExternalLink className="absolute top-2 right-2 text-navy-700" />
                          <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform text-navy-600">
                            {subject.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-navy-600 mb-2">{subject.title}</h3>
                          <p className="text-sm text-gray-600">{subject.description}</p>
                          <div className="mt-auto pt-4 text-navy-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
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