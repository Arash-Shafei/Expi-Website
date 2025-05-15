import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold mx-auto pr-24">Privacy Policy</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Privacy Policy for Expi
            </h1>
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> May 14, 2025
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how Expi ("we," "our," or "us")
              collects, uses, and protects information when you use our mobile
              application ("Expi" or "the App"). We are committed to ensuring
              the privacy and security of your personal information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-medium mt-6 mb-3">
              Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Transaction details you manually enter (amounts, dates,
                categories, descriptions)
              </li>
              <li>Any custom categories or tags you create</li>
              <li>Settings and preferences within the App</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">
              Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (model, operating system version)</li>
              <li>App usage statistics and performance data</li>
              <li>Crash reports and error logs</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the App's functionality</li>
              <li>Improve and optimize the App experience</li>
              <li>Troubleshoot and fix technical issues</li>
              <li>Analyze usage patterns to enhance features</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Data Storage and Security
            </h2>
            <p>
              All financial data you enter is stored locally on your device. We
              do not store your financial information on our servers. Your data
              remains on your device unless you explicitly choose to export it.
            </p>
            <p>
              We implement appropriate security measures to protect against
              unauthorized access to your device's stored data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Third-Party Services
            </h2>
            <p>
              The App may use third-party services for analytics and crash
              reporting. These services collect anonymous usage data to help us
              improve the App's performance and user experience. These third
              parties are bound by their own privacy policies.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
            <p>
              Your data remains on your device until you delete it or uninstall
              the App. You can delete your data at any time through the App's
              settings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the data stored in the App</li>
              <li>Export your data in a common format</li>
              <li>Delete all your data from the App</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Children's Privacy
            </h2>
            <p>
              The App is not intended for use by children under the age of 13.
              We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Effective Date."
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@expiapp.com"
                className="text-primary hover:underline"
              >
                support@expiapp.com
              </a>
              .
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-background py-6 border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Expi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
