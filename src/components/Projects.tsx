
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Trash and Treasure Platform",
    description: "A sustainable platform that encourages recycling and upcycling within communities.",
    tags: ["React", "Node.js", "MongoDB", "Sustainability"],
    image: "/placeholder.svg",
  },
  {
    title: "Kwazam Chess Game",
    description: "A modern chess game with unique features and design patterns implementation.",
    tags: ["Unity", "C#", "Game Development", "Design Patterns"],
    image: "/placeholder.svg",
  },
  {
    title: "Robot War Game Simulator",
    description: "A simulation platform for robot battles implementing various AI strategies.",
    tags: ["Java", "AI", "Simulation", "Game Design"],
    image: "/placeholder.svg",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-neutral-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-neutral-600 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-portfolio-purple-400 mx-auto mt-4"></div>
          <p className="text-portfolio-neutral-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my passion projects that combine technical skills with values of sustainability and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-portfolio-neutral-200 dark:border-gray-700 h-full flex flex-col">
              <div className="h-48 bg-portfolio-neutral-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-portfolio-purple-500 dark:text-portfolio-purple-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-portfolio-neutral-500 dark:text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-portfolio-purple-50 text-portfolio-purple-600 dark:bg-gray-700 dark:text-portfolio-purple-300 border-portfolio-purple-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" /> Code
                </Button>
                <Button size="sm" className="bg-portfolio-purple-400 hover:bg-portfolio-purple-500">
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-portfolio-purple-300 text-portfolio-purple-500">
            View All Projects <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
