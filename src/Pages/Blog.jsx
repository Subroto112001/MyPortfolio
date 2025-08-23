import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate= useNavigate()
    const handleBlogRoute = () => {
        navigate("/react-router");
    }
    return (
      <div className="bg-bg1">
        <div className="container">
          <div className="flex justify-center items-center pt-10">
            <div className="bg-slate-700 p-6 rounded-lg border-t-2 border-slate-500 max-w-4xl">
              <div className="flex items-start gap-6">
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=150&fit=crop&auto=format"
                    alt="Person typing on laptop"
                    className="w-48 h-36 object-cover rounded-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-emerald-400 mb-3 leading-tight cursor-pointer" onClick={handleBlogRoute}>
                    React Router DOM Explained: The Ultimate Guide for
                    Developers 🚦
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    When you start building real-world applications in React,
                    sooner or later you’ll face a challenge: navigation. “How do
                    I let users jump from Home to About, from Dashboard to
                    Profile, ...
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 text-sm font-medium"
                  >
                    Read More &gt;&gt;
                  </a>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                    <span className="bg-slate-600 px-3 py-1 rounded-full">
                      Web Developer
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Text</span>
                      <span>Sinan</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Date</span>
                      <span>10 Oct 2023</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Read</span>
                      <span>1 Min</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog