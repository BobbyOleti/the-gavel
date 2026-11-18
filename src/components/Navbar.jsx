import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import GithubStarButton from './GithubStarButton';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="relative z-50 w-full bg-transparent border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-13 sm:h-15 flex items-center justify-between">
        {/* Website Name and Favicon on the Left */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-2.5 font-pixel text-lg sm:text-xl md:text-2xl tracking-tight text-white select-none group"
          aria-label="TheGavel Home"
        >
          <img
            src="/favicon.svg"
            alt="TheGavel Gavel Logo"
            width="28"
            height="28"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)] group-hover:rotate-12 transition-transform duration-300 shrink-0"
          />
          <span>TheGavel</span>
        </Link>

        {/* Theme toggle + GitHub Button on the Right */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer active:scale-95 shrink-0"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <GithubStarButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
