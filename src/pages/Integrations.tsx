import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Plus, 
  Settings,
  ExternalLink,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Clock,
  Users,
  FileText,
  Database
} from 'lucide-react';
import { motion } from 'framer-motion';

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations', count: 25 },
    { id: 'calendar', name: 'Calendar', count: 8 },
    { id: 'productivity', name: 'Productivity', count: 7 },
    { id: 'communication', name: 'Communication', count: 5 },
    { id: 'storage', name: 'Storage', count: 5 }
  ];

  const integrations = [
    {
      id: 'google-calendar',
      name: 'Google Calendar',
      description: 'Sync events directly to your Google Calendar with real-time updates',
      icon: Calendar,
      category: 'calendar',
      connected: true,
      popular: true,
      color: 'bg-blue-500'
    },
    {
      id: 'outlook',
      name: 'Microsoft Outlook',
      description: 'Seamlessly integrate with Outlook Calendar and Exchange',
      icon: Calendar,
      category: 'calendar',
      connected: true,
      popular: true,
      color: 'bg-blue-600'
    },
    {
      id: 'notion',
      name: 'Notion',
      description: 'Create database entries and calendar events in your Notion workspace',
      icon: FileText,
      category: 'productivity',
      connected: false,
      popular: true,
      color: 'bg-gray-800'
    },
    {
      id: 'apple-calendar',
      name: 'Apple Calendar',
      description: 'Sync with iCloud Calendar across all your Apple devices',
      icon: Calendar,
      category: 'calendar',
      connected: false,
      popular: false,
      color: 'bg-gray-600'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Send event notifications and reminders to Slack channels',
      icon: Users,
      category: 'communication',
      connected: true,
      popular: false,
      color: 'bg-purple-600'
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      description: 'Create Teams meetings and send calendar invitations',
      icon: Users,
      category: 'communication',
      connected: false,
      popular: false,
      color: 'bg-blue-700'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Connect to 5000+ apps through Zapier automation workflows',
      icon: Zap,
      category: 'productivity',
      connected: false,
      popular: true,
      color: 'bg-orange-500'
    },
    {
      id: 'airtable',
      name: 'Airtable',
      description: 'Store extracted events in Airtable bases with custom fields',
      icon: Database,
      category: 'productivity',
      connected: false,
      popular: false,
      color: 'bg-yellow-600'
    },
    {
      id: 'trello',
      name: 'Trello',
      description: 'Create Trello cards with due dates from extracted events',
      icon: FileText,
      category: 'productivity',
      connected: false,
      popular: false,
      color: 'bg-blue-500'
    },
    {
      id: 'asana',
      name: 'Asana',
      description: 'Convert events into Asana tasks with deadlines and assignments',
      icon: CheckCircle,
      category: 'productivity',
      connected: false,
      popular: false,
      color: 'bg-pink-500'
    }
  ];

  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);

  const connectedCount = integrations.filter(integration => integration.connected).length;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Integrations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect SyncFlow with your favorite tools and platforms. 
            Sync events automatically across all your workflows.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{connectedCount}</div>
            <div className="text-sm text-gray-600">Connected</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">5000+</div>
            <div className="text-sm text-gray-600">Via Zapier</div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${integration.color}`}>
                    <integration.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      {integration.name}
                      {integration.popular && (
                        <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </h3>
                  </div>
                </div>
                {integration.connected && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {integration.description}
              </p>

              <div className="flex items-center justify-between">
                {integration.connected ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Connected</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">Not connected</span>
                )}

                <div className="flex items-center space-x-2">
                  {integration.connected ? (
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Settings className="h-4 w-4" />
                    </button>
                  ) : (
                    <button className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      <Plus className="h-4 w-4 mr-1" />
                      Connect
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't see your favorite tool? We offer custom integrations for Enterprise customers. 
            Our team can build connections to any platform with an API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Request Integration
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              View API Docs
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-xl mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-time Sync</h3>
            <p className="text-gray-600 text-sm">
              Events are synced instantly across all connected platforms with real-time updates.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-3 bg-green-100 text-green-600 rounded-xl mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Reliable & Secure</h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade security with OAuth 2.0 authentication and encrypted data transfer.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-3 bg-purple-100 text-purple-600 rounded-xl mb-4">
              <Settings className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Customizable</h3>
            <p className="text-gray-600 text-sm">
              Configure sync settings, field mappings, and automation rules for each integration.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Integrations;