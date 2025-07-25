import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSQLUpgrade = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Backup, Restore and Upgrade MSSQL 7.0
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Legacy System Upgrade"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Critical legacy system upgrade project involving the migration of a mission-critical SQL Server 7.0 
              database to a modern SQL Server environment. The project required careful planning to preserve 
              20+ years of historical data while ensuring business continuity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Legacy Compatibility:</strong> SQL Server 7.0 format incompatible with modern versions</li>
                <li>• <strong>Data Integrity:</strong> Ensuring 20+ years of critical business data remains intact</li>
                <li>• <strong>Obsolete Features:</strong> Deprecated functions and syntax requiring modernization</li>
                <li>• <strong>Hardware Constraints:</strong> Original hardware no longer supported or available</li>
                <li>• <strong>Business Continuity:</strong> Zero tolerance for data loss in production environment</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Upgrade Strategy</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Data Extraction</h3>
                <p className="text-gray-600">Created comprehensive backup strategy using SQL Server 7.0 native tools and custom scripts to extract all data, schema, and objects.</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Intermediate Migration</h3>
                <p className="text-gray-600">Staged upgrade through intermediate SQL Server versions to ensure compatibility and data integrity throughout the process.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Code Modernization</h3>
                <p className="text-gray-600">Updated deprecated T-SQL syntax, stored procedures, and database objects to comply with modern SQL Server standards.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Validation and Testing</h3>
                <p className="text-gray-600">Extensive testing and validation to ensure data accuracy, application compatibility, and performance optimization.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Outcomes</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Data Preservation:</strong> 100% of historical data successfully migrated and validated</li>
                <li>• <strong>Performance Gains:</strong> 300% improvement in query performance on modern hardware</li>
                <li>• <strong>Security Enhancement:</strong> Modern security features and encryption capabilities</li>
                <li>• <strong>Maintenance Reduction:</strong> 60% reduction in database maintenance overhead</li>
                <li>• <strong>Future Compatibility:</strong> Platform ready for continued growth and modernization</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Documentation</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                Migration Scripts & Tools
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Upgrade Documentation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectSQLUpgrade;