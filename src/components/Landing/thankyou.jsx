//import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import logo from "../../assets/logo.svg";

const Thankyou = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-400 to-green-700 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Abstract Shapes */}
        <svg
          className="absolute top-0 right-0 w-96 h-96 text-white/5"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M45,-76.9C54.9,-69.3,57.2,-49.7,64.1,-32.8C71,-15.9,82.5,-1.7,82.9,12.7C83.3,27,72.5,41.5,60.2,52.4C47.9,63.3,34,70.6,18.4,74.8C2.8,78.9,-14.5,79.9,-31.9,76.1C-49.3,72.2,-66.8,63.5,-76.5,49.3C-86.2,35,-88,15.3,-85.6,-3.5C-83.1,-22.3,-76.3,-40.2,-63.3,-48.8C-50.3,-57.4,-31.1,-56.8,-15.3,-62.5C0.5,-68.2,13,-84.2,29.8,-85.9C46.7,-87.6,67.9,-75,45,-76.9Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Floating Circles */}
        <div className="absolute left-10 top-40 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute right-20 bottom-40 w-16 h-16 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative min-h-screen flex flex-col items-start justify-center p-5">
        {/* Logo and Badge Container */}
        <div className="flex items-center justify-start">
          <img
            className="w-8 mb-8 top-0 left-0"
            src={logo}
            alt="Planet Education Logo"
          />
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Success Illustration */}
          <div className="relative">
            {/* Decorative Ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 200 200"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: 0.2 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: 0.05 }}
                  />
                </linearGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Success Check Animation */}
            <div className="relative z-10 transform transition-all duration-700 animate-bounce-subtle">
              <svg
                className="w-32 h-32 mx-auto"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="white"
                  strokeWidth="5"
                  className="opacity-20"
                />
                <path
                  className="check"
                  d="M30 50l15 15 25-25"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <WordPullUp
              className="text-6xl font-bold text-white mb-6"
              words="Thank You!"
            />

            <WordFadeIn
              className="text-xl text-white/90 leading-relaxed"
              words="Your registration was successful. We will get in touch with you soon"
            />

            {/* Info Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 mt-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Check Our Website Card */}
              <motion.a
                href="https://planeteducation.info"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white transform hover:scale-105 transition-transform"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2">
                  Check Our Website
                </h3>
                <p className="text-sm text-white/80">
                  Visit our website for more information
                  <br />
                  about courses and upcoming events.
                </p>
              </motion.a>

              {/* Next Steps Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white transform hover:scale-105 transition-transform"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <svg
                  className="w-12 h-12 mx-auto mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    strokeWidth="2"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                <p className="text-sm text-white/80">
                  Our team will review your application
                  <br />
                  and contact you within 24 hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-white/60 self-center mt-16 text-sm">
          <p>Copyright © Planet Education 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
