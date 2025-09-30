import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Code,
  Users,
  Handshake,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: "Development",
      description: "Custom software and application development tailored to your specific business needs. We specialize in building scalable, secure, and high-performance solutions.",
      features: [
        "Full-stack web development",
        "Mobile app development (iOS/Android)",
        "Enterprise application integration",
        "Cloud-native development",
      ],
      technologies: ["React", "Node.js", "Python", "Java", "AWS", "Azure", "Docker"]
    },
    {
      icon: Users,
      title: "Training",
      description: "Empower your team with comprehensive training programs. We offer hands-on workshops and customized courses on the latest technologies and methodologies.",
      features: [
        "Corporate training programs",
        "Individual skill development workshops",
        "Certified instructor-led sessions",
        "On-site and remote training options",
      ],
      technologies: ["Data Warehousing", "Big Data", "BI Tools", "SAP", "Programming Languages"]
    },
    {
      icon: Handshake,
      title: "Consulting",
      description: "Strategic IT consulting services to help you navigate complex technology challenges. Our experts provide guidance from planning and architecture to implementation and optimization.",
      features: [
        "Technology roadmap and strategy",
        "Digital transformation consulting",
        "System architecture and design",
        "Performance optimization and audits",
      ],
      technologies: ["Cloud Computing", "Data Strategy", "IT Infrastructure", "Security", "Agile Methodologies"]
    },
    {
      icon: DollarSign,
      title: "Payroll",
      description: "Streamlined and accurate payroll services to simplify your HR operations. We handle everything from calculations to compliance, ensuring your team is paid on time, every time.",
      features: [
        "Automated payroll processing",
        "Tax filing and compliance management",
        "Employee benefits administration",
        "Secure digital pay stubs and reports",
      ],
      technologies: ["Payroll Software", "Cloud-based platforms", "Compliance tools"]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container px-4" ref={heroAnimation.ref}>
          <div className={`max-w-4xl mx-auto text-center space-y-4 transition-all duration-700 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="outline" className="text-primary border-primary">
              Our Services
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Comprehensive <span className="text-primary">IT Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a range of professional services to help your business grow and thrive
            </p>
          </div>
        </div>
      </section>

      {/* Main Services (Updated) */}
      <section className="py-16 lg:py-24">
        <div className="container" ref={servicesAnimation.ref}>
          <div className={`text-center space-y-4 mb-12 transition-all duration-700 ${servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our core services are designed to meet the critical needs of modern businesses
            </p>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container" ref={ctaAnimation.ref}>
          <div className={`text-center space-y-8 transition-all duration-700 ${ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="border-primary-foreground text-black/50 hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/odc">Learn About ODC</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;