
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Users } from "lucide-react";

const activities = [
  {
    type: "volunteer",
    title: "Iman Rabbit Farm",
    description: "Volunteered in animal care and sustainable farming practices.",
    icon: Heart
  },
  {
    type: "environment",
    title: "Bamboo Tree Planting",
    description: "Participated in environmental conservation efforts through tree planting.",
    icon: Leaf
  },
  {
    type: "community",
    title: "3MT Competition",
    description: "Volunteer in organizing the Three Minute Thesis competition.",
    icon: Users
  },
  {
    type: "cultural",
    title: "Salam Festival",
    description: "Participated in cultural events celebrating diversity and community values.",
    icon: Users
  },
  {
    type: "spiritual",
    title: "MMU Berselawat",
    description: "Engaged in spiritual and community building events.",
    icon: Heart
  },
  {
    type: "sports",
    title: "Table Tennis & Sportmania",
    description: "Active participant in sports activities promoting teamwork and wellness.",
    icon: Users
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20 bg-portfolio-neutral-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-neutral-600 dark:text-white">Community Involvement</h2>
          <div className="w-20 h-1 bg-portfolio-green-400 mx-auto mt-4"></div>
          <p className="text-portfolio-neutral-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Beyond coding, I'm passionate about contributing to my community and environment through various activities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className={`border-l-4 ${
                activity.type === "volunteer" || activity.type === "spiritual"
                  ? "border-l-portfolio-purple-400" 
                  : activity.type === "environment"
                  ? "border-l-portfolio-green-400"
                  : "border-l-portfolio-neutral-400"
              } transition-transform duration-300 hover:scale-105`}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className={`p-2 rounded-full ${
                  activity.type === "volunteer" || activity.type === "spiritual"
                    ? "bg-portfolio-purple-100 text-portfolio-purple-500" 
                    : activity.type === "environment"
                    ? "bg-portfolio-green-100 text-portfolio-green-500"
                    : "bg-portfolio-neutral-100 text-portfolio-neutral-500"
                }`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl text-portfolio-neutral-600 dark:text-white">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-portfolio-neutral-500 dark:text-gray-400 capitalize">
                    {activity.type}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-portfolio-neutral-600 dark:text-gray-300">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-700 p-6 md:p-10 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-portfolio-neutral-600 dark:text-white mb-4">My Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium text-portfolio-green-500 dark:text-portfolio-green-400 mb-2">Sustainability</h4>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Committed to creating tech solutions that promote environmental consciousness and sustainable practices.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-portfolio-purple-500 dark:text-portfolio-purple-400 mb-2">Community Impact</h4>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Passionate about using technology to bring people together and address community challenges.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-portfolio-neutral-600 dark:text-gray-200 mb-2">Continuous Growth</h4>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Dedicated to lifelong learning and personal development through diverse experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
