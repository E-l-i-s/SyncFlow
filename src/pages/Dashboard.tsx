import React, { useState } from 'react';
import { 
  Calendar, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Filter,
  Search,
  Download,
  Trash2,
  Edit3
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const stats = [
    {
      name: 'Documents Processed',
      value: '127',
      change: '+12%',
      changeType: 'positive',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      name: 'Events Created',
      value: '1,284',
      change: '+18%',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      name: 'Time Saved',
      value: '24.5h',
      change: '+8%',
      changeType: 'positive',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      name: 'Success Rate',
      value: '98.2%',
      change: '+0.5%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'bg-orange-500'
    }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: 'Q4 Meeting Schedule.pdf',
      status: 'completed',
      events: 12,
      uploadedAt: '2 hours ago',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Project Timeline.docx',
      status: 'processing',
      events: 0,
      uploadedAt: '5 minutes ago',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Conference Agenda.xlsx',
      status: 'completed',
      events: 8,
      uploadedAt: '1 day ago',
      size: '3.2 MB'
    },
    {
      id: 4,
      name: 'Team Calendar.txt',
      status: 'failed',
      events: 0,
      uploadedAt: '2 days ago',
      size: '0.5 MB'
    }
  ];

  const recentEvents = [
    {
      id: 1,
      title: 'Team Standup',
      date: 'Dec 15, 2024',
      time: '9:00 AM',
      calendar: 'Google Calendar',
      status: 'synced'
    },
    {
      id: 2,
      title: 'Client Presentation',
      date: 'Dec 16, 2024',
      time: '2:00 PM',
      calendar: 'Outlook',
      status: 'synced'
    },
    {
      id: 3,
      title: 'Project Review',
      date: 'Dec 18, 2024',
      time: '10:30 AM',
      calendar: 'Notion',
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'synced':
        return 'bg-green-100 text-green-800';
      case 'processing':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your documents and events.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-2 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
              <Plus className="h-6 w-6 text-gray-400 group-hover:text-blue-500 mr-2" />
              <span className="text-gray-600 group-hover:text-blue-600 font-medium">
                Upload Document
              </span>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="h-6 w-6 text-gray-400 mr-2" />
              <span className="text-gray-600 font-medium">View Calendar</span>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="h-6 w-6 text-gray-400 mr-2" />
              <span className="text-gray-600 font-medium">Export Events</span>
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Search className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Filter className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <FileText className="h-8 w-8 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
                        <p className="text-sm text-gray-500">
                          {doc.size} • {doc.uploadedAt}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                        {doc.events > 0 && (
                          <p className="text-sm text-gray-500 mt-1">
                            {doc.events} events extracted
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600 rounded">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {event.date} at {event.time}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{event.calendar}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;