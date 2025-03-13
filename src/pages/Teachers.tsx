
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";

const Teachers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-navy-50 to-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">Our Expert Tutors</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Meet our team of certified tutors and AI specialists who are passionate about education and dedicated to helping students excel.
            </p>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-1">{teacher.name}</h3>
                  <p className="text-navy-600 font-medium mb-3">{teacher.specialty}</p>
                  <p className="text-gray-600 mb-4">{teacher.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teacher.subjects.map((subject, index) => (
                      <span 
                        key={index} 
                        className="bg-navy-50 text-navy-700 text-sm px-3 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                      >
                        Book a Session
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-navy-800">
                          Book a session with {teacher.name}
                        </DialogTitle>
                        <DialogDescription>
                          Fill out the form below to schedule your session with {teacher.name}.
                        </DialogDescription>
                      </DialogHeader>
                      <BookingForm />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="bg-navy-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Join Our Teaching Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Are you passionate about education and technology? We're always looking for talented educators to join our team of AI tutors.
            </p>
            <Button 
              className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg"
            >
              Apply to Teach
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Mathematics Expert",
    bio: "Dr. Johnson has over 15 years of experience teaching mathematics at all levels. She specializes in making complex concepts accessible and engaging for students.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    subjects: ["Algebra", "Calculus", "Statistics"]
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    specialty: "Physics Specialist",
    bio: "Professor Chen combines his research background with innovative teaching methods to help students master physics concepts through practical applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    subjects: ["Mechanics", "Electromagnetism", "Modern Physics"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Computer Science Educator",
    bio: "With experience at top tech companies and a passion for teaching, Dr. Rodriguez helps students develop strong programming skills and computational thinking.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    subjects: ["Programming", "Data Structures", "Web Development"]
  },
  {
    id: 4,
    name: "Prof. David Okafor",
    specialty: "English & Literature",
    bio: "Professor Okafor's approach combines literary analysis with practical writing skills, helping students become effective communicators and critical thinkers.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop",
    subjects: ["Writing", "Literature", "Grammar"]
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    specialty: "Chemistry Expert",
    bio: "Dr. Patel makes chemistry accessible through virtual lab experiences and clear explanations that connect abstract concepts to the real world.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop",
    subjects: ["Organic Chemistry", "Biochemistry", "General Chemistry"]
  },
  {
    id: 6,
    name: "Prof. James Wilson",
    specialty: "History & Social Studies",
    bio: "Professor Wilson brings history to life through compelling narratives and primary source analysis, helping students connect the past to contemporary issues.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    subjects: ["World History", "US History", "Government"]
  }
];

export default Teachers;
