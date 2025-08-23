import React from "react";
import pictureone from "../assets/reactrouterdom1.png";
import picturetwo from "../assets/reeactrouter2.png";
import picturethree from "../assets/reactrouter3.png";
import picturefour from "../assets/Reactrouter4.png";
import picturefive from "../assets/Reactrouter5.png";
import pictureSix    from "../assets/Recatgroouter6.png";
import pictureSeven    from "../assets/Recatroputer7.png";
const ReacRoter = () => {
  return (
    <div className="bg-bg1">
      <div className="container">
        <div className="py-16">
          <div className="flex flex-col gap-y-6">
            <h3 className="Menu-M text-white">
              React Router DOM Explained: The Ultimate Guide for Developers 🚦
            </h3>

            <div className="flex flex-col gap-y-10">
              <p className="Media-M text-white text-justify">
                When you start building real-world applications in React, sooner
                or later you’ll face a challenge: navigation. “How do I let
                users jump from Home to About, from Dashboard to Profile,
                without reloading the page?” This is where React Router DOM
                steps in as the superhero of React navigation. It powers
                seamless routing in single-page applications (SPAs), making the
                app feel as smooth as a mobile app. In this guide, we’ll explore
                everything you need to know about React Router DOM — from the
                basics to advanced tricks — so you can design apps that are not
                only functional but also user-friendly.
              </p>

              <h3 className="Menu-M text-white">
                What is React Router DOM, Really?
              </h3>
              <p className="Media-M text-white text-justify">
                Without React Router DOM, a React app with multiple pages would
                be a nightmare:
                <ul className="pl-4 my-2">
                  <li className="list-disc">
                    You’d need complicated conditional rendering.
                  </li>
                  <li className="list-disc">Navigation would feel clunky.</li>
                  <li className="list-disc">
                    The whole page might reload every time you change routes.
                  </li>
                </ul>
                But with React Router DOM:
                <ul className="pl-4 my-2">
                  <li className="list-disc">
                    Navigation feels instant and smooth.
                  </li>
                  <li className="list-disc">
                    Code becomes organized and scalable.
                  </li>
                  <li className="list-disc">
                    You can handle dynamic routes, nested layouts, and even
                    restricted pages (like login-only areas).
                  </li>
                </ul>
              </p>
            </div>
            {/* install */}
            <div className="flex flex-col gap-5">
              <h3 className="Menu-M text-white">Installation</h3>
              <div className="flex flex-col gap-2">
                <p className="Media-M text-white">Type your terminal :</p>
                <p className="Media-M text-white">
                  npm install react-router-dom
                </p>
              </div>
            </div>
            {/* install */}
            <div className="flex flex-col gap-y-6">
              <h3 className="Menu-M text-white">
                Core Building Blocks of React Router DOM
              </h3>
              <h3 className="Media-M text-white text-justify">
                Let’s break it down into digestible pieces.
              </h3>

              <h4 className="Button-U text-white text-justify">
                1. BrowserRouter – The Gatekeeper
              </h4>
              <p className="Media-M text-white text-justify">
                Wrap your entire app with BrowserRouter. Without it, routing
                won’t work.
              </p>
              <div className="w-[500px] h-[250px]">
                <img
                  className="w-full h-full"
                  src={pictureone}
                  alt={pictureone}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className="Button-U text-white text-justify">
                2. Routes & Route – The Map
              </h4>
              <p className="Media-M text-white text-justify">
                These define “which path leads to which component.”
              </p>
              <div className="w-[500px] ">
                <img
                  className="w-full h-full"
                  src={picturetwo}
                  alt={picturetwo}
                />
              </div>
              <p className="Media-M text-white text-justify">
                Here’s what happens:
              </p>
              <ul className="pl-4 my-2 text-white Media-M ">
                <li className="list-disc">/ → shows Home component</li>
                <li className="list-disc">/about → shows About component</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className="Button-U text-white text-justify">
                3. Link vs NavLink – The Road Signs
              </h4>
              <p className="Media-M text-white text-justify">
                Instead of{" <a> "}tags (which reload pages), React Router
                provides:
              </p>
              <ul className="pl-4 my-2 text-white Media-M ">
                <li className="list-disc">Link → Basic navigation.</li>
                <li className="list-disc">
                  NavLink → Same as Link, but highlights the active route.
                </li>
              </ul>
              <div className="w-[500px] ">
                <img
                  className="w-full h-full"
                  src={picturethree}
                  alt={picturethree}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className="Button-U text-white text-justify">
                4. useNavigate – Programmatic Teleportation
              </h4>
              <p className="Media-M text-white text-justify">
                Want to send a user to another page after login? Use useNavigate
                {"()"}.
              </p>

              <div className="w-[500px] ">
                <img
                  className="w-full h-full"
                  src={picturefour}
                  alt={picturefour}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className="Button-U text-white text-justify">
                5. Dynamic Routes – Personalized GPS
              </h4>
              <p className="Media-M text-white text-justify">
                Pass values in the URL and extract them with{"()"}.
              </p>

              <div className="w-[500px] ">
                <img
                  className="w-full h-full"
                  src={picturefive}
                  alt={picturefive}
                />
              </div>
              <p className="Media-M text-white text-justify">
                Visiting /user/25 will display “Viewing profile of User 25”.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className="Button-U text-white text-justify">
                6. Nested Routes – Roads within Roads
              </h4>
              <p className="Media-M text-white text-justify">
                Perfect for dashboards or apps with sub-sections.
              </p>

              <div className="w-[500px] ">
                <img
                  className="w-full h-full"
                  src={pictureSix}
                  alt={pictureSix}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className="Button-U text-white text-justify">
                7. Protected Routes – Security Checkpoint
              </h4>
              <p className="Media-M text-white text-justify">
                Don’t want unauthorized users to access your dashboard? Wrap the
                route in a custom component.
              </p>

              <div className="w-[500px] ">
                <img
                  className="w-full h-full"
                  src={pictureSeven}
                  alt={pictureSeven}
                />
              </div>
              <h3 className="Button-U text-white mt-[30px] text-center">- Subroto Kumar Barman</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReacRoter;
