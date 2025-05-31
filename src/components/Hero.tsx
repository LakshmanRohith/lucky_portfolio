
import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6 animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="gradient-text">Lakshman Rohith</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
              Data Scientist
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Aspiring Machine Learning Engineer and Data Scientist with a strong passion for building intelligent, automated systems that solve real-world problems. I’m currently exploring agentic AI—AI systems capable of autonomous decision-making—and using automation to turn raw data into meaningful, actionable insights
            </p>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Available for work</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Contact Me - opens email */}
              <a href="mailto:lakshmansanagapalli@gmail.com">
                <Button className="hover-glow">
                  Contact Me
                  </Button>
                  </a>
                  {/* View Resume - opens resume link in new tab */}
                  <a href="https://drive.google.com/file/d/1j0pMbB9sbBfgtUuRpUu1L1py12nrCPRu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="hover-glow">
                    <Download className="w-4 h-4 mr-2" />
                    View Resume
                    </Button>
                    </a>
                    </div>


            {/* <div className="flex flex-wrap gap-4">
              <Button className="hover-glow">
                Contact Me
              </Button>
              <Button variant="outline" className="hover-glow">
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </div> */}

            

            <div className="flex space-x-6 pt-4">
              <a href="https://github.com/LakshmanRohith" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/lakshman-rohith-sanagapalli/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:lakshmansanagapalli@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 hover-glow animate-scale-in">
                <img 
                  src="/lovable-uploads/profile-pic.jpg" 
                  alt="Lakshman Rohith"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div> */}

<div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
  <div className="relative">
    {/* Outer Glowing Ring Animation */}
    <div className="absolute inset-0 w-[420px] h-[420px] rounded-full z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:animate-glow-ring before:bg-gradient-to-tr before:from-purple-500/60 before:via-violet-400/40 before:to-purple-700/50 blur-xl">
    </div>

    {/* Profile Image */}
    <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-[8px] border-violet-500 shadow-2xl z-10 relative animate-scale-in">
      <img 
        src="/lovable-uploads/profile pic.jpg" 
        alt="Lakshman Rohith"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};

export default Hero;
