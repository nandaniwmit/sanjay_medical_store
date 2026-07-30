import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const DarkThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      id="theme-toggle-btn"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark theme"
      className="p-2 rounded-full transition-all duration-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
    </button>
  );
};
