import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "C++", proficiency: 85 },
    { name: "Python", proficiency: 90 },
    { name: "Java", proficiency: 90 },
    { name: "Node.js", proficiency: 80 },
    { name: "SQL", proficiency: 95 },
    { name: "Django", proficiency: 85 },
    { name: "Laravel", proficiency: 70 },
  ];

  const softSkills = [
    "Team Leadership",
    "Problem Solving",
    "Communication",
  ];

  const scholarAwards = [
   "Yayasan Telekom Malaysia Scholar",
  ];

  const certifications = [
    "ICDL - Document",
    "ICDL - Spreadsheet",
    "ICDL - Teamwork",
    "ICDL - Presentation",
    "ICDL - Digital Marketing",
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-portfolio-green-500">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-purple-500">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <Progress 
                    value={skill.proficiency}
                    className="h-2 bg-gray-200" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills, Awards, Certifications */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-portfolio-purple-500">Soft Skills</h3>
              <ul className="space-y-3">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-portfolio-green-500" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-portfolio-purple-500">Scholar Awards</h3>
              <ul className="space-y-3">
                {scholarAwards.map((award) => (
                  <li key={award} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-portfolio-green-500" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-portfolio-purple-500">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-portfolio-green-500" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
