import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Mistakes to Avoid When Buying Property in Kenya",
      excerpt: "Discover the most common pitfalls when purchasing property and how to avoid them to make a smart investment decision.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "September 5, 2025",
      readTime: "5 min read",
      author: "Real Estate Expert",
      category: "Buying Guide"
    },
    {
      id: 2,
      title: "Is It Better to Rent or Buy Property in Kenya? A Practical Guide for 2025",
      excerpt: "A comprehensive analysis of the current market conditions to help you decide between renting and buying property.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "September 3, 2025",
      readTime: "8 min read",
      author: "Market Analyst",
      category: "Market Insights"
    },
    {
      id: 3,
      title: "A Step-by-Step Guide to Buying Land in Kenya Legally",
      excerpt: "Navigate the legal requirements and procedures for purchasing land in Kenya with confidence.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "August 28, 2025",
      readTime: "6 min read",
      author: "Legal Expert",
      category: "Legal Guide"
    },
    {
      id: 4,
      title: "5 Fast-Growing Real Estate Hotspots in Nairobi (2025 Update)",
      excerpt: "Explore the emerging neighborhoods in Nairobi that offer the best investment opportunities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "August 25, 2025",
      readTime: "7 min read",
      author: "Investment Advisor",
      category: "Investment"
    },
    {
      id: 5,
      title: "How to Get the Best Mortgage Rates in Kenya",
      excerpt: "Tips and strategies for securing favorable mortgage terms from Kenyan financial institutions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "August 20, 2025",
      readTime: "9 min read",
      author: "Financial Advisor",
      category: "Finance"
    },
    {
      id: 6,
      title: "Property Investment Trends to Watch in Kenya",
      excerpt: "Stay ahead of the curve with insights into emerging trends shaping Kenya's property market.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "August 15, 2025",
      readTime: "6 min read",
      author: "Market Researcher",
      category: "Trends"
    }
  ];

  const categories = ["All", "Buying Guide", "Market Insights", "Legal Guide", "Investment", "Finance", "Trends"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="py-20 text-4xl md:text-6xl font-bold text-white mb-4">
            RECENT UPDATES
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 font-semibold">
            AND <span className="text-orange-500">INSIGHTS</span>
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-orange-100 rounded-lg p-4 inline-block mb-4">
              <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">
                RECENT BLOGS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                    <a href={`/blog/${post.id}`} className="cursor-pointer">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-medium">
                          {post.author.split(' ').map(name => name[0]).join('')}
                        </span>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-200">
                      READ MORE
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found for this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get the latest real estate tips, market updates, and exclusive content delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;