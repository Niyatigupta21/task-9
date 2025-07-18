import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, Zap, Globe, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks like React, Vue, and Angular."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with React Native and Progressive Web Apps."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces with focus on user experience and accessibility."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites and applications for speed, SEO, and better user experience."
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Integrating third-party APIs and building custom backend solutions for seamless data flow."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and managing databases with focus on scalability and data integrity."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">My Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of web development services to help bring your 
            digital vision to life with cutting-edge technology and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-service-card border-service-card-border hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;