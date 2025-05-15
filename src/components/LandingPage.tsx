import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDownToLine,
  BarChart3,
  PiggyBank,
  Receipt,
  Star,
  ChevronRight,
  CheckCircle2,
  QrCode,
} from "lucide-react";

const LandingPage = () => {
  // Detect if user is on mobile (iOS specifically)
  const [isIOS, setIsIOS] = React.useState(false);

  React.useEffect(() => {
    // Check if user is on iOS
    const checkIfIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    setIsIOS(checkIfIOS());
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* App Logo - Fixed at top left */}
      <div className="fixed top-6 left-6 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-primary rounded-full p-3 flex items-center justify-center shadow-lg"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>

      {/* Download CTA - Fixed position based on device */}
      {isIOS ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.a
            href="https://apps.apple.com/app/expi/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg"
          >
            <div className="bg-white rounded-full p-1 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                  fill="#10b981"
                />
              </svg>
            </div>
            <span className="font-medium">Download on App Store</span>
          </motion.a>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="fixed bottom-6 left-6 z-50 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex flex-col items-center"
        >
          <QrCode className="h-20 w-20 text-primary mb-2" />
          <span className="text-sm font-medium text-center">
            Scan to download Expi
          </span>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block font-medium mb-6 text-primary"
              >
                EXPI
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                MINDFUL MONEY, SIMPLIFIED
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl font-bold mb-8 max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Say hello to your pocket financial ally that turns every
                transaction into a step toward clarity and peace.
              </motion.p>
            </motion.div>

            {/* iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end relative z-10"
            >
              <div className="relative">
                {/* Using the provided image instead of the mockup */}
                <img
                  // src="../../public/vite.svg"
                  // src="../../public/Black.png"
                  src="../../public/Black (1).jpeg"
                  alt="Expi App Interface"
                  className="w-auto h-[570px] object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 20px 13px rgb(0 0 0 / 0.15)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.2))",
                  }}
                />

                {/* Reflection effect */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] h-20 bg-black/10 rounded-[50%] blur-md"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4"
            >
              Features
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Everything You Need
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our app comes packed with powerful tools to help you take control
              of your finances
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Receipt className="h-10 w-10" />}
              title="Manual Transaction Entry"
              description="Mindfully log each expense to maintain complete awareness of your spending habits."
              delay={0.1}
            />

            <FeatureCard
              icon={<BarChart3 className="h-10 w-10" />}
              title="Monthly Tracking"
              description="View your monthly totals and compare spending patterns across different months."
              delay={0.2}
            />

            <FeatureCard
              icon={<Star className="h-10 w-10" />}
              title="Category Analysis"
              description="Identify your top spending categories each month with color-coded visualizations."
              delay={0.3}
            />

            <FeatureCard
              icon={<PiggyBank className="h-10 w-10" />}
              title="Recurring Expenses"
              description="Keep track of upcoming recurring expenses to better plan your monthly budget."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Getting started with Expi is simple and straightforward
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard
              number="01"
              title="Download the App"
              description="Get Expi from the App Store and install it on your device."
              delay={0.1}
            />

            <StepCard
              number="02"
              title="Enter Your Expenses"
              description="Manually add each transaction to maintain awareness of your spending."
              delay={0.2}
            />

            <StepCard
              number="03"
              title="Track Monthly Patterns"
              description="Analyze your monthly spending patterns and top categories."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Join thousands of satisfied users who have transformed their
              financial habits
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Manually entering my expenses has made me so much more aware of my spending habits. I finally feel in control of my finances!"
              author="Sarah J."
              delay={0.1}
            />

            <TestimonialCard
              quote="I love being able to compare my spending month-to-month. The monthly tracking feature has helped me identify patterns I never noticed before."
              author="Michael T."
              delay={0.2}
            />

            <TestimonialCard
              quote="The recurring expenses feature helps me plan ahead. I'm never surprised by bills anymore and can better manage my monthly budget."
              author="Emma R."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Simple Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the plan that works best for your financial journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Free"
              price="$0"
              description="Everything you need to get started"
              features={[
                "Unlimited expense entries",
                "Monthly analysis",
                "Time basis analysis",
                "Monthly totals",
                "Category breakdown",
              ]}
              buttonText="Download Free"
              delay={0.1}
              popular={true}
            />

            <PricingCard
              title="Premium"
              price="$4.99"
              description="Advanced features for power users"
              features={[
                "All Free features included",
                "Import/Export capabilities",
                "iPhone widgets",
                "Priority support",
                "More features coming soon!",
              ]}
              buttonText="Join Waitlist"
              delay={0.2}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to Transform Your Financial Habits?
              </h2>
              <div className="h-1 w-24 bg-white/50 mx-auto rounded-full mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of users who have discovered financial clarity
              through mindful expense tracking. Start your journey today with
              Expi and gain powerful insights into your spending habits.
            </motion.p>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl -z-0 transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl -z-0"></div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-primary rounded-full p-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-semibold">Expi</span>
            </div>

            <div className="flex gap-8 mb-4 md:mb-0">
              <Link
                to="/privacy-policy"
                className="text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href="#"
                className="text-sm hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <Link
                to="/contact-us"
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Expi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-primary/10 p-4 rounded-full mb-4 text-primary"
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          <div className="text-4xl text-primary mb-4">"</div>
          <p className="mb-4 italic">{quote}</p>
          <p className="font-semibold text-right">— {author}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const StepCard = ({ number, title, description, delay }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <div className="bg-primary text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  delay: number;
  popular: boolean;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  delay,
  popular,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <Card
        className={`h-full border-none shadow-md hover:shadow-lg transition-shadow ${popular ? "ring-2 ring-primary" : ""}`}
      >
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
          <div className="text-center mb-4">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <p className="text-center text-muted-foreground mb-6">
            {description}
          </p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className={`w-full py-6 rounded-full ${popular ? "bg-primary hover:bg-primary/90" : ""}`}
            variant={popular ? "default" : "outline"}
          >
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LandingPage;
