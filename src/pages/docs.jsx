import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Docs = () => {
  document.title = "<PassOp/> | Docs"

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 md:px-12 py-16"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-green-600 mb-6"
        variants={fadeUp}
        custom={0}
      >
        📘 PassOp Docs
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 text-lg mb-12"
        variants={fadeUp}
        custom={0.5}
      >
        Learn how to use PassOp and understand how your data stays safe.
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 - How to Use */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition duration-300"
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            🛠️ How to Use
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
            <li>Enter the website URL where you want to store login info.</li>
            <li>Fill in your username and password securely.</li>
            <li>Click <strong>“Save Password”</strong> to store it locally.</li>
            <li>Use the eye icon 👁️ to toggle password visibility.</li>
            <li>Copy fields using 📋 icons, edit and delete entries easily.</li>
          </ul>
        </motion.div>

        {/* Card 2 - Security */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition duration-300"
          variants={fadeUp}
          custom={1.5}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            🔐 How Secure is PassOp?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
            <li>All passwords are stored locally using <strong>localStorage</strong>.</li>
            <li>No data is ever uploaded to a server — 100% offline.</li>
            <li>Only you have access to your saved credentials.</li>
            <li>
              Clearing browser data or incognito mode will erase passwords —
              use cautiously.
            </li>
          </ul>
        </motion.div>

        {/* Card 3 - Features */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition duration-300"
          variants={fadeUp}
          custom={2}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            ⚡ Features
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
            <li>Store passwords securely in your browser’s localStorage.</li>
            <li>Easy-to-use interface for managing your passwords.</li>
            <li>Copy-paste passwords and usernames with just one click.</li>
            <li>Toggle password visibility and quickly edit entries.</li>
          </ul>
        </motion.div>

        {/* Card 4 - FAQs */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition duration-300"
          variants={fadeUp}
          custom={2.5}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            ❓ FAQs
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
            <li><strong>Q:</strong> Can I recover my password if I forget it?</li>
            <li><strong>A:</strong> No, passwords are stored locally and are not recoverable.</li>
            <li><strong>Q:</strong> How do I delete passwords?</li>
            <li><strong>A:</strong> Simply click the delete icon next to the password entry.</li>
            <li><strong>Q:</strong> Does PassOp store my data online?</li>
            <li><strong>A:</strong> No, all data is stored only in your browser's localStorage.</li>
          </ul>
        </motion.div>

        {/* Card 5 - Contribute in Github */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition duration-300"
          variants={fadeUp}
          custom={3}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4 flex justify-start items-center gap-2">
           <span className="text-black"><Github/></span> Contribute in GitHub
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
            <li>Clone or download the PassOp repository from GitHub. Link -&gt; <a target="_blank" className="text-blue-700 underline" href="https://github.com/Maysur-Rahman-Bhuiyan/PassOp">https://github.com/Maysur-Rahman-Bhuiyan/PassOp</a></li>
            <li>Install dependencies using <code>npm install</code>.</li>
            <li>Run the app using <code>npm run dev</code> to start the development server.</li>
            <li>Contribute by sending pull requests in Github</li>
          </ul>
        </motion.div>

        {/* card 6 - Getting Started */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition duration-300"
          variants={fadeUp}
          custom={3}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            🚀 Getting Started
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
            <li>Clone or download the PassOp repository from GitHub.</li>
            <li>Install dependencies using <code>npm install</code>.</li>
            <li>Run the app using <code>npm start</code> and start saving your passwords.</li>
            <li>Enjoy a seamless password management experience right in your browser.</li>
          </ul>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center text-sm text-gray-500 mt-16"
        variants={fadeUp}
        custom={4}
      >
        🚀 Crafted with love by the <span className="text-green-600 font-semibold">PassOp</span> Team
      </motion.div>
    </motion.div>
  );
};

export default Docs;
