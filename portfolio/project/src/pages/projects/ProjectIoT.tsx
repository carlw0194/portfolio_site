import React from 'react';
import { Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectIoT = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-Time Anomaly Detection in Server Log Data
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Server Monitoring Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Developed a comprehensive system to monitor server logs in real-time to detect anomalies such as security breaches 
              or system failures, enabling faster response from IT teams. The solution provides automated alerting and 
              detailed analytics for system health monitoring.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Generated time-series server log data</li>
                  <li>• CPU usage, memory, and response time metrics</li>
                  <li>• Network traffic and connection logs</li>
                  <li>• Application performance indicators</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Python (Pandas, NumPy, SciPy)</li>
                  <li>• SQL for data processing</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Statistical anomaly detection methods</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>High Volume Processing:</strong> Handling large streams of log data efficiently in real-time</li>
                <li>• <strong>False Positive Reduction:</strong> Minimizing alerts to ensure system credibility with IT teams</li>
                <li>• <strong>Baseline Establishment:</strong> Defining normal behavior patterns across varying workloads</li>
                <li>• <strong>Scalability:</strong> Ensuring the system can handle growing data volumes and server counts</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Walkthrough</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Data Pipeline Setup</h3>
                <p className="text-gray-600">
                  Established a robust data pipeline using Google Cloud Platform to stream log data into a 
                  centralized database, ensuring data integrity and real-time processing capabilities.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Baseline Analysis</h3>
                <p className="text-gray-600">
                  Used statistical methods including Z-scores and moving averages on time-series data to establish 
                  baseline patterns for normal server behavior across different time periods and workloads.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Anomaly Detection Algorithm</h3>
                <p className="text-gray-600">
                  Developed sophisticated algorithms to flag data points that deviate significantly from established 
                  baselines, incorporating machine learning techniques to improve detection accuracy over time.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Alert System Integration</h3>
                <p className="text-gray-600">
                  Implemented automated alerting system with severity levels and escalation procedures, providing 
                  IT teams with actionable information for rapid incident response.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways and Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Detection Speed:</strong> System detects critical issues 5-8 minutes faster than manual monitoring</li>
                <li>• <strong>Accuracy Rate:</strong> Successfully identified 95% of simulated system failure events during testing</li>
                <li>• <strong>False Positive Rate:</strong> Reduced false alarms to less than 3% through algorithm refinement</li>
                <li>• <strong>System Reliability:</strong> 99.7% uptime with automated failover capabilities</li>
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
                View Code & Architecture on GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectIoT;