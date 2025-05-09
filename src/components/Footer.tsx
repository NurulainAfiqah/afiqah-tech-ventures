
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-neutral-800 dark:bg-gray-900 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              Nurulain<span className="text-portfolio-green-400">.dev</span>
            </h3>
            <p className="text-portfolio-neutral-300 mt-2">
              Software Engineer | Sustainability Advocate
            </p>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6">
            <a href="#about" className="text-portfolio-neutral-300 hover:text-white transition-colors py-1">About</a>
            <a href="#projects" className="text-portfolio-neutral-300 hover:text-white transition-colors py-1">Projects</a>
            <a href="#skills" className="text-portfolio-neutral-300 hover:text-white transition-colors py-1">Skills</a>
            <a href="#community" className="text-portfolio-neutral-300 hover:text-white transition-colors py-1">Community</a>
            <a href="#contact" className="text-portfolio-neutral-300 hover:text-white transition-colors py-1">Contact</a>
          </nav>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-neutral-400">
            &copy; {currentYear} Nurulain Afiqah. All rights reserved.
          </p>
          <p className="flex items-center text-portfolio-neutral-400 mt-4 md:mt-0">
            Made with 
            <Heart className="h-4 w-4 mx-1 text-portfolio-purple-400" fill="currentColor" /> 
            in Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
