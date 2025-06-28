"use client";
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Star, Clock, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';



const AcademicHub = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const featuredProjects = [
    {
      id: 1,
      title: "Assignment-Med",
      category: "Assignments",
      level: "Advanced",
      rating: 4.9,
      reviews: 5,
      duration: "5 days",
      price: 100,
      originalPrice: 200,
      tag: "Best Seller",
      tagColor: "bg-amber-500"
    },
    {
      id: 2,
      title: "Termwork-Med",
      category: "Termwork",
      level: "Expert",
      rating: 4.8,
      reviews: 15,
      duration: "2-3 weeks",
      price: 250,
      originalPrice: 400,
      tag: "New",
      tagColor: "bg-emerald-500"
    },
    {
      id: 3,
      title: "PPTs",
      category: "Presentations",
      level: "Intermediate",
      rating: 4.7,
      reviews: 8,
      duration: "3-4 days",
      price: 50,
      originalPrice: 100,
      tag: "Popular",
      tagColor: "bg-blue-500"
    }
    
  ];

  const stats = [
    { number: "0%", label: "Plagiarism" },
    { number: "5K+", label: "Projects Delivered" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  const categories = [
    "Assignments",
    "Projects", 
    "Presentations",
    "Termwork"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-y-auto">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Asshelp
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Assignments</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Research</a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search assignments, projects..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              <User className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-700 py-4 space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search assignments, projects..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Categories</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Assignments</a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">Research</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Premium Academic{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get high-quality assignments, projects, and research papers crafted by experts. 
            Boost your academic performance with our premium collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Browse Projects
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 rounded-xl font-semibold transition-all">
              View Samples
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 sm:mb-0">Featured Projects</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg hover:bg-slate-700/50 transition-all">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg hover:bg-slate-700/50 transition-all">
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 ₹{project.tagColor} text-white text-sm font-medium rounded-full`}>
                    {project.tag}
                  </span>
                </div>

                <div className="w-full aspect-square bg-slate-700/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  {project.id === 1 && (
                    <img
                      src="/img1.png"
                      alt="Assignment"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  )}
                  {project.id === 2 && (
                    <img
                      src="/img2.png"
                      alt="Termwork"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  )}
                  {project.id !== 1 && project.id !== 2 && (
                    <div className="w-12 h-12 bg-slate-600 rounded-lg opacity-50"></div>
                  )}
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">{project.category}</span>
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-xs">{project.level}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    
                  </h3>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{project.rating}</span>
                    <span>({project.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">₹{project.price}</span>
                    <span className="text-sm text-slate-400 line-through">₹{project.originalPrice}</span>
                  </div>
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all transform hover:scale-105"
                    onClick={() => {
                      if (project.id === 1) {
                        router.push('/form');
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Asshelp
                </span>
              </div>
              <p className="text-slate-400 max-w-md">
                Your trusted partner for academic excellence. Get premium assignments and projects delivered on time.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <a key={category} href="#" className="block text-slate-400 hover:text-white transition-colors">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Live Chat</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AcademicHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AcademicHub;