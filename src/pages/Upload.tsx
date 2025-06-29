import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { 
  Upload as UploadIcon, 
  FileText, 
  File,
  X,
  CheckCircle,
  AlertCircle,
  Zap,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadedFile {
  id: string;
  file: File;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  events?: number;
  error?: string;
}

const Upload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: 'uploading' as const,
      progress: 0
    }));

    setFiles(prev => [...prev, ...newFiles]);

    // Simulate upload and processing
    newFiles.forEach(uploadedFile => {
      simulateFileProcessing(uploadedFile.id);
    });
  }, []);

  const simulateFileProcessing = (fileId: string) => {
    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setFiles(prev => prev.map(file => {
        if (file.id === fileId && file.status === 'uploading') {
          const newProgress = Math.min(file.progress + 10, 100);
          if (newProgress === 100) {
            clearInterval(uploadInterval);
            setTimeout(() => {
              setFiles(prev => prev.map(f => 
                f.id === fileId 
                  ? { ...f, status: 'processing', progress: 0 }
                  : f
              ));
              simulateAIProcessing(fileId);
            }, 500);
          }
          return { ...file, progress: newProgress };
        }
        return file;
      }));
    }, 200);
  };

  const simulateAIProcessing = (fileId: string) => {
    const processingInterval = setInterval(() => {
      setFiles(prev => prev.map(file => {
        if (file.id === fileId && file.status === 'processing') {
          const newProgress = Math.min(file.progress + 15, 100);
          if (newProgress === 100) {
            clearInterval(processingInterval);
            setTimeout(() => {
              setFiles(prev => prev.map(f => 
                f.id === fileId 
                  ? { 
                      ...f, 
                      status: Math.random() > 0.1 ? 'completed' : 'error',
                      events: Math.random() > 0.1 ? Math.floor(Math.random() * 20) + 1 : undefined,
                      error: Math.random() > 0.1 ? undefined : 'Failed to extract events from document'
                    }
                  : f
              ));
            }, 500);
          }
          return { ...file, progress: newProgress };
        }
        return file;
      }));
    }, 300);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/plain': ['.txt'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    maxSize: 50 * 1024 * 1024 // 50MB
  });

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return <FileText className="h-8 w-8 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FileText className="h-8 w-8 text-blue-500" />;
      case 'xls':
      case 'xlsx':
        return <FileText className="h-8 w-8 text-green-500" />;
      case 'ppt':
      case 'pptx':
        return <FileText className="h-8 w-8 text-orange-500" />;
      case 'txt':
        return <FileText className="h-8 w-8 text-gray-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'processing':
        return <Zap className="h-5 w-5 text-purple-500 animate-pulse" />;
      default:
        return <UploadIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload Documents</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your documents and let AI extract calendar events automatically. 
            Supports PDF, Word, Excel, PowerPoint, and more.
          </p>
        </div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
              isDragActive
                ? 'border-blue-500 bg-blue-50 scale-105'
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <UploadIcon className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {isDragActive ? 'Drop files here' : 'Upload your documents'}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Drag and drop files here, or click to browse
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">PDF</span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">Word</span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium">Excel</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">PowerPoint</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">Text</span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full font-medium">Images</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Maximum file size: 50MB per file
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* File List */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">
                  Processing Files ({files.length})
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {files.map((uploadedFile) => (
                  <motion.div
                    key={uploadedFile.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {getFileIcon(uploadedFile.file.name)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {uploadedFile.file.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(uploadedFile.status)}
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {uploadedFile.status === 'processing' ? 'AI Processing' : uploadedFile.status}
                          </span>
                        </div>
                        
                        {uploadedFile.status === 'completed' && uploadedFile.events && (
                          <div className="flex items-center space-x-1 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            <Calendar className="h-4 w-4" />
                            <span>{uploadedFile.events} events found</span>
                          </div>
                        )}
                        
                        <button
                          onClick={() => removeFile(uploadedFile.id)}
                          className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    {(uploadedFile.status === 'uploading' || uploadedFile.status === 'processing') && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>
                            {uploadedFile.status === 'uploading' ? 'Uploading...' : 'AI extracting events...'}
                          </span>
                          <span>{uploadedFile.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-300 ${
                              uploadedFile.status === 'uploading' 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                                : 'bg-gradient-to-r from-purple-500 to-purple-600'
                            }`}
                            style={{ width: `${uploadedFile.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Error Message */}
                    {uploadedFile.status === 'error' && uploadedFile.error && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-700">{uploadedFile.error}</p>
                      </div>
                    )}
                    
                    {/* Success Actions */}
                    {uploadedFile.status === 'completed' && (
                      <div className="mt-4 flex items-center space-x-3">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                          <Calendar className="h-4 w-4 mr-2" />
                          View Events
                        </button>
                        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-sm font-medium rounded-lg text-white hover:bg-blue-700 transition-colors">
                          <Clock className="h-4 w-4 mr-2" />
                          Sync to Calendar
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Tips for Better AI Extraction
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Include clear dates and times in your documents</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Use consistent date formats (MM/DD/YYYY or DD/MM/YYYY)</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Mention locations and attendees for better context</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Ensure text is clear and readable (avoid low-quality scans)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Upload;