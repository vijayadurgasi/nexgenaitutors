
import TiltCard from "@/components/TiltedCard";
import { BookOpen, Clock, GraduationCap, House, Route, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl xl:max-w-4xl mx-auto my-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-extrabold mb-6">
            Why NextGenAI? The Future of Learning is Here.
          </h2>
          <div className="max-w-2xl mx-auto mb-6">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Traditional tutoring can&apos;t keep pace with every child&apos;s unique needs. That&apos;s why we combine the best of human expertise with advanced AI to deliver:
          </p>
          </div>
        </div>
        <div className="mt-10 max-w-6xl mx-auto px-1 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <TiltCard
              icon={<Route className="w-36 h-36 text-navy-900/70" />}
              title="Personalized Learning Plans"
              description="Tailored to your child's unique style and pace."
              image="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TiltCard
              icon={<Clock className="w-36 h-36 text-navy-900/70" />}
              title="Real-Time Progress Tracking"
              description="See exactly how your child is performing and improving."
              image="https://images.unsplash.com/photo-1730382624360-9cf5609c8364?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TiltCard
              icon={<BookOpen className="w-36 h-36 text-navy-900/70" />}
              title="Smart Practice & Adaptive Assignments"
              description="Focused exercises that target specific learning gaps."
              image="https://images.unsplash.com/photo-1637195141546-2469a5312504?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TiltCard
              icon={<Users className="w-36 h-36 text-navy-900/70" />}
              title="Increased Engagement"
              description="Interactive content keeps learning exciting."
              image="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dc"
            />
            <TiltCard
              icon={<House className="w-36 h-36 text-navy-900/70" />}
              title="Flexible & Convenient"
              description="Quality education from the comfort of your home"
              image="https://plus.unsplash.com/premium_photo-1706430114467-e6529dc85b95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TiltCard
              icon={<GraduationCap className="w-36 h-36 text-navy-900/70" />}
              title="Expert Tutors"
              description="Highly qualified educators from Australia, India and around the world."
              image="https://images.unsplash.com/photo-1620894169431-a2231552593d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="text-center mt-16 max-w-3xl xl:max-w-4xl mx-auto"
        >
          <h2 className="text-xl md:text-3xl font-extrabold mb-6">
            NextGenAI Tutors isn&apos;t just a service; it&apos;s a modern edge for your child&apos;s education
          </h2>
        </div>
      </div>
    </section>
  );
};

// const FeatureCard = ({
//   icon,
//   title,
//   description,
//   image,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   image: string;
// }) => {
//   return (
//     <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 border-t-navy-600">
//       <div className="h-40 overflow-hidden">
//         <Image
//           width={600}
//           height={400} 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//       </div>
//       <CardContent className="p-6">
//         <div className="mb-4 flex justify-center">{icon}</div>
//         <h3 className="text-xl font-semibold mb-3">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-400">{description}</p>
//       </CardContent>
//     </Card>
//   );
// };

export default FeaturesSection;
