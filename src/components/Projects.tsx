import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const projects = [
    {
      id: "01",
      title: "BharatMedicare – AI-Powered Medical Analysis Platform",
      description: "BharatMedicare is an AI-driven healthcare platform that offers skin lesion cancer detection and intelligent analysis of medical documents, helping users access fast and reliable medical insights.",
      tech: "React, Node.js, MongoDB, Express, Python, Tensorflow, Keras, ShadCN, ClerkAuth, tailwindCSS",
      images: [
        "/image copy.png",
        "/image copy 6.png",
        "/image copy 7.png",
      ],
      github : "https://github.com/ayush-tiwari-18/BharatMedicare",
      arrow : "https://bharatmedicare.onrender.com"
    },
    {
      id: "02", 
      title: "MeChat – Real-Time Full-Stack Chat Application",
      description: "A MERN-based chat application with real-time messaging powered by Socket.IO, featuring secure auth, responsive UI, and instant communication.",
      tech: "React, Node.js, MongoDB, Express, SocketIO, Axios, DaisyUI, tailwindCSS",
      images: [
        "/image copy 2.png",
        "/image copy 5.png",
        "/image copy 3.png",
        "/image copy 4.png"
      ],
      github: "https://github.com/ayush-tiwari-18/MeChat",
      arrow : "https://mechat-goca.onrender.com"
    },
    {
      id: "03",
      title: "Stress Optimizer",
      description: "A CNN model trained to predict the maximum stress on a beam for different volume factions and a specific force on it, We also found out the optimal density distribution for minimum vonMises stress",
      tech: "Python, Tensorflow, Matplotlib, Pandas, Keras, Scikit-Learn", 
      images: [
        "/image copy 8.png",
        "/image copy 9.png",
      ],
      github: "https://github.com/ayush-tiwari-18/StressOptimization"
    }
  ];

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <span className="text-6xl font-bold text-green-400">{project.id}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-green-400 font-semibold mb-6">{project.tech}</p>
                </div>
                
                <div className="flex space-x-4">
                  {project.id!="03" ? <Button variant="outline" size="icon" className="text-black border-gray-600 hover:border-green-400" onClick={()=>window.open(project.arrow)}><ArrowRight className="w-4 h-4" /></Button>: ""}
                  <Button variant="outline" size="icon" className="text-black border-gray-600 hover:border-green-400" onClick={()=>window.open(project.github)}>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative group">
                  <img
                    src={project.images[currentImageIndex[project.id] || 0]}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-green-400/20 opacity-0  transition-opacity rounded-lg"></div>
                  
                  {/* Carousel Navigation */}
                  <button
                    onClick={() => prevImage(project.id, project.images.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => nextImage(project.id, project.images.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: imageIndex }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          (currentImageIndex[project.id] || 0) === imageIndex 
                            ? 'bg-green-400' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;