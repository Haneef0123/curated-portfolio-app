export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-forest-green/10 border border-forest-green/30 rounded-full">
            <span className="text-sm font-semibold text-forest-green">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Turning ideas into
            <br />
            <span className="text-forest-green">pixel-perfect reality</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="font-semibold text-foreground">Front End Developer</span> with 
              over 6 years of experience building dynamic, responsive web applications. My expertise 
              spans across <span className="font-semibold text-foreground">React, Next.js, JavaScript, 
              TypeScript, and Redux</span>, with a proven track record in delivering user-focused 
              fintech and educational platforms from design to deployment.
            </p>
            
            <p>
              I specialize in creating scalable frontend architectures, implementing efficient state 
              management solutions, and integrating RESTful APIs. My work focuses on performance 
              optimization, exceptional user experiences, and seamless collaboration with cross-functional 
              teams in Agile environments.
            </p>

            <p>
              Currently at <span className="font-semibold text-foreground">Upstox</span>, I've engineered 
              real-time tracking platforms, revamped IPO applications, and developed interactive educational 
              platforms that have significantly improved user engagement and retention rates.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-brown mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-green mb-2">3</div>
              <div className="text-sm text-muted-foreground">Major Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-coral mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
