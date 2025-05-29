
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-navy-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">About NextGen AI Tutors</h1>
                <p className="text-lg text-gray-600 mb-8">
                  We're revolutionizing education by combining expert teaching with cutting-edge AI technology to provide personalized learning experiences for students of all ages and backgrounds.
                </p>
                <Link to="/contact-us">
                  <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Team working together" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2022 by a team of educators, technology experts, and learning scientists, NextGen AI Tutors was born from a simple observation: traditional education often fails to meet the individual needs of each student.
            </p>
            <p className="text-lg text-gray-600">
              We set out to create a learning platform that could adapt to each student's unique learning style, pace, and interests while providing the human touch and expertise that only comes from experienced educators. By combining advanced AI technology with proven teaching methods, we've created a revolutionary approach to education that's helping thousands of students reach their full potential.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To make high-quality, personalized education accessible to every student, regardless of their background, location, or learning challenges.
              </p>
              <p className="text-gray-600">
                We believe that with the right guidance and support, every student can master complex subjects and develop a lifelong love of learning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-2">•</span>
                  <span><strong className="text-navy-700">Personalization:</strong> We adapt to each student's unique needs and learning style.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-2">•</span>
                  <span><strong className="text-navy-700">Excellence:</strong> We maintain the highest standards in education and technology.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-2">•</span>
                  <span><strong className="text-navy-700">Accessibility:</strong> We make quality education available to students everywhere.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-600 font-bold mr-2">•</span>
                  <span><strong className="text-navy-700">Innovation:</strong> We continuously improve our methods and technology.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-navy-50 p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Join the NextGen Learning Revolution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the future of education with personalized AI tutoring that adapts to your unique learning style and needs.
            </p>
            <Link to="/subjects">
              <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg">
                Explore Our Subjects
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
