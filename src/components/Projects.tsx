
import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      tech: ["React", "Firebase", "TypeScript", "Tailwind"],
      github: "https://github.com/johndoe/task-manager",
      demo: "https://taskmanager-demo.example.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React Native", "API Integration", "Redux", "Charts"],
      github: "https://github.com/johndoe/weather-app",
      demo: "https://weather-demo.example.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      github: "https://github.com/johndoe/social-dashboard",
      demo: "https://dashboard-demo.example.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using machine learning models for creative digital art and design.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/johndoe/ai-image-gen",
      demo: "https://aiimages-demo.example.com",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile fitness application with workout tracking, nutrition monitoring, and progress analytics.",
      tech: ["React Native", "Node.js", "MongoDB", "Charts"],
      github: "https://github.com/johndoe/fitness-tracker",
      demo: "https://fitness-demo.example.com",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-glow animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
