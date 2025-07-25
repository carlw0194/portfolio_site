import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSQLMigration = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SQL Server Migration: Windows 2008 to 2022
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Server Migration Process"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Complete migration of critical SQL Server infrastructure from legacy Windows Server 2008 
              environment to modern Windows Server 2022, ensuring zero data loss, minimal downtime, 
              and improved performance while maintaining business continuity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Migration Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Source Environment</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Windows Server 2008 R2</li>
                  <li>• SQL Server 2008 R2</li>
                  <li>• 15 production databases</li>
                  <li>• Legacy applications and services</li>
                  <li>• Custom stored procedures and jobs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Environment</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Windows Server 2022</li>
                  <li>• SQL Server 2022</li>
                  <li>• Enhanced security features</li>
                  <li>• Improved performance capabilities</li>
                  <li>• Modern backup and recovery</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Migration Process</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Assessment and Planning</h3>
                <p className="text-gray-600">Comprehensive analysis of existing environment, compatibility testing, and detailed migration strategy development.</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Infrastructure Preparation</h3>
                <p className="text-gray-600">New server setup, SQL Server installation, security configuration, and network connectivity establishment.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Data Migration</h3>
                <p className="text-gray-600">Database backup, transfer, and restoration with integrity verification and performance optimization.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Testing and Validation</h3>
                <p className="text-gray-600">Comprehensive testing of applications, data integrity verification, and performance validation.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Zero Data Loss:</strong> 100% data integrity maintained throughout migration</li>
                <li>• <strong>Minimal Downtime:</strong> Only 4 hours of planned downtime during weekend</li>
                <li>• <strong>Performance Improvement:</strong> 40% faster query execution on new platform</li>
                <li>• <strong>Enhanced Security:</strong> Modern security features and compliance standards</li>
                <li>• <strong>Future-Ready:</strong> Platform ready for next 10+ years of growth</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                Migration Scripts
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Project Documentation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectSQLMigration;