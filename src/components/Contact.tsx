import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main content */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-forest-green/10 border border-forest-green/30 rounded-full">
              <span className="text-sm font-semibold text-forest-green">Let's Connect</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to start a
              <br />
              <span className="relative inline-block">
                conversation
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 300 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 8C50 4 100 10 150 6C200 2 250 8 298 4" 
                    stroke="hsl(var(--forest-green))" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ?
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:bashahaneef103@gmail.com"
              className="group p-6 bg-background rounded-2xl border-2 border-border hover:border-mustard hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-xl bg-mustard/20 text-mustard border-2 border-mustard/30 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all">bashahaneef103@gmail.com</p>
            </a>

            <a
              href="tel:+917386353383"
              className="group p-6 bg-background rounded-2xl border-2 border-border hover:border-forest-green hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-xl bg-forest-green/20 text-forest-green border-2 border-forest-green/30 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 7386353383</p>
            </a>

            <a
              href="https://linkedin.com/in/haneef-basha"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-background rounded-2xl border-2 border-border hover:border-coral hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-xl bg-coral/20 text-coral border-2 border-coral/30 mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">linkedin.com/in/haneef-basha</p>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-warm-brown rounded-3xl text-primary-foreground">
            <h3 className="text-2xl font-bold mb-3">Let's Build Something Great Together</h3>
            <p className="mb-6 opacity-90">
              Whether you need a skilled developer for your team or want to discuss a project, I'd love to hear from you.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-warm-brown hover:bg-primary-foreground/90 font-semibold rounded-full px-8 group"
              asChild
            >
              <a href="mailto:bashahaneef103@gmail.com">
                Send Me an Email
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 mt-16 pt-8 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Shaik Haneef Basha. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </section>
  );
};
