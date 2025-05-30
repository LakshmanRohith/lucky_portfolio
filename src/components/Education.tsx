
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Machine Learning and Artificial Intelligence. Thesis on Deep Learning applications in computer vision."
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Massachusetts Institute of Technology",
      period: "2014 - 2018",
      description: "Focus on software engineering and system design. Graduated summa cum laude with a specialization in distributed systems."
    },
    {
      degree: "Associate Degree in Web Development",
      school: "Community College of Denver",
      period: "2012 - 2014",
      description: "Foundation in web technologies including HTML, CSS, JavaScript, and database design."
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover-glow animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <h4 className="text-primary font-medium mb-2">{edu.school}</h4>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
