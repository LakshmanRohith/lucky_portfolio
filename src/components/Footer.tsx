
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Lakshman Rohith</div>
            <p className="text-muted-foreground mb-4">
              AI Automation & Full Stack Developer passionate about creating innovative web solutions using AI.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/LakshmanRohith" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/lakshman-rohith-sanagapalli/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:lakshmansanagapalli@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#education" className="hover:text-primary transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#certificates" className="hover:text-primary transition-colors">Certificates</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>lakshmansanagapalli@gmail.com</li>
              <li>+91 8309935515</li>
              <li>Guntur, AP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Lakshman Rohith
          </p>
          <p className="mt-2">© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
