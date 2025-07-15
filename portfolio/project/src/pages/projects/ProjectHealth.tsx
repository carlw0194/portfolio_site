import React from 'react';
import { Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectHealth = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Analysis of Patient Readmission Rates
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Healthcare Data Analysis"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              This project analyzes electronic health records (EHR) to identify the key factors contributing to hospital 
              patient readmissions within 30 days of discharge. The goal was to help healthcare providers develop targeted 
              interventions to reduce readmission rates and improve patient outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• De-identified patient medical records</li>
                  <li>• Diagnosis and procedure codes (ICD-10)</li>
                  <li>• Medication history and prescriptions</li>
                  <li>• Patient demographics and social factors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Python (Pandas, NumPy)</li>
                  <li>• Matplotlib and Seaborn for visualization</li>
                  <li>• Jupyter Notebook</li>
                  <li>• SQL for data extraction</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Patient Privacy:</strong> Ensuring HIPAA compliance and data de-identification throughout analysis</li>
                <li>• <strong>Medical Terminology:</strong> Working with complex medical coding systems and terminology</li>
                <li>• <strong>Data Quality:</strong> Handling missing values and inconsistent data entry in medical records</li>
                <li>• <strong>Multiple Comorbidities:</strong> Analyzing patients with multiple simultaneous conditions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Walkthrough</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Data Preprocessing</h3>
                <p className="text-gray-600">
                  Cleaned and standardized EHR data, handled missing values, and created derived variables such as 
                  length of stay, number of procedures, and comorbidity indices.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Exploratory Data Analysis</h3>
                <p className="text-gray-600">
                  Performed comprehensive EDA to understand relationships between patient demographics, diagnoses, 
                  medications, and readmission status. Used statistical tests to validate hypotheses.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Statistical Analysis</h3>
                <p className="text-gray-600">
                  Conducted chi-square tests, t-tests, and correlation analysis to identify significant predictors 
                  of readmission. Used logistic regression to quantify the impact of various factors.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Visualization and Reporting</h3>
                <p className="text-gray-600">
                  Created comprehensive visualizations using Matplotlib and Seaborn to communicate findings 
                  effectively to healthcare stakeholders and administrators.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways and Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>High-Risk Conditions:</strong> Patients with diabetes and heart failure show 2.3x higher readmission rates</li>
                <li>• <strong>Prior Hospitalizations:</strong> Patients with 3+ hospitalizations in the past year have 65% readmission risk</li>
                <li>• <strong>Medication Adherence:</strong> Poor medication compliance increases readmission risk by 40%</li>
                <li>• <strong>Social Determinants:</strong> Patients with limited social support show 28% higher readmission rates</li>
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
                Explore the Code on GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectHealth;