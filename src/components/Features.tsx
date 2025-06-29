import React from 'react';
import { FileText, Zap, Calendar, Globe, Shield, Clock, Brain, FolderSync as Sync, CheckCircle, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Extraction',
      description: 'Advanced AI automatically identifies dates, times, locations, and event details from any document format.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FileText,
      title: 'Multiple File Formats',
      description: 'Support for PDF, Word, Excel, PowerPoint, text files, images, and more. Upload anything.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Sync,
      title: 'Universal Calendar Sync',
      description: 'Seamlessly sync to Google Calendar, Outlook, Apple Calendar, Notion, and 20+ platforms.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Get your events extracted and synced in seconds, not hours. Lightning-fast AI processing.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, GDPR compliant, and SOC 2 certified. Your data stays secure.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Globe,
      title: 'Smart Timezone Detection',
      description: 'Automatically detects and converts timezones. Works globally with intelligent date parsing.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform documents into organized calendar events. 
            Built for teams that value efficiency and accuracy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;