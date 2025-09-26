import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Building2,
  GraduationCap,
  Globe,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const Clients = () => {
  const heroAnimation = useScrollAnimation();
  const corporateAnimation = useScrollAnimation();
  const collegesAnimation = useScrollAnimation();
  const regionalAnimation = useScrollAnimation();
  const achievementsAnimation = useScrollAnimation();
  const approachAnimation = useScrollAnimation(); // New animation hook
  const ctaAnimation = useScrollAnimation();

  const corporateClients = [
    "Mphasis",
    "Wipro",
    "AspireSys (Bahrain)",
    "Hexaware",
    "Accenture",
    "Bank Of America",
    "HCL",
    "Emirates NBD (Dubai)",
    "Cognizant",
    "Nomura",
    "Verizon (USA)",
    "Infosys",
    "Inautix",
    "Ministry of Defence",
    "Kumaran Systems",
    "Nokia Siemens Networks",
    "JDA",
    "Mastek",
    "PayPal",
    "Dell",
    "Liberty Mutual",
  ];

  const partnerColleges = [
    "SRM Easwari",
    "PSGR Krishnammal College for Women",
    "NGP Arts and Science College",
    "Sairam Engineering College",
    "TJS Engineering College",
    "Karpaga Vinayagar College of Engineering",
    "SMK Fomra Engineering College",
    "Tagore Engineering College",
    "Jaya Engineering College",
    "IFET Engineering College",
  ];

  const clientsByRegion = [
    {
      region: "India",
      clients: ["Mphasis", "Wipro", "HCL", "Infosys", "Accenture India"],
      description: "Leading IT companies and government organizations",
    },
    {
      region: "Middle East",
      clients: ["Bahrain Defence Force", "Emirates NBD (Dubai)"],
      description: "Banking and technology services",
    },
    {
      region: "United States",
      clients: ["Bank Of America", "Verizon", "PayPal", "Dell"],
      description: "Financial services and technology giants",
    },
    {
      region: "Global",
      clients: ["Cognizant", "Nokia Siemens Networks", "Liberty Mutual"],
      description: "Multinational corporations",
    },
  ];

  const achievements = [
    {
      icon: Building2,
      number: "45+",
      label: "Corporate Clients",
      description: "Leading IT companies trust our services",
    },
    {
      icon: GraduationCap,
      number: "10+",
      label: "Partner Colleges",
      description: "Educational institutions we collaborate with",
    },
    {
      icon: Globe,
      number: "7",
      label: "Countries",
      description: "Global presence across continents",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Professionals Trained",
      description: "Learners who benefited from our training",
    },
  ];

  const testimonials = [
    {
      company: "Major Hard Disk Manufacturing Company",
      project: "ETL Process Optimization",
      result: "Reduced daily load window from 6 hours to 2.5 hours",
      industry: "Manufacturing",
    },
    {
      company: "Consumer Credit Company",
      project: "ETL Conversion Project",
      result: "Significant cost savings on licensing and resources",
      industry: "Financial Services",
    },
    {
      company: "USA's Second Largest Retailer",
      project: "ERP Implementation",
      result: "Complete ERP transformation with PeopleSoft and Oracle",
      industry: "Retail",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container" ref={heroAnimation.ref}>
          <div
            className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-700 ${
              heroAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="text-primary border-primary">
              Our Clients
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Over 45+ corporate clients and numerous educational institutions
              trust Phoenix Data Consulting for their technology needs
            </p>
          </div>
        </div>
      </section>

      {/* Client Achievements */}
      <section className="py-16 lg:py-24">
        <div className="container" ref={achievementsAnimation.ref}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              achievementsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container" ref={corporateAnimation.ref}>
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-700 ${
              corporateAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Corporate Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading IT companies, financial institutions, and government
              organizations that have partnered with us for their technology
              initiatives
            </p>
          </div>
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-700 delay-200 ${
              corporateAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {corporateClients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{client}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients by Region */}
      <section className="py-16 lg:py-24">
        <div className="container" ref={regionalAnimation.ref}>
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-700 ${
              regionalAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Global Client Distribution
            </h2>
            <p className="text-lg text-muted-foreground">
              Our clients span across multiple regions and industries
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-200 ${
              regionalAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {clientsByRegion.map((region, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="text-xl font-bold">{region.region}</h3>
                    <p className="text-sm text-muted-foreground">
                      {region.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {region.clients.map((client, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-center p-2 bg-muted/50 rounded"
                      >
                        {client}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Colleges */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container" ref={collegesAnimation.ref}>
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-700 ${
              collegesAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Partner Educational Institutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with leading colleges and universities for student
              development programs
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${
              collegesAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {partnerColleges.map((college, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{college}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real results delivered for our clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <Badge variant="outline">{testimonial.industry}</Badge>
                    <h3 className="text-xl font-bold">{testimonial.project}</h3>
                    <p className="text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Result:</h4>
                    <p className="text-green-600 font-medium">
                      {testimonial.result}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Successful Implementation
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - New Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container" ref={approachAnimation.ref}>
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-700 ${
              approachAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Approach: Partnering for Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We go beyond providing services; we become an integral part of
              your team, focusing on delivering tangible, long-term value.
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
              approachAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Client-Centric Solutions</h3>
                <p className="text-muted-foreground">
                  We start with a deep understanding of your unique challenges
                  and business goals to craft custom solutions that truly work.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Collaborative Partnership</h3>
                <p className="text-muted-foreground">
                  Our experts work side-by-side with your teams, ensuring
                  knowledge transfer and a smooth implementation process.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Measurable Results</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering outcomes that are not just
                  successful, but also demonstrably beneficial to your bottom
                  line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container" ref={ctaAnimation.ref}>
          <div
            className={`text-center space-y-8 transition-all duration-700 ${
              ctaAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Growing Client Family
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience the same quality and dedication that has made us the
              trusted technology partner for leading organizations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black/50 hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;