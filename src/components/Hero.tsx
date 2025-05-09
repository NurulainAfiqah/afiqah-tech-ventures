
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-portfolio-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-6 animate-fadeIn">
            <span className="inline-block text-portfolio-green-500 font-medium">👋 Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-neutral-600 dark:text-white">
              Nurulain Afiqah
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-neutral-500 dark:text-gray-300">
              Software Engineer passionate about creating
              <span className="text-portfolio-purple-400"> sustainable</span> and 
              <span className="text-portfolio-green-400"> impactful</span> solutions.
            </p>
            <div className="space-y-4">
              <p className="text-portfolio-neutral-500 dark:text-gray-400">
                Bachelor of Computer Science student specializing in Software Engineering at Multimedia University, Malaysia.
              </p>
              <div className="flex space-x-4">
                <Button variant="default" className="bg-portfolio-purple-400 hover:bg-portfolio-purple-500">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline" className="border-portfolio-neutral-300">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline" className="border-portfolio-neutral-300">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 animate-bounce hidden md:block">
            <a href="#about" className="flex items-center justify-center w-10 h-10 mx-auto text-portfolio-neutral-500 dark:text-gray-400">
              <ArrowDown />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-purple-100 dark:bg-portfolio-purple-900/20 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* This is a placeholder for profile image. Replace with actual image when available */}
              <div className="w-full h-full flex items-center justify-center text-6xl bg-portfolio-purple-200 dark:bg-portfolio-purple-800/40">
                NA
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-wave">
              👩‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
