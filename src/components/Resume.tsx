import { Button } from "@/components/ui/button";
import { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      period: "2023 - Present",
      title: "Bachelor of Technology in Mechanical Engineering - 8.38 CGPA",
      institution: "Indian Institute of Technology Ropar",
      description: "Specialized in software engineering and artificial intelligence. Graduated with honors."
    },
    {
      period: "2022 - 2023", 
      title: "12th Grade - 96%",
      institution: "Central Board of Secondary Education",
      description: "Completed 12th grade from Army Public School Shankar Vihar, scoring one of the highest marks in the school."
    },
    {
      period: "2020 - 2021", 
      title: "10th Grade - 98%",
      institution: "Central Board of Secondary Education",
      description: "Secured the First position in my school (Army Public School Shankar Vihar) at the CBSE 10th grade Board examination."
    }
  ];

  const skills = [
    { 
      id: "01",
      name: "Web Development",
      description: "Creating responsive and interactive full stack web applications using modern frameworks and technologies.",
      technologies: "React, MongoDB, Express, NodeJS, JavaScript, Axios, ShadCN, ClerkAuth, SocketIO, TailwindCSS"
    },
    { 
      id: "02",
      name: "Deep Learning and Machine Learning",
      description: "Experienced with neural networks, Computer Vision, time series analysis and AI applications. Proficient in building and deploying machine learning models using modern ML frameworks.",
      technologies: "Python, TensorFlow, NumPy, Matplotlib, Keras, Pandas, Scikit-Learn"
    },
    { 
      id: "03",
      name: "Data Structures and Algorithms",
      description: "Proficient in Data Structures and Algorithms with over 300 problems solved on LeetCode and GFG. Achieved a 1398 rating on Codeforces and 3★ on CodeChef, showcasing strong problem-solving skills.",
      technologies: "C++"
    },
  ];

  const positions = [
    {
      period: "2024 - 2025",
      role: "Coordinator",
      organization: "MUN Club, IIT Ropar",
      description: "Organized MUN conferences, managed club activities, and trained new delegates."
    },
    {
      period: "2025",
      role: "Co-Head",
      organization: "Event Management Team, Aarohan 2025",
      description: "Co-headed the event management team for Aarohan, the annual sports fest of IIT Ropar."
    },
    {
      period: "2025",
      role: "Head",
      organization: "Content and Anchoring, Zeitgeist 2025",
      description: "Will lead the content creation and anchoring team for Zeitgeist 2025."
    }
  ];

  const aboutMe = {
    description: "I'm Ayush Tiwari, a third-year B.Tech student in Mechanical Engineering at IIT Ropar, currently holding a CGPA of 8.38. I secured an All India Rank of 2109 in JEE Mains (99.82 percentile) and AIR 8622 in JEE Advanced. Academically driven, I also scored 98% in my 10th board exams and 96% in 12th. Beyond academics, I'm deeply passionate about software development, artificial intelligence, and machine learning. I continuously explore the intersection of engineering and intelligent systems, aiming to build impactful, tech-driven solutions.",
    interests: ["Web Development", "Artificial Intelligence", "Deep Learning", "Machine Learning"],
    languages: ["English", "Hindi (Native)"]
  };

  const tabs = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "positions", label: "Positions of Responsibility" }, // New tab
    { id: "about", label: "About me" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  {index !== education.length - 1 && <div className="w-px h-16 bg-gray-700 mt-2"></div>}
                </div>
                <div className="flex-1">
                  <div className="text-green-400 text-sm mb-1">{edu.period}</div>
                  <h4 className="text-lg font-semibold">{edu.title}</h4>
                  <div className="text-gray-400 text-sm mb-2">{edu.institution}</div>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case "skills":
        return (
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900 rounded-xl shadow-md space-y-2 border border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-300">{skill.description}</p>
                <div>
                  <span className="text-sm font-medium text-gray-400">Technologies:</span>
                  <div className="mt-1 text-gray-200">{skill.technologies}</div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case "positions":  // New case for positions
        return (
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  {index !== positions.length - 1 && <div className="w-px h-16 bg-gray-700 mt-2"></div>}
                </div>
                <div className="flex-1">
                  <div className="text-green-400 text-sm mb-1">{position.period}</div>
                  <h4 className="text-lg font-semibold">{position.role}</h4>
                  <div className="text-gray-400 text-sm mb-2">{position.organization}</div>
                  <p className="text-gray-400 text-sm">{position.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case "about":
        return (
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">{aboutMe.description}</p>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {aboutMe.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
              <ul className="space-y-1">
                {aboutMe.languages.map((language, index) => (
                  <li key={index} className="text-gray-400">{language}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8">Why hire me?</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I bring a unique combination of technical expertise and creative problem-solving to every project. My experience spans across modern web technologies, AI/ML implementations, and leadership roles.
          </p>
          
          <div className="space-y-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === tab.id
                    ? "bg-green-400 text-black hover:bg-green-500" 
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 capitalize">
            {activeTab === "about" 
              ? "About me" 
              : activeTab === "positions" 
                ? "Positions of Responsibility" 
                : `My ${activeTab}`}
          </h3>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Resume;