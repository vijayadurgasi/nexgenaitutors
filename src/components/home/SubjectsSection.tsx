"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ICategory {
  id: string;
  name: string;
  slug: string;
  subjects: {
    image: string;
    title: string;
    description: string;
    slug: string;
  }[];
}

const subjectCategories: Array<ICategory> = [
  {
    id: "core-academic",
    name: "Core Academic Subjects",
    slug: "core-academic-subjects",
    subjects: [
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/005/421/417/large_2x/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vector.jpg",
        title: "Mathematics",
        description: "From algebra to calculus, master mathematical concepts",
        slug: "mathematics",
      },
      {
        image:
          "https://tse2.mm.bing.net/th/id/OIP.J-t3T4qg8LkmmdKoZzbVhgHaDt?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "English",
        description: "Reading, writing, grammar, and comprehension",
        slug: "english",
      },
      {
        image:
          "https://th.bing.com/th/id/OIP.uQt9fj7vV9Eib4pOh2FJ8wHaGI?r=0&o=7&cb=thvnextc1rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Science",
        description: "Physics, Chemistry, and Biology made simple",
        slug: "sciences",
      },
      {
        image:
          "https://res.cloudinary.com/dbzbqq0vw/image/upload/v1751520012/Problem_solving-cuate_1_khxfbe.svg",
        title: "Thinking Skills",
        description: "Critical thinking and problem-solving",
        slug: "thinking-skills",
      },
    ],
  },
  {
    id: "regional-languages",
    name: "Regional Languages",
    slug: "regional-languages",
    subjects: [
      {
        image:
          "https://tse1.mm.bing.net/th/id/OIP.mQ7eLQL2LRQsjTWJTt8kUwHaDt?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Hindi",
        description: "Learn to read, write and speak fluently",
        slug: "hindi",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Telugu.svg/1920px-Telugu.svg.png",
        title: "Telugu",
        description: "Master Telugu with native speakers",
        slug: "telugu",
      },
      {
        image:
          "https://th.bing.com/th/id/OIP.bC6NIW5U-Rvfc7T72JidrgHaEc?r=0&o=7&cb=thvnextc1rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Tamil",
        description: "Comprehensive Tamil language courses",
        slug: "tamil",
      },
      {
        image:
          "https://tse1.mm.bing.net/th/id/OIP.j9HlgGC-988tNTQ0dEXO5wHaE7?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Other Languages",
        description: "Additional regional language options",
        slug: "tamil",
      },
    ],
  },
  {
    id: "coding-tech",
    name: "Coding & Tech Skills",
    slug: "coding-and-tech-skills",
    subjects: [
      {
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Scratch Programming",
        description: "Visual programming for beginners",
        slug: "python-digital-literacy",
      },
      {
        image:
          "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Beginner Python",
        description: "Learn Python programming fundamentals",
        slug: "python-digital-literacy",
      },
      {
        image:
          "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Digital Literacy",
        description: "Essential computer and internet skills",
        slug: "python-digital-literacy",
      },
    ],
  },
  {
    id: "skill-building",
    name: "Skill-Building Programs",
    slug: "skill-building-programs",
    subjects: [
      {
        image:
          "https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?q=80&w=1379&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Vedic Maths",
        description: "Fast mental calculation techniques",
        slug: "vedic-maths",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2022/02/18/04/34/abacus-7019994_1280.jpg",
        title: "Abacus",
        description: "Ancient counting tool for mental math",
        slug: "abacus",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Chess",
        description: "Strategy and critical thinking development",
        slug: "chess",
      },
    ],
  },
  {
    id: "well-being",
    name: "Well-being for Kids",
    slug: "well-being-for-kids",
    subjects: [
      {
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Yoga",
        description: "Physical and mental wellness through yoga",
        slug: "yoga-mindfulness",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mindfulness",
        description: "Techniques for emotional balance",
        slug: "yoga-mindfulness",
      },
    ],
  },
  {
    id: "exam-prep",
    name: "Exam Preparation",
    slug: "exam-preparation",
    subjects: [
      {
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "NAPLAN",
        description: "National Assessment Program preparation",
        slug: "exam-preps",
      },
      {
        image:
          "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "OC Test",
        description: "Opportunity Class placement test prep",
        slug: "exam-preps",
      },
      {
        image:
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Selective School Exams",
        description: "Comprehensive preparation for selective schools",
        slug: "exam-preps",
      },
    ],
  },
];

const SubjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState(subjectCategories[0].id);

  const selectedCategory: ICategory | undefined = subjectCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section className="py-20 relative h-fit lg:h-[120vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src="https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Subject background"
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw"
        />
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-primary/40 dark:to-primary-foreground/40 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6 text-white">
            Explore Our Offerings
          </h2>
          <p className="text-xl text-gray-200">
            From foundational academics to advanced skills, our virtual platform
            supports a wide range of learning needs for students from
            Kindergarten to Grade 12.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[728px]">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4 lg:self-center">
            <div className="flex flex-col space-y-2">
              {subjectCategories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
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
                <div className="mb-6 flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCategory.name}
                  </h3>
                  <div className="h-1 w-40 bg-navy-500 mt-1"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                  {selectedCategory.subjects.map((subject, index) => (
                    <Link href={`/subjects/${subject.slug}`} key={index}>
                      <Card className="border border-gray-300 hover:border-navy-500 transition-shadow cursor-pointer group h-64 sm:h-72 md:h-80 overflow-hidden p-0 hover:scale-105 transition duration-900">
                        <CardContent className="flex flex-col h-full p-0">
                          <div className="w-400 h-1/2 relative">
                            <Image
                              src={subject.image}
                              alt={subject.title}
                              className="object-cover w-full h-full group-hover:scale-110 transition duration-1000 border border-b-navy-800 "
                              width={400}
                              height={400}
                            />
                          </div>

                          {/* Content takes other 50% */}
                          <div className="px-4 py-1 flex flex-col justify-center h-1/2 w-full text-center">
                            <div>
                              <h3 className="text-xl font-semibold text-navy-700">
                                {subject.title}
                              </h3>
                              <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                {subject.description}
                              </p>
                            </div>

                            {/* Learn More button at the bottom */}
                            <div className="text-navy-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out mt-2">
                              <span>Learn more</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
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
