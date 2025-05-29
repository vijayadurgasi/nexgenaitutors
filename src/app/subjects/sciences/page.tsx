
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
import { Atom, Beaker, Brain, Dna, Globe, Leaf, Microscope, Rocket } from "lucide-react";

const SciencesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-navy-50 to-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">Science Subjects</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Explore our comprehensive range of science courses designed to spark curiosity and build strong scientific foundations through interactive AI-powered learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {scienceSubjects.map((subject) => (
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

        {/* Science Learning Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-4">Our Science Learning Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We make science engaging, interactive and easy to understand through our specialized AI teaching methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-700 mb-2">Interactive Experiments</h3>
                <p className="text-gray-600">
                  Participate in virtual experiments that demonstrate scientific principles in action, making abstract concepts concrete.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-700 mb-2">Conceptual Understanding</h3>
                <p className="text-gray-600">
                  Focus on building deep conceptual understanding rather than mere memorization of facts and formulas.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-700 mb-2">Real-World Applications</h3>
                <p className="text-gray-600">
                  Connect scientific theories to everyday phenomena and current scientific advancements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Ready to Excel in Science?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join our AI-powered science learning platform and develop a strong foundation in scientific principles and critical thinking.
            </p>
            <Button 
              className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg"
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

const scienceSubjects = [
  {
    id: 1,
    title: "Physics",
    description: "Master mechanics, electricity, waves, and modern physics through interactive simulations and problem-solving exercises.",
    icon: Rocket
  },
  {
    id: 2,
    title: "Chemistry",
    description: "Explore the molecular world through engaging visualizations of chemical structures, reactions, and laboratory techniques.",
    icon: Beaker
  },
  {
    id: 3,
    title: "Biology",
    description: "Discover the science of life from cellular processes to ecosystems with detailed visualizations and case studies.",
    icon: Dna
  },
  {
    id: 4,
    title: "Earth Science",
    description: "Learn about our planet's geology, atmosphere, oceans, and environment through dynamic models and current research.",
    icon: Globe
  },
  {
    id: 5,
    title: "Astronomy",
    description: "Explore the cosmos, from planets to galaxies, using cutting-edge visualizations and the latest astronomical discoveries.",
    icon: Atom
  },
  {
    id: 6,
    title: "Environmental Science",
    description: "Understand environmental systems, challenges, and sustainability solutions through data analysis and case studies.",
    icon: Leaf
  }
];

export default SciencesPage;
