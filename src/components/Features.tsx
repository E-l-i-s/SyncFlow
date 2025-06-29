import React from 'react';
import { 
  FileText, 
  Zap, 
  Calendar, 
  Globe, 
  Shield, 
  Clock,
  Brain,
  Sync,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Extraction',
      description: 'Advanced AI automatically identifies dates, times, and event details from any document format.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FileText,
      title: 'Multiple File Formats',
      description: 'Support for PDF, Word, Excel, PowerPoint, text files, and more. Upload anything.',
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

  const stats = [
    { number: '10M+', label: 'Events Processed' },
    { number: '50K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '25+', label: 'Integrations' }
  ];

  return (
    <section className="py-20 bg-white">
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
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform documents into organized calendar events. 
            Built for teams that value efficiency and accuracy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Teams Worldwide
            </h3>
            <p className="text-blue-100 text-lg">
              Join thousands of organizations saving time with SyncFlow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Integrates with Your Favorite Tools
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
              <Calendar className="h-6 w-6" />
              <span>Google Calendar</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
              <Calendar className="h-6 w-6" />
              <span>Outlook</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
              <FileText className="h-6 w-6" />
              <span>Notion</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
              <Sync className="h-6 w-6" />
              <span>Zapier</span>
            </div>
            <div className="text-gray-500 font-medium">+ 20 more</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;