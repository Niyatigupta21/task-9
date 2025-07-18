import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-service-card border-service-card-border">
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-background border-border" />
                  <Input placeholder="Your Email" className="bg-background border-border" />
                </div>
                <Input placeholder="Subject" className="bg-background border-border" />
                <Textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  className="bg-background border-border" 
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">alex.bennett@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;