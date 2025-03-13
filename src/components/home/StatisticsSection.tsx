
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, Clock } from "lucide-react";

const StatisticsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We're proud of the difference we're making in students' lives
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Users className="w-10 h-10 text-navy-600" />}
            value="50,000+"
            label="Active Students"
          />
          <StatCard
            icon={<BookOpen className="w-10 h-10 text-navy-600" />}
            value="100+"
            label="Subjects Covered"
          />
          <StatCard
            icon={<Award className="w-10 h-10 text-navy-600" />}
            value="95%"
            label="Success Rate"
          />
          <StatCard
            icon={<Clock className="w-10 h-10 text-navy-600" />}
            value="1M+"
            label="Learning Hours"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-all border-t-4 border-t-navy-600">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-3xl md:text-4xl font-bold mb-2">{value}</h3>
        <p className="text-gray-600 dark:text-gray-400">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatisticsSection;
