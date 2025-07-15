import React, { useState } from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const kayaImages = [
  '/kaya_exec_page.PNG',
  '/kaya_operations_page.PNG',
  '/kaya_diagnostics_page.PNG'
];

const ProjectHospitality = () => {
  // Track which image is displayed in the carousel
  const [current, setCurrent] = useState(0);

  // For readability, alias variable
  const images = kayaImages;
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kaya Hotel Revenue Analysis
          </h1>
          {/* Image Carousel */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
            {/* Arrow Button - Prev */}
            <button
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white p-2 rounded-full hover:bg-gray-900/80"
            >
              {/* Unicode arrow for minimal dependency */}
              ‹
            </button>
            {/* Display Current Image */}
            <img
              src={images[current]}
              alt={`Kaya Hotel Dashboard view ${current + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Arrow Button - Next */}
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white p-2 rounded-full hover:bg-gray-900/80"
            >
              ›
            </button>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A comprehensive Power BI project that analyzes the revenue performance of Kaya Hotel Group. 
              The report highlights key metrics such as room revenue, ADR (Average Daily Rate), RevPAR (Revenue per Available Room), 
              occupancy rates, seasonality trends, and booking lead-times, helping management make data-driven decisions to optimize 
              hotel operations and maximize revenue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Performance Indicators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary KPIs</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Total Realized Revenue:</strong> €1.4bn overall hotel revenue</li>
                  <li>• <strong>RevPAR:</strong> €6.06K revenue per available room</li>
                  <li>• <strong>Occupancy Rate:</strong> 57.87% rooms sold vs available</li>
                  <li>• <strong>Average Daily Rate:</strong> €10.47K average price per occupied room</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysis Features</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Booking lead-time distribution analysis</li>
                  <li>• Market segmentation (Corporate, OTA, Direct)</li>
                  <li>• Seasonality & trend decomposition</li>
                  <li>• Geographic revenue distribution by city</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Hotel reservation and booking data</li>
                  <li>• Revenue records by room type and date</li>
                  <li>• Market segment classification data</li>
                  <li>• Geographic and seasonal performance data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Power BI Desktop for dashboard creation</li>
                  <li>• DAX for calculated measures and KPIs</li>
                  <li>• Star schema data modeling</li>
                  <li>• Interactive filtering and drill-down capabilities</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Data Integration:</strong> Combining multiple data sources from different booking platforms and systems</li>
                <li>• <strong>Seasonality Analysis:</strong> Accounting for complex seasonal patterns and local events affecting demand</li>
                <li>• <strong>Market Segmentation:</strong> Accurately categorizing bookings across different customer segments</li>
                <li>• <strong>Performance Optimization:</strong> Ensuring dashboard responsiveness with large datasets</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Walkthrough</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Data Model Design</h3>
                <p className="text-gray-600">
                  Created a star schema data model with fact tables for reservations and revenue linked to dimension 
                  tables for Date, Market Segment, and Room Type. All relationships are single-directional to maintain 
                  data integrity and optimal performance.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. KPI Development</h3>
                <p className="text-gray-600">
                  Developed comprehensive DAX measures for hotel industry standard KPIs including RevPAR, ADR, 
                  occupancy rates, and revenue growth metrics with month-over-month and year-over-year comparisons.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Interactive Dashboard Creation</h3>
                <p className="text-gray-600">
                  Built an executive-level dashboard with interactive slicers for date ranges, market segments, and 
                  room types. Included geographic visualizations, trend analysis, and booking platform performance comparisons.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Performance Analysis</h3>
                <p className="text-gray-600">
                  Conducted deep-dive analysis on booking patterns, lead times, and revenue optimization opportunities. 
                  Identified peak performance periods and underperforming segments for strategic decision-making.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways and Insights</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Revenue Performance:</strong> €1.4bn total realized revenue with 0.51% growth vs last month</li>
                <li>• <strong>Occupancy Insights:</strong> 57.87% occupancy rate with opportunities for improvement during off-peak periods</li>
                <li>• <strong>Market Segmentation:</strong> Leisure segment dominates revenue at 61.6%, followed by business at 38.4%</li>
                <li>• <strong>Booking Patterns:</strong> Weekend bookings show higher ADR, indicating premium pricing opportunities</li>
                <li>• <strong>Geographic Distribution:</strong> Clear revenue concentration in key cities with expansion potential in underperforming markets</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Links</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/carlw0194/kaya-hotel-revenue-analysis-PowerBI" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
              <a 
                href="https://app.powerbi.com/view?r=eyJrIjoiMDJjZGNiNGUtMDMxNi00NDAyLWE1ZTQtMDU0YjJmNTU0N2IxIiwidCI6ImY1ZGYwMGE1LTc4NzQtNGViZi05MTkzLTIxOTI2ZTVmYmUyMiIsImMiOjl9&pageName=11179880a14c0e0d2401" target="_blank" rel="noopener noreferrer" 
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

export default ProjectHospitality;