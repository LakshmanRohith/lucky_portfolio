
import React from 'react';
import { Trophy, Users, Star, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Published 2 Research Papers on IEEE access through top NIT collaboration",
      description: "Contributed to the field of AI with innovative research on neural networks. In Medical Imaging and AI-driven solutions and automation."
      
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "President of Pennify Chapter VIT-AP", 
      description: "Led the Pennify chapter at VIT-AP, organizing workshops and events to promote AI and software development skills among students."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Instructor at Primo Grad",
      description: "Taught over 100+ students in AI and software development, helping them build a strong foundation in these fields."
      
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Speaker at Tech Conferences",
      description: "Delivered talks at multiple conferences about AI AUTOMATION and Generative AI, sharing insights on the latest trends and technologies."
    }
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-4 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
