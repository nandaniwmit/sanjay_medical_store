import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const pageNamesMap: Record<string, string> = {
    about: 'About Us',
    services: 'Pharmacy Services',
    gallery: 'Store Gallery',
    contact: 'Contact & Directions',
  };

  return (
    <nav id="breadcrumbs-nav" aria-label="Breadcrumb" className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Home className="w-4 h-4 mr-1 text-slate-500" />
              <span>Home</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = pageNamesMap[value.toLowerCase()] || value;

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                {isLast ? (
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
