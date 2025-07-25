import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectLoanAnalysis = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loan Analysis in Python and Power BI
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Loan Analysis Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Comprehensive loan portfolio analysis combining Python's analytical capabilities with Power BI's 
              visualization power to assess credit risk, identify trends, and provide actionable insights 
              for lending decisions and portfolio management.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Python Analysis</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Data cleaning and preprocessing</li>
                  <li>• Statistical analysis and modeling</li>
                  <li>• Risk scoring algorithms</li>
                  <li>• Predictive analytics</li>
                  <li>• Performance metrics calculation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Power BI Dashboards</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Interactive loan portfolio overview</li>
                  <li>• Risk assessment visualizations</li>
                  <li>• Trend analysis and forecasting</li>
                  <li>• Performance KPI tracking</li>
                  <li>• Regulatory compliance reporting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Risk Identification:</strong> Developed predictive model with 87% accuracy for default prediction</li>
                <li>• <strong>Portfolio Optimization:</strong> Identified opportunities to reduce risk by 23%</li>
                <li>• <strong>Trend Analysis:</strong> Discovered seasonal patterns affecting loan performance</li>
                <li>• <strong>Automated Reporting:</strong> Reduced manual reporting time by 70%</li>
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
                Python Analysis Code
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Power BI Dashboard
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectLoanAnalysis;