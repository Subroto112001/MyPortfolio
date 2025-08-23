import React from "react";
import pictureone from "../assets/reactrouterdom1.png";
import picturetwo from "../assets/reeactrouter2.png";
import picturethree from "../assets/reactrouter3.png";
import picturefour from "../assets/Reactrouter4.png";
import picturefive from "../assets/Reactrouter5.png";
import pictureSix from "../assets/Recatgroouter6.png";
import pictureSeven from "../assets/Recatroputer7.png";

const ReacRoter = () => {
  return (
    <div className="bg-bg1 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              React Router DOM Explained: The Ultimate Guide for Developers 🚦
            </h1>

            <div className="flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10">
              <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                When you start building real-world applications in React, sooner
                or later you'll face a challenge: navigation. "How do I let
                users jump from Home to About, from Dashboard to Profile,
                without reloading the page?" This is where React Router DOM
                steps in as the superhero of React navigation. It powers
                seamless routing in single-page applications (SPAs), making the
                app feel as smooth as a mobile app. In this guide, we'll explore
                everything you need to know about React Router DOM — from the
                basics to advanced tricks — so you can design apps that are not
                only functional but also user-friendly.
              </p>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                What is React Router DOM, Really?
              </h2>

              <div className="space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Without React Router DOM, a React app with multiple pages
                  would be a nightmare:
                </p>
                <ul className="pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg text-white">
                  <li className="list-disc leading-relaxed">
                    You'd need complicated conditional rendering.
                  </li>
                  <li className="list-disc leading-relaxed">
                    Navigation would feel clunky.
                  </li>
                  <li className="list-disc leading-relaxed">
                    The whole page might reload every time you change routes.
                  </li>
                </ul>

                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  But with React Router DOM:
                </p>
                <ul className="pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg text-white">
                  <li className="list-disc leading-relaxed">
                    Navigation feels instant and smooth.
                  </li>
                  <li className="list-disc leading-relaxed">
                    Code becomes organized and scalable.
                  </li>
                  <li className="list-disc leading-relaxed">
                    You can handle dynamic routes, nested layouts, and even
                    restricted pages (like login-only areas).
                  </li>
                </ul>
              </div>
            </div>

            {/* Installation Section */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4">
                Installation
              </h2>
              <div className="space-y-3">
                <p className="text-sm sm:text-base lg:text-lg text-white">
                  Type in your terminal:
                </p>
                <div className="bg-black bg-opacity-50 rounded p-3 sm:p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm sm:text-base font-mono">
                    npm install react-router-dom
                  </code>
                </div>
              </div>
            </div>

            {/* Core Building Blocks */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4 sm:mb-6">
                  Core Building Blocks of React Router DOM
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Let's break it down into digestible pieces.
                </p>
              </div>

              {/* 1. BrowserRouter */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  1. BrowserRouter – The Gatekeeper
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Wrap your entire app with BrowserRouter. Without it, routing
                  won't work.
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={pictureone}
                    alt="BrowserRouter example"
                  />
                </div>
              </section>

              {/* 2. Routes & Route */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  2. Routes & Route – The Map
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  These define "which path leads to which component."
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={picturetwo}
                    alt="Routes and Route example"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base lg:text-lg text-white">
                    Here's what happens:
                  </p>
                  <ul className="pl-4 sm:pl-6 space-y-1 text-sm sm:text-base lg:text-lg text-white">
                    <li className="list-disc">/ → shows Home component</li>
                    <li className="list-disc">
                      /about → shows About component
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. Link vs NavLink */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  3. Link vs NavLink – The Road Signs
                </h3>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                    Instead of{" "}
                    <code className="bg-gray-700 px-2 py-1 rounded">
                      &lt;a&gt;
                    </code>{" "}
                    tags (which reload pages), React Router provides:
                  </p>
                  <ul className="pl-4 sm:pl-6 space-y-2 text-sm sm:text-base lg:text-lg text-white">
                    <li className="list-disc leading-relaxed">
                      <strong>Link</strong> → Basic navigation.
                    </li>
                    <li className="list-disc leading-relaxed">
                      <strong>NavLink</strong> → Same as Link, but highlights
                      the active route.
                    </li>
                  </ul>
                </div>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={picturethree}
                    alt="Link vs NavLink example"
                  />
                </div>
              </section>

              {/* 4. useNavigate */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  4. useNavigate – Programmatic Teleportation
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Want to send a user to another page after login? Use{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded">
                    useNavigate()
                  </code>
                  .
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={picturefour}
                    alt="useNavigate example"
                  />
                </div>
              </section>

              {/* 5. Dynamic Routes */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  5. Dynamic Routes – Personalized GPS
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Pass values in the URL and extract them with{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded">
                    useParams()
                  </code>
                  .
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={picturefive}
                    alt="Dynamic routes example"
                  />
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Visiting{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded">
                    /user/25
                  </code>{" "}
                  will display "Viewing profile of User 25".
                </p>
              </section>

              {/* 6. Nested Routes */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  6. Nested Routes – Roads within Roads
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Perfect for dashboards or apps with sub-sections.
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={pictureSix}
                    alt="Nested routes example"
                  />
                </div>
              </section>

              {/* 7. Protected Routes */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  7. Protected Routes – Security Checkpoint
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white text-justify leading-relaxed">
                  Don't want unauthorized users to access your dashboard? Wrap
                  the route in a custom component.
                </p>
                <div className="w-full max-w-2xl mx-auto">
                  <img
                    className="w-full h-auto rounded-lg shadow-lg"
                    src={pictureSeven}
                    alt="Protected routes example"
                  />
                </div>
              </section>

              {/* Author Attribution */}
              <div className="pt-8 sm:pt-12 border-t border-gray-600">
                <p className="text-center text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  - Subroto Kumar Barman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReacRoter;
