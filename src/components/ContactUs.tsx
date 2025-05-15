import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Send,
  CheckCircle,
} from "lucide-react";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // After 5 seconds, reset the submission state
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
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

      {/* Back to Home Button */}
      <div className="fixed top-6 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Expi? We're here to help. Reach out to our
              team and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="h-full border-none shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          support@expi-app.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about Expi
            </p>
          </motion.div>

          <div className="space-y-6">
            <FaqItem
              question="How do I add a new transaction in Expi?"
              answer="To add a new transaction, open the Expi app and tap the '+' button at the bottom of the screen. Fill in the transaction details including amount, category, and date, then tap 'Save'."
            />
            <FaqItem
              question="Can I export my transaction data?"
              answer="Yes, with our Premium plan you can export your transaction data in CSV format. Go to Settings > Data > Export to access this feature."
            />
            <FaqItem
              question="Is my financial data secure?"
              answer="Absolutely. Expi uses industry-standard encryption to protect your data. Plus, since you manually enter transactions, your banking credentials are never stored in our system."
            />
            <FaqItem
              question="How do I cancel my Premium subscription?"
              answer="You can cancel your Premium subscription at any time through your App Store subscription settings. Your Premium features will remain active until the end of your billing period."
            />
            <FaqItem
              question="Does Expi work offline?"
              answer="Yes, Expi works offline. Any transactions you enter while offline will sync to the cloud once you're connected to the internet again."
            />
          </div>
        </div>
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

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full text-left"
          >
            <h3 className="text-lg font-medium">{question}</h3>
            <div
              className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-muted-foreground"
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactUs;
