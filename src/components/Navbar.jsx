import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <div className="logo font-bold text-2xl">
            <span className="text-green-500">&lt;</span>
            <span>Pass</span>
            <span className="text-green-500">Lockr/</span>
            <span className="text-green-500">&gt;</span>
          </div>
        </a>

        {/* Hamburger Icon (Small screens) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-7 h-7 text-white" />
        </div>

        {/* Buttons - medium & up */}
        <div className="hidden md:flex gap-4">
          <GitHubButtons />
        </div>
      </div>

      {/* Dropdown - small screens with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="flex md:hidden justify-center items-center gap-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GitHubButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const GitHubButtons = () => (
  <>
    <a target="_blank" href="https://github.com/Maysur-Rahman-Bhuiyan/PassOp">
      <button className="bg-green-700 flex items-center py-1.5 px-4 rounded-full cursor-pointer ring-white ring-1">
        <img className="invert w-5 h-5 mr-2" src="/icons/github.svg" alt="GitHub" />
        <span className="font-bold">GitHub</span>
      </button>
    </a>
    {/* <a target="_blank" href="/docs">
      <button className="bg-green-700 flex items-center py-1.5 px-4 rounded-full cursor-pointer ring-white ring-1">
        <img className="invert w-5 h-5 mr-2" src="/icons/docs.svg" alt="GitHub" />
        <span className="font-bold">Docs</span>
      </button>
    </a> */}
  </>
);

export default Navbar;
