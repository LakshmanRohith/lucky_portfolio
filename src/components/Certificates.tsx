
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400",
      link: "https://cloud.google.com/certification"
    },
    {
      title: "Full Stack Web Development Certification",
      issuer: "freeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      link: "https://freecodecamp.org"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2022",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400",
      link: "https://stanford.edu"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover-glow animate-scale-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                
                <Button size="sm" variant="outline" asChild className="w-full">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
