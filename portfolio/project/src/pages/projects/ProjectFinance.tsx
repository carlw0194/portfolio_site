import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectFinance = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Risk Assessment for Loan Applications
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Financial Risk Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A comprehensive project aimed at developing a machine learning model to assess the credit risk of loan applicants, 
              helping to minimize default rates for a financial institution. The solution provides automated risk scoring 
              and actionable insights for loan officers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Simulated loan application dataset (CSV)</li>
                  <li>• Customer credit history</li>
                  <li>• Financial statements and income data</li>
                  <li>• Employment verification records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Python (Pandas, Scikit-learn)</li>
                  <li>• Jupyter Notebook</li>
                  <li>• Power BI for visualization</li>
                  <li>• SQL for data preprocessing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Imbalanced Dataset:</strong> Significantly more non-defaulters than defaulters in the training data</li>
                <li>• <strong>Feature Selection:</strong> Identifying the most predictive variables without introducing bias</li>
                <li>• <strong>Regulatory Compliance:</strong> Ensuring the model meets fair lending practices and regulations</li>
                <li>• <strong>Model Interpretability:</strong> Creating explainable predictions for loan officers</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Walkthrough</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Data Cleaning and Preprocessing</h3>
                <p className="text-gray-600">
                  Handled missing values, outliers, and inconsistent data formats. Implemented feature engineering 
                  to create meaningful variables such as debt-to-income ratios and credit utilization metrics.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Exploratory Data Analysis</h3>
                <p className="text-gray-600">
                  Conducted comprehensive EDA to identify key predictors of default, including income stability, 
                  credit history length, and existing debt obligations. Visualized correlations and distributions.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Model Development</h3>
                <p className="text-gray-600">
                  Built and compared multiple models including Logistic Regression, Random Forest, and Gradient Boosting. 
                  Used SMOTE to handle class imbalance and cross-validation for robust performance evaluation.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Dashboard Creation</h3>
                <p className="text-gray-600">
                  Developed an interactive Power BI dashboard displaying risk scores, key performance indicators, 
                  and decision support tools for loan officers to make informed decisions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways and Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Model Performance:</strong> Achieved 87% accuracy with 82% precision for identifying high-risk applicants</li>
                <li>• <strong>Top Risk Indicators:</strong> Debt-to-income ratio, credit history length, employment stability, and existing loan performance</li>
                <li>• <strong>Business Impact:</strong> Potential 23% reduction in default rates while maintaining approval rates</li>
                <li>• <strong>ROI:</strong> Estimated annual savings of $2.3M through improved risk assessment</li>
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
                View on GitHub
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Interact with Dashboard
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectFinance;