
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookOpen,
  BookText,
  Globe,
  Headphones,
  Lightbulb,
  MessageSquare,
  PenTool,
  Type
} from "lucide-react";

const LanguagesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-navy-50 to-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">Language Learning</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Discover our comprehensive language programs designed to build strong communication skills through personalized AI tutoring.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {languageSubjects.map((subject) => (
                <Card key={subject.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-navy-50 flex items-center justify-center">
                    <subject.icon className="w-20 h-20 text-navy-600" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold text-navy-800 mb-2">{subject.title}</h3>
                    <p className="text-gray-600 mb-4">{subject.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                        >
                          Book a Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-navy-800">
                            Get a free demo session with NextGenAI Tutors
                          </DialogTitle>
                          <DialogDescription>
                            Fill out the form below to schedule your free demo session for {subject.title}.
                          </DialogDescription>
                        </DialogHeader>
                        <BookingForm subjectTitle={subject.title} />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* English for School Kids */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">English for School Children</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our specialized English program for children builds strong foundations in reading, writing, and comprehension through engaging, age-appropriate activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-navy-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">Elementary School (Ages 5-10)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-navy-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-700">Phonics & Reading Foundations</h4>
                      <p className="text-gray-600">Building letter-sound connections and early reading skills through interactive games and guided practice.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PenTool className="h-5 w-5 text-navy-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-700">Basic Writing Skills</h4>
                      <p className="text-gray-600">Learning sentence structure, vocabulary development, and creative expression through fun writing activities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Headphones className="h-5 w-5 text-navy-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-700">Listening Comprehension</h4>
                      <p className="text-gray-600">Developing active listening skills through stories, dialogues, and audio-based activities.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-navy-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">Middle School (Ages 11-14)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BookText className="h-5 w-5 text-navy-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-700">Reading Comprehension</h4>
                      <p className="text-gray-600">Analyzing various text types, understanding main ideas, and making inferences.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Type className="h-5 w-5 text-navy-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-700">Essay Writing</h4>
                      <p className="text-gray-600">Developing structured writing skills, with focus on paragraphing, thesis statements, and supporting evidence.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-navy-600 mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-700">Critical Thinking</h4>
                      <p className="text-gray-600">Engaging with texts critically, evaluating arguments, and forming reasoned opinions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg"
                  >
                    Book a Free English Assessment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-navy-800">
                      Free English Assessment Session
                    </DialogTitle>
                    <DialogDescription>
                      Fill out the form below to schedule a free English assessment session for your child.
                    </DialogDescription>
                  </DialogHeader>
                  <BookingForm subjectTitle="English Assessment" />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Language Learning Approach */}
        <section className="py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Language Learning Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We develop language skills through our proven methodology that adapts to each student&apos;s needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-navy-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-2">Reading</h3>
                <p className="text-gray-600">
                  Develop strong comprehension skills through guided reading of diverse texts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-navy-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-2">Writing</h3>
                <p className="text-gray-600">
                  Build writing skills through structured exercises with personalized feedback.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-navy-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-2">Speaking</h3>
                <p className="text-gray-600">
                  Practice conversation skills with interactive AI dialogue partners.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-navy-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-2">Listening</h3>
                <p className="text-gray-600">
                  Enhance listening comprehension through varied audio materials and exercises.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const languageSubjects = [
  {
    id: 1,
    title: "English for Kids",
    description: "Age-appropriate English learning for children ages 5-14, focusing on foundational reading, writing and communication skills.",
    icon: BookOpen
  },
  {
    id: 2,
    title: "English Literature",
    description: "Explore classic and contemporary literature with guided analysis of themes, characters, and literary devices.",
    icon: BookText
  },
  {
    id: 3,
    title: "Spanish",
    description: "Learn conversational Spanish, grammar, and cultural aspects through interactive exercises and real-world scenarios.",
    icon: Globe
  },
  {
    id: 4,
    title: "French",
    description: "Master French language skills with our comprehensive program covering speaking, listening, reading, and writing.",
    icon: MessageSquare
  },
  {
    id: 5,
    title: "Creative Writing",
    description: "Develop your creative writing abilities through guided exercises in fiction, poetry, and narrative techniques.",
    icon: PenTool
  },
  {
    id: 6,
    title: "Public Speaking",
    description: "Build confidence and communication skills for presentations, debates, and everyday conversations.",
    icon: Headphones
  }
];

export default LanguagesPage;
