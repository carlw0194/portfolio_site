import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDataWarehouse = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SQL Server Data Warehouse from Scratch
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Data Warehouse Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Built a complete enterprise data warehouse solution from the ground up using SQL Server, 
              implementing dimensional modeling, ETL processes, and comprehensive reporting infrastructure 
              to support business intelligence and analytics across multiple departments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture & Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Multiple OLTP systems</li>
                  <li>• External APIs and web services</li>
                  <li>• Flat files and Excel imports</li>
                  <li>• Third-party applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• SQL Server Database Engine</li>
                  <li>• SQL Server Integration Services (SSIS)</li>
                  <li>• SQL Server Analysis Services (SSAS)</li>
                  <li>• SQL Server Reporting Services (SSRS)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Dimensional Modeling:</strong> Star schema design with fact and dimension tables</li>
                <li>• <strong>ETL Processes:</strong> Automated data extraction, transformation, and loading</li>
                <li>• <strong>Data Quality:</strong> Comprehensive validation and cleansing procedures</li>
                <li>• <strong>Historical Tracking:</strong> Slowly changing dimensions and data lineage</li>
                <li>• <strong>Performance:</strong> Optimized for analytical queries and reporting</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Impact</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Reporting Efficiency:</strong> Reduced report generation time by 80%</li>
                <li>• <strong>Data Consistency:</strong> Single source of truth for all business metrics</li>
                <li>• <strong>Decision Making:</strong> Enabled real-time business intelligence and analytics</li>
                <li>• <strong>Scalability:</strong> Designed to handle 10x current data volume</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDataWarehouse;