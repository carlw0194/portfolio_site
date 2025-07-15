import React from 'react';
import { ArrowRight, Database, BarChart, Cloud, Code2, Brain, TrendingUp, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      category: 'Data Analysis & Visualization',
      items: ['SQL', 'Python (Pandas, NumPy)', 'Excel', 'Power BI', 'Seaborn', 'Matplotlib', 'Google Data Analytics', 'Google Sheets'],
      icon: <BarChart className="h-8 w-8 text-blue-600" />
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MSSQL', 'Azure SQL'],
      icon: <Database className="h-8 w-8 text-teal-600" />
    },
    {
      category: 'Cloud & Tools',
      items: ['Azure', 'SSMS SQL', 'Workbench', 'APIs', 'Beautiful Soup', 'Jupyter Notebook', 'Git & GitHub'],
      icon: <Cloud className="h-8 w-8 text-orange-600" />
    }
  ];

  const projects = [

    {
      id: 'hospitality',
      title: 'Kaya Hotel Revenue Analysis',
      description: 'Comprehensive Power BI analysis of hotel revenue performance, KPIs, and booking patterns for strategic decision-making.',
      image: '/kaya_exec_page.PNG',
      link: '/project/hospitality'
    },




  ];

  const testimonials = [
    {
      quote: "Exceptional analytical skills combined with clear communication. The insights provided were instrumental in our strategic decision-making process.",
      name: "Sarah Johnson",
      title: "Product Manager, TechCorp"
    },
    {
      quote: "Outstanding work on our data visualization project. The dashboards created have transformed how we monitor our business metrics.",
      name: "Michael Chen",
      title: "Director of Operations, DataFlow Inc"
    },
    {
      quote: "A true professional who delivers actionable insights from complex datasets. Highly recommended for any data analysis project.",
      name: "Emily Rodriguez",
      title: "VP of Strategy, Analytics Pro"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Data-Driven Insights to Fuel 
                <span className="text-blue-800 block">Business Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate Data Analyst specializing in transforming complex datasets into actionable solutions that drive strategic decisions and business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToProjects}
                  className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <Link
                  to="/cv"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FileText className="h-5 w-5" />
                  <span>View CV</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/about%20me%20pic.png" 
                  alt="Carlton Njong - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                My journey into data began with a fascination for finding patterns in everyday life. Transitioning from a background in business operations, I've cultivated a strong foundation in statistical analysis and data interpretation that bridges technical expertise with business acumen.
              </p>
              <p>
                I am driven by the power of data to tell compelling stories and uncover insights that drive strategic decisions. I thrive on the challenge of dissecting complex problems and presenting findings in clear, actionable formats that stakeholders can immediately understand and implement.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center bg-gradient-to-br from-blue-100 to-teal-100 p-6 rounded-2xl">
              <Brain className="h-12 w-12 text-blue-800 mr-4" />
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">My Approach</h3>
                <p className="text-gray-600">Data-driven storytelling that transforms numbers into narratives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-xl text-gray-600">My technical toolkit for transforming data into insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-xl text-gray-600">Professional credentials and achievements</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
              <div className="flex items-center mb-6">
                <Award className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Microsoft Power BI Data Analyst Associate</h3>
                  <p className="text-gray-600">PL-300 Certification</p>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2">Date Issued:</p>
                <p className="font-semibold text-gray-900">June 2025</p>
              </div>
              <div className="mt-4">
                <img 
                  src="/PL300.PNG" 
                  alt="Microsoft Power BI PL-300 Certification Badge"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <p className="text-xl text-gray-600">Real-world solutions across diverse industries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <Link 
                    to={project.link}
                    className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-900 transition-colors duration-200"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Others Say</h2>
            <p className="text-xl text-gray-600">Client testimonials and recommendations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl text-blue-800 mb-4">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;