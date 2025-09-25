import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Edit3,
  Tag,
  Bookmark,
  Users,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogPlatformHomepage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleGetStarted = () => {
    navigate("/home");
  };

  const handleViewExamples = () => {
    navigate("/home");
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Rich Text Editor",
      description: "Write and format your posts with our intuitive editor",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Smart Organization",
      description: "Organize content with categories and tags",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Bookmark className="w-8 h-8" />,
      title: "Draft Management",
      description: "Save drafts and publish when you're ready",
      gradient: "from-cyan-400 to-sky-500",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Posts Created",
      icon: <Edit3 className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Active Bloggers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "50K+",
      label: "Monthly Readers",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Logo/Brand */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur opacity-50"></div>
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
                Blog
              </span>
              <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Create, organize, and publish your thoughts with our
            </p>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 font-semibold">
                powerful blogging platform
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  Start Writing
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={handleViewExamples}
                className="px-8 py-4 border-2 border-sky-400 rounded-2xl font-semibold text-lg hover:bg-sky-400 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              >
                View Examples
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 hover:scale-105 transition-all duration-300 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center mb-3 text-sky-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create and manage your blog content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:scale-105 transition-all duration-500 group ${
                  currentFeature === index
                    ? "ring-2 ring-sky-400 ring-opacity-50"
                    : ""
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center bg-gradient-to-r from-sky-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-16 border border-white/20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Ready to Start Blogging?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of writers who trust our platform to share their
              stories with the world
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleGetStarted}
                className="group relative px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-3 w-6 h-6" />
                  Get Started Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={handleViewExamples}
                className="px-10 py-5 border-2 border-sky-400 rounded-2xl font-bold text-xl hover:bg-sky-400 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-6 py-12 border-t border-white/10">
          <div className="text-center text-gray-400">
            <p className="text-lg">
              © 2025 Blog Platform. Built with passion for writers everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPlatformHomepage;
