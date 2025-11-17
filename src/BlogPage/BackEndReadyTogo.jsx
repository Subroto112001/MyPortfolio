import React from "react";

// --- Code Snippets ---
// We define code snippets as constants to make the JSX cleaner
// and to properly handle whitespace and special characters.

const packageJsonCode = `{
  "name": "backendready-togo",
  "version": "1.0.0",
  "description": "...",
  "main": "index.js",
  "scripts": { ... },
  "author": "Subroto Kumar Barman",
  "license": "ISC",
  "bin": {
    "backendready-togo": "./index.js"
  }
}`;

const indexJsCode = `#!/usr/bin/env node

const { spawn } = require("child_process");

// My list of must-have packages
const packagesToInstall = [
  "express", "nodemon", "dotenv", "mongoose", "axios",
  "bcrypt", "bwip-js", "cloudinary", "cookie-parser",
  "cors", "joi", "jsonwebtoken", "multer", "nodemailer",
  "qrcode", "slugify", "socket.io", "socket.io-client",
];

console.log(\`Installing your \${packagesToInstall.length} personal packages...\`);

// Spawn the child process to run 'npm install'
const installProcess = spawn("npm", ["install", ...packagesToInstall], {
  // 'shell: true' is vital for Windows compatibility
  shell: true, 
  // Pipes the output to my main terminal so I can see progress
  stdio: "inherit", 
});

installProcess.on("close", (code) => {
  if (code === 0) {
    console.log("\\n✅ All packages installed successfully!");
  } else {
    console.error(\`\\n❌ Installation failed with code \${code}\`);
  }
});`;

const npmLinkCode = `npm link`;

// --- Helper Component for Inline Code ---
// This makes it easy to style inline code snippets consistently.
const InlineCode = ({ children }) => (
  <code className="bg-gray-700 text-teal-300 px-1.5 py-0.5 rounded-md text-sm font-mono mx-0.5">
    {children}
  </code>
);

// --- Main App Component ---
const BackEndReadyTogo = () => {
  return (
    // Outermost container sets the background color and base font styles
    <div className="min-h-screen bg-[#292f36] text-gray-200 font-['Inter',_sans-serif] py-12 px-4 sm:px-6">
      {/* Centered content container with a max-width for readability */}
      <main className="max-w-3xl mx-auto">
        {/* Blog Post Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Tired of Typing <InlineCode>npm install</InlineCode>? How I Built a
            Custom CLI Tool to Automate My Backend Setup 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            As a Node.js backend developer, I automated the most repetitive part
            of my job. Here's the simple "how-to" guide.
          </p>
        </header>

        {/* Blog Post Content */}
        <article className="space-y-10">
          <section>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every time I started a new Node.js project, I found myself typing
              the exact same commands. It usually went something like this:
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              <InlineCode>
                npm install express mongoose dotenv cors bcrypt...
              </InlineCode>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              And the list goes on. I was manually installing the same 15+
              packages for every single project. I realized I was wasting time
              on setup rather than coding. So, I decided to automate it.
            </p>
          </section>

          {/* Section: The Goal */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              The Goal 🎯
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I wanted a CLI (Command Line Interface) tool that would:
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-300 leading-relaxed space-y-2 pl-4">
              <li>Run from anywhere in my terminal.</li>
              <li>Automatically install my "essential" tech stack.</li>
              <li>Work on Windows (since that's what I use).</li>
            </ol>
          </section>

          {/* Section: Step 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Step 1: The Setup (<InlineCode>package.json</InlineCode>)
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              First, I initialized a standard npm project. The most important
              part here was the <InlineCode>bin</InlineCode> section in{" "}
              <InlineCode>package.json</InlineCode>. This tells Node.js, "Hey,
              when someone runs the command{" "}
              <InlineCode>backendready-togo</InlineCode>, execute this specific
              file."
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code className="font-mono text-sm">{packageJsonCode}</code>
            </pre>
          </section>

          {/* Section: Step 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Step 2: The Logic (<InlineCode>index.js</InlineCode>)
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              This is where the magic happens. I created an{" "}
              <InlineCode>index.js</InlineCode> file. I started with a{" "}
              <strong>Shebang</strong> line (
              <InlineCode>#!/usr/bin/env node</InlineCode>) at the very top.
              This is crucial because it tells the system to execute this file
              using Node.js.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Then, I used Node's built-in{" "}
              <InlineCode>child_process</InlineCode> module to spawn a new
              process that runs the <InlineCode>npm install</InlineCode> command
              for me.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code className="font-mono text-sm">{indexJsCode}</code>
            </pre>
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-lg text-white mb-2">
                Why <InlineCode>shell: true</InlineCode>?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I included <InlineCode>{"{ shell: true }"}</InlineCode> in the
                spawn options. Without this, the command might fail on Windows
                systems. This ensures cross-platform compatibility.
              </p>
            </div>
          </section>

          {/* Section: Step 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Step 3: Making it Global (<InlineCode>npm link</InlineCode>) 🛠️
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I didn't want to publish this to the public NPM registry; I just
              wanted to use it locally on my machine. To do this, I used the{" "}
              <InlineCode>npm link</InlineCode> command.
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-300 leading-relaxed space-y-2 pl-4 mb-4">
              <li>
                I navigated to my <InlineCode>backendready-togo</InlineCode>{" "}
                folder in the terminal.
              </li>
              <li>I ran:</li>
            </ol>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code className="font-mono text-sm">{npmLinkCode}</code>
            </pre>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              This created a symbolic link on my system. Now, my computer treats{" "}
              <InlineCode>backendready-togo</InlineCode> as a global command!
            </p>
          </section>

          {/* Section: The Result */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              The Result
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Now, whenever I start a new project, my workflow is incredibly
              fast:
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-300 leading-relaxed space-y-2 pl-4">
              <li>
                <InlineCode>mkdir my-new-project</InlineCode>
              </li>
              <li>
                <InlineCode>cd my-new-project</InlineCode>
              </li>
              <li>
                <InlineCode>backendready-togo</InlineCode>
              </li>
            </ol>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Boom! 💥 It automatically pulls in Express, Mongoose, Joi,
              Cloudinary, and everything else I need.
            </p>
          </section>

          {/* Section: Conclusion */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Conclusion
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Automation doesn't have to be complex. With a simple Javascript
              file and a few lines of code, I saved myself from repetitive
              typing and reduced the friction of starting new projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you find yourself typing the same commands over and over, I
              highly recommend building your own "Ready-To-Go" package!
            </p>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>
            <strong>Author:</strong> Subroto Kumar Barman
          </p>
          <p className="mt-1">
            <a
              href="https://www.linkedin.com/posts/subroto112001_nodejs-backenddevelopment-developertools-activity-7395686610199146497-iCaV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3J-HIBo-s6kyAxoV9l0tCLThVTOvo7tg0"
              target="_blank"
              className=" text-teal-400 hover:text-teal-300 no-underline"
            >
              linkedin: backendready-togo
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default BackEndReadyTogo;
