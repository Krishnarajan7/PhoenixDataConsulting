import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import {
  useScrollAnimation,
  animationVariants,
} from "@/hooks/useScrollAnimation";
import {
  Database,
  BarChart3,
  Cloud,
  Smartphone,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  BookOpen, // New Icon
  GraduationCap, // New Icon
  Laptop, // New Icon
} from "lucide-react";

const Index = () => {
  const heroAnimation = useScrollAnimation();
  const introAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const karpithalAnimation = useScrollAnimation(); // New animation hook
  const presenceAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    {
      icon: Database,
      title: "Data Warehouse & BI",
      description:
        "Comprehensive data warehousing and business intelligence solutions",
    },
    {
      icon: BarChart3,
      title: "Big Data Analytics",
      description:
        "Advanced analytics and data visualization for better insights",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native mobile applications for Android and iOS platforms",
    },
    {
      icon: Cloud,
      title: "SAP Solutions",
      description: "SAP modules including FICO, BI, BASIS, and ABAP",
    },
  ];

  const karpithalFeatures = [
    {
      icon: BookOpen,
      title: "Vast Course Library",
      description:
        "Access thousands of courses from top instructors across a wide range of industries and technologies.",
    },
    {
      icon: GraduationCap,
      title: "Expert-Led Instruction",
      description:
        "Learn from real-world practitioners and subject matter experts in your field.",
    },
    {
      icon: Laptop,
      title: "Flexible Learning",
      description:
        "Study at your own pace with lifetime access to courses and on-demand video lectures.",
    },
    {
      icon: Users,
      title: "Community & Support",
      description:
        "Join a global community of learners and engage with instructors through Q&A forums.",
    },
  ];

  const achievements = [
    { number: "45+", label: "IT Corporate Clients" },
    { number: "5000+", label: "Trained Learners" },
    { number: "15", label: "Technologies" },
    { number: "7", label: "Countries Served" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-20 lg:py-28 bg-gradient-to-br from-background via-background to-muted/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div
          className="container px-4 max-w-full overflow-x-hidden relative z-10"
          ref={heroAnimation.ref}
        >
          <div
            className={`max-w-5xl mx-auto text-center space-y-8 ${
              animationVariants.fadeUp
            } ${
              heroAnimation.isVisible
                ? animationVariants.fadeUpVisible
                : animationVariants.fadeUpHidden
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge
                variant="outline"
                className="text-primary border-primary/30 bg-primary/5 px-4 py-2"
              >
                <Star className="w-4 h-4 mr-2" />
                Since 2010 • Global IT Solutions
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight leading-tight">
              Becoming the leader in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Next Gen IT
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Mobile, Social, Cloud and Big Data
              </p>
              <p className="text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
                Phoenix Data Consulting is the consulting arm of Axiom
                Semantics, providing comprehensive IT solutions and training
                services globally since 2010. We're a subsidiary of{" "}
                <span className="text-primary font-semibold">Karpithal</span>, a
                leading online learning platform empowering professionals with
                cutting-edge technology skills.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              <Award className="w-4 h-4 text-primary" />
              <span>Trusted by 45+ Corporate Clients</span>
              <span className="mx-2">•</span>
              <Users className="w-4 h-4 text-primary" />
              <span>5000+ Trained Professionals</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5 hover:text-primary"
                asChild
              >
                <a
                  href="https://www.karpithal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Karpithal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-secondary/40 hover:text-primary/100"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-20 lg:py-28">
        <div className="container" ref={introAnimation.ref}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              animationVariants.fadeUp
            } ${
              introAnimation.isVisible
                ? animationVariants.fadeUpVisible
                : animationVariants.fadeUpHidden
            }`}
          >
            <div
              className={`space-y-6 ${animationVariants.fadeLeft} ${
                introAnimation.isVisible
                  ? animationVariants.fadeLeftVisible
                  : animationVariants.fadeLeftHidden
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Global IT Consulting Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded and grown by industry experts with experience in India,
                Singapore, and the US, we serve clients across India, Dubai,
                Bahrain, Singapore, Malaysia, Canada, and the United States.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Consulting arm of pioneer skill development company Axiom
                    Semantics
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Providing IT solutions since 2010
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">
                    Industry experts experienced in India, Singapore & US
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-2 gap-6 ${
                animationVariants.fadeRight
              } ${
                introAnimation.isVisible
                  ? animationVariants.fadeRightVisible
                  : animationVariants.fadeRightHidden
              }`}
            >
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-3">
                      {achievement.number}
                    </div>
                    <div className="text-base text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-muted/30 to-muted/60">
        <div className="container" ref={servicesAnimation.ref}>
          <div
            className={`text-center space-y-6 mb-16 ${
              animationVariants.fadeUp
            } ${
              servicesAnimation.isVisible
                ? animationVariants.fadeUpVisible
                : animationVariants.fadeUpHidden
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions covering the latest technologies and
              methodologies
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
              animationVariants.fadeScale
            } ${
              servicesAnimation.isVisible
                ? animationVariants.fadeScaleVisible
                : animationVariants.fadeScaleHidden
            }`}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 lg:py-28">
        <div className="container" ref={presenceAnimation.ref}>
          <div
            className={`text-center space-y-16 ${animationVariants.fadeUp} ${
              presenceAnimation.isVisible
                ? animationVariants.fadeUpVisible
                : animationVariants.fadeUpHidden
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Global Presence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Serving clients across multiple countries with offshore
                development centers
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
              {[
                "India",
                "Dubai",
                "Bahrain",
                "Singapore",
                "Malaysia",
                "Canada",
                "United States",
              ].map((country, index) => (
                <div
                  key={country}
                  className={`flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 ${animationVariants.staggered(
                    index * 100
                  )} ${
                    presenceAnimation.isVisible
                      ? animationVariants.fadeUpVisible
                      : animationVariants.fadeUpHidden
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground">
        <div className="container" ref={ctaAnimation.ref}>
          <div
            className={`text-center space-y-10 ${animationVariants.fadeUp} ${
              ctaAnimation.isVisible
                ? animationVariants.fadeUpVisible
                : animationVariants.fadeUpHidden
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our experts to discuss your next project and
              discover how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-primary-foreground text-black/40 hover:bg-primary-foreground hover:text-primary shadow-lg transition-all duration-300"
                asChild
              >
                <Link to="/odc">Learn About ODC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Karpithal Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-background/50 to-muted/50">
        <div className="container mx-auto px-4" ref={karpithalAnimation.ref}>
          <div
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              animationVariants.fadeUp
            } ${
              karpithalAnimation.isVisible
                ? animationVariants.fadeUpVisible
                : animationVariants.fadeUpHidden
            }`}
          >
            {/* Left: Text Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Karpithal: Your Learning Journey Starts Here
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                As a proud subsidiary, we leverage Karpithal's world-class
                online learning platform to empower professionals with
                practical, in-demand skills. Access a wide range of courses,
                expert-led instruction, and flexible learning options designed
                to elevate your career.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {karpithalFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="px-8 py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.karpithal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-5 text-lg border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.karpithal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Karpithal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/karpithal.png" 
                  alt="Karpithal Learning Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
