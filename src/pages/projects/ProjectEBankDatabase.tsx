import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectEBankDatabase = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            E-Bank Database Design, Maintenance and Security
          </h1>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            <img 
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Banking Database Security"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Comprehensive database solution for a digital banking platform requiring the highest levels of 
              security, compliance, and performance. The project encompassed database architecture design, 
              implementation of advanced security measures, and ongoing maintenance procedures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Transparent Data Encryption (TDE)</li>
                  <li>• Column-level encryption for PII</li>
                  <li>• Always Encrypted for sensitive data</li>
                  <li>• Secure key management</li>
                  <li>• Data masking for non-production</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Principle of least privilege</li>
                  <li>• Database firewall rules</li>
                  <li>• Audit trail and monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Monitoring</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Regulatory Compliance:</strong> PCI DSS, SOX, and banking regulations adherence</li>
                <li>• <strong>Audit Logging:</strong> Comprehensive audit trail for all database activities</li>
                <li>• <strong>Real-time Monitoring:</strong> 24/7 security monitoring and alerting</li>
                <li>• <strong>Vulnerability Assessment:</strong> Regular security scans and assessments</li>
                <li>• <strong>Incident Response:</strong> Automated response procedures for security events</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Database Architecture</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High Availability</h3>
                <p className="text-gray-600">Always On Availability Groups with automatic failover, ensuring 99.99% uptime for critical banking operations.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600">Advanced indexing strategies, query optimization, and resource management for sub-second transaction processing.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Disaster Recovery</h3>
                <p className="text-gray-600">Multi-site backup strategy with automated recovery procedures and regular disaster recovery testing.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Security Certification:</strong> Passed all regulatory audits and security assessments</li>
                <li>• <strong>Performance:</strong> Processing 10,000+ transactions per second with <100ms response time</li>
                <li>• <strong>Availability:</strong> Achieved 99.99% uptime over 2+ years of operation</li>
                <li>• <strong>Compliance:</strong> Full compliance with banking regulations and industry standards</li>
                <li>• <strong>Scalability:</strong> Successfully scaled to support 1M+ active users</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                Security Implementation Guide
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Architecture Documentation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
  );
};

export default ProjectEBankDatabase;