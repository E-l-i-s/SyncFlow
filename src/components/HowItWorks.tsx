import React from 'react';
import { Upload, Zap, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Document',
      description: 'Drag and drop any file - PDF, Word, Excel, PowerPoint, or plain text. Our system supports 50+ file formats.',
      color: 'bg-blue-500',
      delay: 0
    },
    {
      icon: Zap,
      title: 'AI Extracts Events',
      description: 'Our advanced AI scans your document and automatically identifies dates, times, locations, and event details.',
      color: 'bg-purple-500',
      delay: 0.2
    },
    {
      icon: CheckCircle,
      title: 'Review & Edit',
      description: 'Review extracted events in our intuitive interface. Edit, add details, or remove events as needed.',
      color: 'bg-green-500',
      delay: 0.4
    },
    {
      icon: Calendar,
      title: 'Sync to Calendar',
      description: 'Choose your preferred calendar platform and sync all events instantly. Google Calendar, Outlook, Notion, and more.',
      color: 'bg-orange-500',
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SyncFlow Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform any document into calendar events in just 4 simple steps. 
            No technical knowledge required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.color} text-white rounded-full shadow-lg`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See It In Action
            </h3>
            <p className="text-gray-600">
              Watch how SyncFlow transforms a meeting agenda into calendar events
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                Before: Manual Entry
              </h4>
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                <div className="text-sm text-gray-600 font-mono leading-relaxed">
                  Team Meeting Agenda<br/>
                  December 15, 2024 - 2:00 PM<br/>
                  Conference Room A<br/><br/>
                  Project Review: Dec 18, 3:00 PM<br/>
                  Client Presentation: Dec 20, 10:00 AM<br/>
                  Deadline: December 22, EOD
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                ⏱️ Manual entry time: ~15 minutes
              </div>
            </div>

            {/* After */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                After: AI Extraction
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-medium text-gray-900">Team Meeting</div>
                  <div className="text-sm text-gray-600">Dec 15, 2024 • 2:00 PM • Conference Room A</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-medium text-gray-900">Project Review</div>
                  <div className="text-sm text-gray-600">Dec 18, 2024 • 3:00 PM</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-medium text-gray-900">Client Presentation</div>
                  <div className="text-sm text-gray-600">Dec 20, 2024 • 10:00 AM</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-medium text-gray-900">Project Deadline</div>
                  <div className="text-sm text-gray-600">Dec 22, 2024 • 5:00 PM</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-green-600 font-medium">
                ⚡ AI processing time: ~30 seconds
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;