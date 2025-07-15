import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectWebAnalytics = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            E-commerce Funnel Conversion Rate Optimization
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="E-commerce Analytics Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Analyzed user behavior data from an e-commerce website to identify drop-off points in the customer journey 
              and recommend A/B tests to improve the overall conversion rate. The project focused on optimizing the complete 
              sales funnel from product discovery to purchase completion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Google Analytics demo account data</li>
                  <li>• User session recordings and heatmaps</li>
                  <li>• Customer feedback and survey data</li>
                  <li>• A/B testing results from previous campaigns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Google Analytics 4</li>
                  <li>• Google Sheets for data manipulation</li>
                  <li>• Python for advanced analysis</li>
                  <li>• Statistical significance testing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>User Journey Mapping:</strong> Stitching together user sessions to create complete customer journey views</li>
                <li>• <strong>Attribution Modeling:</strong> Correctly attributing conversions to appropriate marketing channels</li>
                <li>• <strong>Cross-Device Tracking:</strong> Following users across multiple devices and platforms</li>
                <li>• <strong>Statistical Significance:</strong> Ensuring adequate sample sizes for reliable A/B test results</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Walkthrough</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Funnel Analysis Setup</h3>
                <p className="text-gray-600">
                  Created comprehensive conversion funnel in Google Analytics tracking the complete user journey 
                  from landing page to purchase completion, identifying key conversion points.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Behavior Flow Analysis</h3>
                <p className="text-gray-600">
                  Analyzed user flow and behavior reports to pinpoint pages with highest exit rates and identify 
                  patterns in user navigation that lead to successful conversions.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Segmentation Analysis</h3>
                <p className="text-gray-600">
                  Segmented data by device type, traffic source, and user demographics to identify specific 
                  problem areas and optimization opportunities for different user groups.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Optimization Recommendations</h3>
                <p className="text-gray-600">
                  Developed data-driven recommendations for A/B tests and UX improvements based on identified 
                  bottlenecks and user behavior patterns.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways and Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Mobile Checkout Issue:</strong> 60% drop-off rate on checkout page for mobile users</li>
                <li>• <strong>Traffic Source Performance:</strong> Organic search traffic shows 35% higher conversion rates</li>
                <li>• <strong>Cart Abandonment:</strong> Average cart abandonment rate of 68% with recovery opportunity</li>
                <li>• <strong>Optimization Potential:</strong> Simplified mobile checkout could increase overall conversion by 3%</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Links</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Full Analysis Report
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectWebAnalytics;