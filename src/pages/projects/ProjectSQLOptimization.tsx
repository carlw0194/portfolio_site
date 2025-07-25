import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSQLOptimization = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Full SQL Server Optimization and Tuning
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="SQL Server Performance Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Comprehensive SQL Server performance optimization project for a large enterprise system experiencing 
              significant performance degradation. The project involved complete database health assessment, 
              query optimization, index tuning, and resource management to achieve optimal performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization Areas</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Query performance tuning</li>
                  <li>• Index optimization and maintenance</li>
                  <li>• Memory and CPU resource management</li>
                  <li>• I/O subsystem optimization</li>
                  <li>• Database configuration tuning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• SQL Server Management Studio</li>
                  <li>• SQL Server Profiler</li>
                  <li>• Database Engine Tuning Advisor</li>
                  <li>• Performance Monitor (PerfMon)</li>
                  <li>• Custom T-SQL scripts</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Query Performance:</strong> Achieved 75% improvement in average query response time</li>
                <li>• <strong>Resource Utilization:</strong> Reduced CPU usage by 40% during peak hours</li>
                <li>• <strong>Index Optimization:</strong> Eliminated 60% of unused indexes and optimized remaining ones</li>
                <li>• <strong>System Stability:</strong> Reduced timeout errors by 90% and improved overall reliability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Links</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View Optimization Scripts
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Performance Report
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectSQLOptimization;