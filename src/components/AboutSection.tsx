import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Alex Bennett - About"
                className="w-80 h-96 rounded-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold">About me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Passionate Frontend Developer Creating Digital Experiences
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated frontend developer with over 5 years of experience creating 
              beautiful, functional, and user-friendly websites and applications. I specialize 
              in React, TypeScript, and modern web technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My passion lies in transforming complex problems into simple, beautiful, and 
              intuitive designs. I believe that good design is not just what it looks like, 
              but how it works.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div>
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;