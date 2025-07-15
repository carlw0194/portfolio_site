import React from 'react';
import { ArrowLeft, Mail, MapPin, Briefcase, GraduationCap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const CV = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* CV Container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-800 text-white p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                <img 
                  src="/about%20me%20pic.png" 
                  alt="Carlton Njong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">Carlton Njong</h1>
                <h2 className="text-xl text-blue-100 mb-4">Data Analyst</h2>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  njongsark@gmail.com
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Cyprus
                </div>
              </div>
              <div className="flex-shrink-0">
                <a href="/Carlton%20Njong_printful_resume.pdf" download className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-800 pb-2">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Microsoft certified Data Analyst with hands-on experience in Power BI, Excel, and SQL. Proficient in transforming complex datasets into clear narratives using Power BI, SQL, and Excel. Experience includes creating performance dashboards, automating reports, and supporting large-scale data migrations. Combines technical expertise with 3 years of experience as an instructor, demonstrating strong communication, presentation, and collaboration skills.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-800 pb-2 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                Professional Experience
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Data Analyst | HighUpWeb, Yaoundé | 2017 – 2019</h4>
                  <ul className="text-gray-700 list-disc ml-6 space-y-1">
                    <li>Collected, cleaned, and interpreted data on student enrollment and performance outcomes to support educational program improvements.</li>
                    <li>Designed and maintained Power BI dashboards to track customer orders, project timelines, and satisfaction scores for website development clients.</li>
                    <li>Generated regular reports for senior management using T-SQL and Excel to summarize financial performance, customer retention, and key operational KPIs.</li>
                    <li>Collaborated with marketing teams to evaluate lead generation campaigns, providing actionable insights that informed strategy.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-800 pb-2 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Education
              </h3>
              <p className="text-gray-700">BSc Computer Engineering, Cyprus International University | September 2019 – June 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;