import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Every Company Needs a Data Analyst",
      excerpt: "In today's data-driven world, companies that leverage analytics gain a significant competitive advantage. Discover how data analysts transform raw information into strategic insights that drive business growth and innovation.",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "My Top 5 Python Libraries for Data Science",
      excerpt: "From data manipulation to visualization, these Python libraries form the backbone of modern data analysis. Learn about the essential tools that every data scientist should master for efficient and effective analysis.",
      date: "January 10, 2025",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "A Beginner's Guide to SQL",
      excerpt: "SQL remains the fundamental language for database management and data querying. This comprehensive guide covers everything you need to know to start writing effective SQL queries and managing databases with confidence.",
      date: "January 5, 2025",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data Insights Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing knowledge, insights, and best practices in data analysis, 
              visualization, and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      className="h-48 w-full object-cover md:h-full md:w-80" 
                      src={post.image} 
                      alt={post.title}
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-800 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-900 transition-colors duration-200">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Content Coming Soon</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm regularly publishing new articles about data analysis techniques, 
                industry insights, and practical tutorials. Stay tuned for more valuable content!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;