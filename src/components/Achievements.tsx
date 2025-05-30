
import React from 'react';
import { Trophy, Users, Star, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "1st Place in National Hackathon",
      description: "Won the grand prize at TechCrunch Disrupt for innovative AI solution"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Featured in Tech Magazine", 
      description: "Article published about modern web development best practices"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Contributed to major open source projects with 500+ commits"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Speaker at Tech Conferences",
      description: "Delivered talks at multiple conferences about React and Node.js"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" }
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
