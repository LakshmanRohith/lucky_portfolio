
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
              <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Experienced in React, Node.js, and cloud architectures with a focus on clean, 
              efficient code and exceptional user experiences.
            </p>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Available for hire</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="hover-glow">
                Contact Me
              </Button>
              <Button variant="outline" className="hover-glow">
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="https://github.com/johndoe" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 hover-glow animate-scale-in">
                <img 
                  src="/lovable-uploads/6ef9a422-1276-4b81-a281-dd03617c39d6.png" 
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
