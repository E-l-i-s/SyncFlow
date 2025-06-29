import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, FileText, Calendar, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8"
          >
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Document Processing
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Documents Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
              Calendar Events
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Upload any document and let AI extract calendar events automatically. 
            Sync to Google Calendar, Outlook, Notion and more. Save hours of manual work.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/upload"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-16"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              No credit card required
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Free forever plan
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Setup in 2 minutes
            </div>
          </motion.div>

          {/* Demo Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Before */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-gray-600" />
                    Your Document
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                    <div className="text-sm text-gray-700 font-mono leading-relaxed">
                      <div className="font-bold mb-2">Team Meeting Schedule</div>
                      <div>• Monday, Dec 15 at 2:00 PM - Project Review</div>
                      <div>• Wednesday, Dec 17 at 10:00 AM - Client Call</div>
                      <div>• Friday, Dec 19 at 3:30 PM - Team Standup</div>
                      <div>• Deadline: December 22, 2024</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center lg:block">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* After */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-green-600" />
                    Extracted Events
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900">Project Review</div>
                      <div className="text-sm text-gray-600">Dec 15, 2024 • 2:00 PM</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900">Client Call</div>
                      <div className="text-sm text-gray-600">Dec 17, 2024 • 10:00 AM</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900">Team Standup</div>
                      <div className="text-sm text-gray-600">Dec 19, 2024 • 3:30 PM</div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="font-medium text-gray-900">Project Deadline</div>
                      <div className="text-sm text-gray-600">Dec 22, 2024 • All Day</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-yellow-400 p-3 rounded-full shadow-lg"
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-4 -right-4 bg-green-400 p-3 rounded-full shadow-lg"
            >
              <Calendar className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;