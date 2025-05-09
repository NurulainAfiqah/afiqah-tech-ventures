
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const technicalSkills = [
  { name: "Java", level: 90 },
  { name: "C#", level: 85 },
  { name: "React", level: 75 },
  { name: "Unity", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 65 },
];

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Project Management",
  "Communication",
  "Leadership",
  "Time Management"
];

const certifications = [
  { name: "ICDL Teamwork", issuer: "ICDL Asia" },
  { name: "ICDL Productivity", issuer: "ICDL Asia" },
];

const languages = [
  { name: "Malay", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Japanese", level: "Beginner" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-neutral-600 dark:text-white">Skills & Certifications</h2>
          <div className="w-20 h-1 bg-portfolio-green-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-neutral-600 dark:text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-portfolio-neutral-600 dark:text-gray-300">{skill.name}</span>
                    <span className="text-portfolio-neutral-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" 
                    indicatorClassName="bg-gradient-to-r from-portfolio-green-400 to-portfolio-purple-400" />
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 mt-12 text-portfolio-neutral-600 dark:text-white">Languages</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-portfolio-neutral-600 dark:text-gray-300">{language.name}</span>
                  <Badge 
                    className="bg-portfolio-neutral-100 text-portfolio-neutral-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {language.level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-neutral-600 dark:text-white">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="bg-portfolio-purple-50 text-portfolio-purple-600 dark:bg-gray-800 dark:text-portfolio-purple-300 py-2 px-4 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 mt-12 text-portfolio-neutral-600 dark:text-white">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 border border-portfolio-neutral-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-semibold text-portfolio-green-500 dark:text-portfolio-green-400">{cert.name}</h4>
                  <p className="text-portfolio-neutral-500 dark:text-gray-400">{cert.issuer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 mt-12 text-portfolio-neutral-600 dark:text-white">Design Patterns</h3>
            <div className="flex flex-wrap gap-3">
              {["Singleton", "Factory", "Observer", "Strategy", "MVC"].map((pattern, index) => (
                <Badge 
                  key={index} 
                  className="bg-portfolio-green-50 text-portfolio-green-600 dark:bg-gray-800 dark:text-portfolio-green-300 py-2 px-4 text-sm"
                >
                  {pattern}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
