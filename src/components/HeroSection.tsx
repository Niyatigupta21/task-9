import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-hero-gradient rounded-full mb-6">
              <span className="text-sm font-medium text-foreground">👋 Hello there!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              I'm <span className="text-primary">Alex Bennett</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Frontend developer based in USA.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I create beautiful, responsive websites and web applications with modern technologies. 
              Passionate about clean code and exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                About me
              </Button>
              <Button variant="outline" size="lg">
                My Projects
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-hero-gradient p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img 
                    src={profilePhoto} 
                    alt="Alex Bennett - Frontend Developer"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;