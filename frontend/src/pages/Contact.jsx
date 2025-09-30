import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Globe, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const heroAnimation = useScrollAnimation();
  const contactInfoAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const locationAnimation = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["baktha.bharani@gmail.com"],
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9344834879 (Baktha Kumar)"],
      description: "Call us during business hours",
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.phoenixitac.com"],
      description: "Visit our official website",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
      ],
      description: "Indian Standard Time (IST)",
    },
  ];

  const offices = [
    {
      location: "Chennai",
      address:
        "No 452 A, Wide Wing Apartment, 17th Street, Korattur, Chennai 80",
      description: "Main development center with 24x7 access",
      services: ["Development", "Training", "Support"],
    },
    {
      location: "Pondicherry",
      address:
        " No 10 Block IV , Kavikuyil Street, Ashok Nagar, Lawspet, Pondicherry",
      description: "Middle East operations and client services",
      services: ["Consulting", "Client Relations"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container px-4" ref={heroAnimation.ref}>
          <div
            className={`max-w-4xl mx-auto text-center space-y-4 transition-all duration-700 ${
              heroAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="text-primary border-primary">
              Contact Us
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with cutting-edge technology? Get
              in touch with our experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container" ref={contactInfoAnimation.ref}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
              contactInfoAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Send us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select className="w-full p-3 border border-input rounded-md bg-background">
                        <option value="">Select a service</option>
                        <option value="data-warehouse">
                          Data Warehouse & BI
                        </option>
                        <option value="big-data">Big Data Analytics</option>
                        <option value="mobile-development">
                          Mobile Development
                        </option>
                        <option value="sap-solutions">SAP Solutions</option>
                        <option value="training">Training Services</option>
                        <option value="odc">Offshore Development Center</option>
                        <option value="consulting">General Consulting</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                      />
                    </div>
                    <Button size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="font-medium">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container" ref={locationAnimation.ref}>
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-700 ${
              locationAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Locations</h2>
            <p className="text-lg text-muted-foreground">
              Our presence across multiple cities enables us to serve clients
              globally
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
              locationAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {offices.map((office, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{office.location}</h3>
                    <p className="text-primary font-medium">{office.address}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      {office.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our services and engagement process
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger implementations can take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question:
                  "Do you provide ongoing support after project completion?",
                answer:
                  "Yes, we offer comprehensive post-implementation support including 24/7 production support, maintenance, and enhancements as needed.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "Absolutely! We specialize in both independent delivery and augmenting existing teams. Our onsite-offshore model allows seamless collaboration with your internal resources.",
              },
              {
                question: "What training options do you offer?",
                answer:
                  "We provide both corporate training for professionals and college training programs. Our training covers DW/BI, Big Data, AI/ML, SAP, and Mobile Development with hands-on practical experience.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Don't wait! Contact us today and let's discuss how we can help
              transform your business with our innovative IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+919344834879">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91 9344834879
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black/50 hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="mailto:baktha.bharani@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
