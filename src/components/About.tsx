
import { Cpu, BookOpen, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-neutral-600 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-green-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-portfolio-neutral-500 dark:text-gray-300 mb-6">
              I'm a passionate Computer Science undergraduate with a strong interest in software development, particularly in coding, system testing, and troubleshooting. I’m currently seeking a 12-week internship opportunity from 28th July to 26th October 2025 to apply my technical skills in a real-world environment.
            </p>
            <p className="text-lg text-portfolio-neutral-500 dark:text-gray-300 mb-6">
              I have hands-on experience developing web applications using frameworks like Django, and I'm proficient in working with databases such as SQL and SQLite3. Additionally, I'm familiar with data analytics tools and enjoy turning complex problems into simple, efficient solutions.
            </p>
            <p className="text-lg text-portfolio-neutral-500 dark:text-gray-300">
              Adaptable and team-oriented, I’m eager to contribute to a dynamic tech team, continuously learn, and grow as a developer while helping deliver impactful software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-portfolio-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Cpu className="w-10 h-10 text-portfolio-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Software Developer</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Skilled in full-stack development using Django, SQLite, and C++, with hands-on experience in building functional web apps and simulators.
              </p>
            </div>

            <div className="bg-portfolio-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <BookOpen className="w-10 h-10 text-portfolio-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Active Learner</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Continuously improving skills in software design, system testing, and learning new technologies. Fluent in English and Malay, with basic Japanese.
              </p>
            </div>

            <div className="bg-portfolio-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Users className="w-10 h-10 text-portfolio-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Team Collaborator</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Experienced in working with cross-functional teams during academic and community projects, emphasizing communication and leadership.
              </p>
            </div>

            <div className="bg-portfolio-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Heart className="w-10 h-10 text-portfolio-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Purpose-Driven</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Passionate about building solutions that address sustainability and community needs, such as the Trash and Treasure platform.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
