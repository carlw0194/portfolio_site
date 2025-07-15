import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectHR = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Predicting Employee Attrition to Improve Retention
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="HR Analytics Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To proactively address employee turnover, I built a predictive model that identifies employees at high risk 
              of leaving the company. This analytical solution helps HR teams focus retention efforts on vulnerable talent 
              and develop targeted intervention strategies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• IBM HR Analytics employee dataset</li>
                  <li>• Employee satisfaction survey results</li>
                  <li>• Performance review data</li>
                  <li>• Compensation and benefits information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Python (Pandas, Scikit-learn)</li>
                  <li>• Tableau for interactive dashboards</li>
                  <li>• Random Forest classification</li>
                  <li>• Feature importance analysis</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Ethical Considerations:</strong> Ensuring the model respects employee privacy and doesn't create bias</li>
                <li>• <strong>Fair Variables:</strong> Using only appropriate, non-discriminatory factors in predictions</li>
                <li>• <strong>Model Interpretability:</strong> Making predictions explainable for HR decision-making</li>
                <li>• <strong>Class Imbalance:</strong> More retained employees than those who left in historical data</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Walkthrough</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Exploratory Data Analysis</h3>
                <p className="text-gray-600">
                  Conducted comprehensive EDA to understand correlations between job satisfaction, compensation, 
                  work-life balance, and attrition patterns across different departments and roles.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Feature Engineering</h3>
                <p className="text-gray-600">
                  Created meaningful derived variables such as tenure ratios, promotion frequency, and satisfaction 
                  indices to enhance model predictive power while maintaining fairness.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Model Development</h3>
                <p className="text-gray-600">
                  Built and tuned a Random Forest classifier to predict attrition likelihood, using cross-validation 
                  to ensure robust performance and feature importance analysis for interpretability.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Interactive Dashboard</h3>
                <p className="text-gray-600">
                  Created a Tableau dashboard for HR managers to explore attrition risk factors, filter by department, 
                  and identify high-risk employees for targeted retention efforts.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways and Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Top Predictors:</strong> Overtime frequency and distance from home are strongest attrition indicators</li>
                <li>• <strong>Satisfaction Impact:</strong> Job satisfaction scores below 2.5/5 show 73% attrition risk</li>
                <li>• <strong>Compensation Factor:</strong> Employees earning below market rate 40% more likely to leave</li>
                <li>• <strong>ROI Potential:</strong> Focused retention efforts could save $1.2M annually in recruitment costs</li>
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
                See the Dashboard
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectHR;