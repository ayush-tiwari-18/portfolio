import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-8">
          <div>
            <p className="text-green-400 text-lg mb-4">Software Developer</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hello I'm<br />
              <span className="text-green-400">Ayush Tiwari</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/resume.pdf" download="Ayush_Tiwari_CV.pdf">
            <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            </a>
            
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="border-gray-600 hover:border-green-400" onClick={() => window.open("https://github.com/ayush-tiwari-18")}>
                <Github className="w-4 h-4 text-black hover:text-green-400" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:border-green-400" onClick={()=> window.open("https://www.linkedin.com/in/ayush-tiwari-594a5b293")}>
                <Linkedin className="w-4 h-4 text-black hover:text-green-400" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 border-2 border-dashed border-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-gray-800 rounded-full overflow-hidden">
              <img
                src="/image.png"
                alt="Ayush Tiwari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-400">2</div>
            <div className="text-sm text-gray-400">Years of experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">3</div>
            <div className="text-sm text-gray-400">Projects completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">8</div>
            <div className="text-sm text-gray-400">Technologies mastered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">16</div>
            <div className="text-sm text-gray-400">Code commits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;