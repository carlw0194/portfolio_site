@@ .. @@
 import React from 'react';
-import { ArrowRight, Database, BarChart, Cloud, Code2, Brain, TrendingUp, Award, FileText } from 'lucide-react';
+import { ArrowRight, Database, BarChart, Cloud, Code2, Brain, TrendingUp, Award, FileText, Calendar } from 'lucide-react';
 import { Link } from 'react-router-dom';
 
@@ .. @@
   const skills = [
     {
-      category: 'Data Analysis & Visualization',
-      items: ['SQL', 'Python (Pandas, NumPy)', 'Excel', 'Power BI', 'Seaborn', 'Matplotlib', 'Google Data Analytics', 'Google Sheets'],
+      category: 'Database Administration',
+      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Database Performance Tuning', 'Backup & Recovery', 'Security Management'],
       icon: <BarChart className="h-8 w-8 text-blue-600" />
     },
     {
-      category: 'Databases',
-      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MSSQL', 'Azure SQL'],
+      category: 'Data Integration & Migration',
+      items: ['SSIS', 'Microsoft DMA', 'ETL Processes', 'Data Migration', 'Database Upgrades', 'Cross-Platform Migration'],
       icon: <Database className="h-8 w-8 text-teal-600" />
     },
     {
-      category: 'Cloud & Tools',
-      items: ['Azure', 'SSMS SQL', 'Workbench', 'APIs', 'Beautiful Soup', 'Jupyter Notebook', 'Git & GitHub'],
+      category: 'Analytics & Reporting',
+      items: ['Power BI', 'Python', 'SQL Query Optimization', 'Performance Analysis', 'Dashboard Creation', 'Data Warehousing'],
       icon: <Cloud className="h-8 w-8 text-orange-600" />
     }
   ];
 
   const projects = [
-
     {
       id: 'hospitality',
-      title: 'Kaya Hotel Revenue Analysis',
-      description: 'Comprehensive Power BI analysis of hotel revenue performance, KPIs, and booking patterns for strategic decision-making.',
+      title: 'Manage Any Hotel - Hotel Management Dashboard',
+      description: 'Complete hotel management system with real-time dashboard for reservations, revenue tracking, and operational analytics.',
       image: '/kaya_exec_page.PNG',
       link: '/project/hospitality'
     },
-
-
-
-
+    {
+      id: 'sql-optimization',
+      title: 'Full SQL Server Optimization and Tuning',
+      description: 'Comprehensive SQL Server performance optimization including query tuning, index optimization, and resource management.',
+      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
+      link: '/project/sql-optimization'
+    },
+    {
+      id: 'data-warehouse',
+      title: 'SQL Server Data Warehouse from Scratch',
+      description: 'Built enterprise data warehouse from ground up with ETL processes, dimensional modeling, and reporting infrastructure.',
+      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
+      link: '/project/data-warehouse'
+    },
+    {
+      id: 'loan-analysis',
+      title: 'Loan Analysis in Python and Power BI',
+      description: 'Advanced loan portfolio analysis using Python for data processing and Power BI for interactive dashboards and reporting.',
+      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
+      link: '/project/loan-analysis'
+    },
+    {
+      id: 'sql-migration',
+      title: 'SQL Server Migration: Windows 2008 to 2022',
+      description: 'Complete migration of SQL Server infrastructure from Windows Server 2008 to 2022 with zero downtime and data integrity.',
+      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
+      link: '/project/sql-migration'
+    },
+    {
+      id: 'sql-upgrade',
+      title: 'Backup, Restore and Upgrade MSSQL 7.0',
+      description: 'Legacy system upgrade from SQL Server 7.0 to modern version with comprehensive backup strategy and data preservation.',
+      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
+      link: '/project/sql-upgrade'
+    },
+    {
+      id: 'ebank-database',
+      title: 'E-Bank Database Design, Maintenance and Security',
+      description: 'Secure banking database architecture with advanced security measures, compliance monitoring, and performance optimization.',
+      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
+      link: '/project/ebank-database'
+    }
   ];
 
@@ .. @@
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
-                Data-Driven Insights to Fuel 
-                <span className="text-blue-800 block">Business Growth</span>
+                Database Solutions & 
+                <span className="text-blue-800 block">Data Excellence</span>
               </h1>
               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
-                A passionate Data Analyst specializing in transforming complex datasets into actionable solutions that drive strategic decisions and business success.
+                Experienced Database Administrator and Data Analyst specializing in SQL Server optimization, data migration, and business intelligence solutions that drive organizational success.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <button
@@ -133,12 +168,19 @@ const Home = () => {
               </div>
             </div>
-            <div className="relative">
+            <div className="relative flex flex-col items-center">
               <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                 <img 
                   src="/about%20me%20pic.png" 
                   alt="Carlton Njong - Professional headshot"
                   className="w-full h-full object-cover"
                 />
               </div>
+              <div className="mt-6 bg-white p-4 rounded-lg shadow-lg border-2 border-blue-100">
+                <div className="flex items-center space-x-3">
+                  <Calendar className="h-6 w-6 text-blue-800" />
+                  <span className="text-lg font-semibold text-gray-900">4+ Years Experience</span>
+                </div>
+                <p className="text-sm text-gray-600 mt-1">Database Administration & Analytics</p>
+              </div>
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
@@ .. @@
             <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
               <p>
-                My journey into data began with a fascination for finding patterns in everyday life. Transitioning from a background in business operations, I've cultivated a strong foundation in statistical analysis and data interpretation that bridges technical expertise with business acumen.
+                My journey into database administration began with a passion for organizing and optimizing data systems. With over 4 years of hands-on experience, I've specialized in SQL Server environments, data migration projects, and performance optimization that bridges technical expertise with business requirements.
               </p>
               <p>
-                I am driven by the power of data to tell compelling stories and uncover insights that drive strategic decisions. I thrive on the challenge of dissecting complex problems and presenting findings in clear, actionable formats that stakeholders can immediately understand and implement.
+                I am driven by the challenge of building robust, scalable database solutions that ensure data integrity, optimal performance, and business continuity. My expertise spans from legacy system migrations to modern cloud architectures, always focusing on delivering reliable solutions that stakeholders can depend on.
               </p>
             </div>
             <div className="mt-8 inline-flex items-center bg-gradient-to-br from-blue-100 to-teal-100 p-6 rounded-2xl">
               <Brain className="h-12 w-12 text-blue-800 mr-4" />
               <div className="text-left">
                 <h3 className="text-xl font-bold text-gray-900">My Approach</h3>
-                <p className="text-gray-600">Data-driven storytelling that transforms numbers into narratives</p>
+                <p className="text-gray-600">Reliable database solutions that ensure business continuity and growth</p>
               </div>
             </div>
           </div>
@@ .. @@
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
-            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>
-            <p className="text-xl text-gray-600">My technical toolkit for transforming data into insights</p>
+            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
+            <p className="text-xl text-gray-600">Comprehensive database and analytics solutions for your business</p>
           </div>
           
-          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
+            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
+              <Database className="h-8 w-8 text-blue-600 mb-4" />
+              <h3 className="text-lg font-bold text-gray-900 mb-3">Responsive Dashboard Creation and Maintenance</h3>
+              <p className="text-gray-600 text-sm">Interactive dashboards and reports that adapt to your business needs with real-time data visualization.</p>
+            </div>
+            
+            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
+              <TrendingUp className="h-8 w-8 text-teal-600 mb-4" />
+              <h3 className="text-lg font-bold text-gray-900 mb-3">SQL Server Performance Analysis</h3>
+              <p className="text-gray-600 text-sm">Comprehensive performance monitoring and optimization to ensure your databases run at peak efficiency.</p>
+            </div>
+            
+            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
+              <Code2 className="h-8 w-8 text-orange-600 mb-4" />
+              <h3 className="text-lg font-bold text-gray-900 mb-3">SQL Query Optimization</h3>
+              <p className="text-gray-600 text-sm">Expert query tuning and optimization to improve response times and reduce resource consumption.</p>
+            </div>
+            
+            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
+              <Cloud className="h-8 w-8 text-purple-600 mb-4" />
+              <h3 className="text-lg font-bold text-gray-900 mb-3">SSIS Data Integration</h3>
+              <p className="text-gray-600 text-sm">Seamless data integration solutions using SQL Server Integration Services for ETL processes.</p>
+            </div>
+            
+            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
+              <ArrowRight className="h-8 w-8 text-green-600 mb-4" />
+              <h3 className="text-lg font-bold text-gray-900 mb-3">Microsoft DMA Data Migration</h3>
+              <p className="text-gray-600 text-sm">Safe and efficient database migrations using Microsoft Data Migration Assistant with minimal downtime.</p>
+            </div>
+            
+            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
+              <Brain className="h-8 w-8 text-red-600 mb-4" />
+              <h3 className="text-lg font-bold text-gray-900 mb-3">Database Health Checks and Monitoring</h3>
+              <p className="text-gray-600 text-sm">Proactive monitoring and health assessments to prevent issues and ensure optimal database performance.</p>
+            </div>
+          </div>
+          
+          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             {skills.map((skill, index) => (
@@ .. @@
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
-            <p className="text-xl text-gray-600">Real-world solutions across diverse industries</p>
+            <p className="text-xl text-gray-600">View My Work - Real-world database and analytics solutions</p>
           </div>
           
-          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
+          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
             {projects.map((project, index) => (