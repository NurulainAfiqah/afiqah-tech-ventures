
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-neutral-600 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-purple-400 mx-auto mt-4"></div>
          <p className="text-portfolio-neutral-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-neutral-600 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-purple-100 dark:bg-gray-800 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-portfolio-purple-500 dark:text-portfolio-purple-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-neutral-600 dark:text-white">Email</h4>
                  <p className="text-portfolio-neutral-500 dark:text-gray-300">nurulain.afiqah@email.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-green-100 dark:bg-gray-800 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-portfolio-green-500 dark:text-portfolio-green-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-neutral-600 dark:text-white">Location</h4>
                  <p className="text-portfolio-neutral-500 dark:text-gray-300">Cyberjaya, Malaysia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-neutral-100 dark:bg-gray-800 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-portfolio-neutral-500 dark:text-portfolio-neutral-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-portfolio-neutral-600 dark:text-white">Phone</h4>
                  <p className="text-portfolio-neutral-500 dark:text-gray-300">+60 12 345 6789</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-neutral-600 dark:text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-portfolio-neutral-100 dark:bg-gray-800 p-4 rounded-full transition-colors hover:bg-portfolio-purple-100 dark:hover:bg-gray-700">
                  <svg className="h-6 w-6 text-portfolio-neutral-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="bg-portfolio-neutral-100 dark:bg-gray-800 p-4 rounded-full transition-colors hover:bg-portfolio-purple-100 dark:hover:bg-gray-700">
                  <svg className="h-6 w-6 text-portfolio-neutral-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="bg-portfolio-neutral-100 dark:bg-gray-800 p-4 rounded-full transition-colors hover:bg-portfolio-purple-100 dark:hover:bg-gray-700">
                  <svg className="h-6 w-6 text-portfolio-neutral-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-neutral-600 dark:text-white">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-neutral-600 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="border-portfolio-neutral-300 focus:border-portfolio-purple-400 dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-neutral-600 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-portfolio-neutral-300 focus:border-portfolio-purple-400 dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-neutral-600 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry" 
                  className="border-portfolio-neutral-300 focus:border-portfolio-purple-400 dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-neutral-600 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="border-portfolio-neutral-300 focus:border-portfolio-purple-400 dark:border-gray-700 min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-portfolio-purple-400 hover:bg-portfolio-purple-500">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
