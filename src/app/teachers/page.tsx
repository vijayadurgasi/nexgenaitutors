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
import { Award, BookOpen, Clock, GraduationCap, Pencil, Users } from "lucide-react";

const Teachers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-navy-50 to-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">Become a NextGen AI Tutor</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Join our team of passionate educators who are transforming how students learn with the power of AI-enhanced tutoring
            </p>
          </div>
        </div>

        {/* Why Teach With Us Section */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">Why Teach With NextGen AI Tutors?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-navy-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">Flexible Hours</h3>
                <p className="text-gray-600">
                  Create your own schedule and teach when it works for you. Our platform operates 24/7, allowing you to choose hours that fit your lifestyle.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-navy-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  Connect with students from around the world. Expand your teaching experience and impact learners across different cultures and backgrounds.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-navy-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Award className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">Competitive Compensation</h3>
                <p className="text-gray-600">
                  Earn competitive rates based on your expertise, experience, and student feedback. Top tutors enjoy premium rates and bonuses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-navy-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">AI-Enhanced Teaching</h3>
                <p className="text-gray-600">
                  Our AI tools assist your teaching, handling administrative tasks and providing insights about student progress so you can focus on what matters most.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-navy-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">Ready-Made Resources</h3>
                <p className="text-gray-600">
                  Access our extensive library of teaching materials, practice problems, and interactive exercises to enhance your tutoring sessions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-navy-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Pencil className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">Professional Development</h3>
                <p className="text-gray-600">
                  Continuous training and professional development opportunities to help you grow as an educator and stay current with educational trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-navy-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">What We Look For</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Qualifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Degree in your teaching subject or related field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Teaching certification (preferred but not required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Minimum 2 years of teaching/tutoring experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Strong communication skills and tech proficiency</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Personality Traits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Patient and adaptable to different learning styles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Passionate about education and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Committed to student success and growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 font-bold mr-2">•</span>
                    <span>Open to innovative teaching methods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Ready to Transform Education?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join our community of educators who are passionate about using AI to create personalized learning experiences and help students achieve their full potential.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg"
                >
                  Apply to Teach
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-navy-800">
                    Apply to Join Our Teaching Team
                  </DialogTitle>
                  <DialogDescription>
                    Fill out the form below to start your application process.
                  </DialogDescription>
                </DialogHeader>
                <BookingForm isTeacherForm={true} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teachers;
