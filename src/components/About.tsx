
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
              I'm Nurulain Afiqah, a passionate Software Engineering student with a focus on creating 
              technology solutions that promote sustainability and community values.
            </p>
            <p className="text-lg text-portfolio-neutral-500 dark:text-gray-300 mb-6">
              Currently pursuing my Bachelor of Computer Science (Hons.) at Multimedia University in Cyberjaya, 
              I combine my technical skills with a deep interest in game development, environmental conservation, 
              and community engagement.
            </p>
            <p className="text-lg text-portfolio-neutral-500 dark:text-gray-300">
              When I'm not coding, you might find me volunteering at community events, playing table tennis, 
              or exploring new programming patterns to build better software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-portfolio-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Cpu className="w-10 h-10 text-portfolio-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Tech Enthusiast</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Passionate about software development with experience in game design and various design patterns.
              </p>
            </div>

            <div className="bg-portfolio-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <BookOpen className="w-10 h-10 text-portfolio-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Continuous Learner</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Always expanding my knowledge in software engineering and languages like Malay, English, and Japanese.
              </p>
            </div>

            <div className="bg-portfolio-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Users className="w-10 h-10 text-portfolio-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Community Advocate</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Actively involved in volunteer work and promoting sustainability through technology.
              </p>
            </div>

            <div className="bg-portfolio-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Heart className="w-10 h-10 text-portfolio-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-portfolio-neutral-600 dark:text-white">Passionate Creator</h3>
              <p className="text-portfolio-neutral-500 dark:text-gray-300">
                Building passion projects that combine technology with environmental and community values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
