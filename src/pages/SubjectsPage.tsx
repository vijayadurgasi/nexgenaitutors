
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SubjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-navy-50 to-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">Our Subjects</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Discover our wide range of subjects taught by expert AI tutors tailored to help students excel in their academic journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {subjects.map((subject) => (
                <Link key={subject.id} to={`/subjects/${subject.slug}`}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={subject.image} 
                        alt={subject.title} 
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold text-navy-800 mb-2">{subject.title}</h3>
                      <p className="text-gray-600 mb-4">{subject.description}</p>
                      <Button 
                        className="w-full bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const subjects = [
  {
    id: 1,
    title: "Mathematics",
    slug: "mathematics",
    description: "Master key mathematical concepts with personalized AI tutoring.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Physics",
    slug: "physics",
    description: "Understand complex physics principles through interactive lessons.",
    image: "https://images.unsplash.com/photo-1636466497217-06fe5ce66d5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Chemistry",
    slug: "chemistry",
    description: "Explore the molecular world with engaging chemistry tutorials.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Biology",
    slug: "biology",
    description: "Dive into the science of life with comprehensive biology lessons.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "English",
    slug: "english",
    description: "Enhance your language skills with expert English tutoring.",
    image: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Computer Science",
    slug: "computer-science",
    description: "Learn programming and computing concepts with hands-on guidance.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "History",
    slug: "history",
    description: "Explore the past with engaging and informative history lessons.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Foreign Languages",
    slug: "foreign-languages",
    description: "Master new languages with interactive and immersive tutorials.",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800&auto=format&fit=crop",
  }
];

export default SubjectsPage;
