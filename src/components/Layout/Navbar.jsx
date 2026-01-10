import React, { useState } from 'react';
import { Menu, X, Cpu, Search } from 'lucide-react';
import { Link, useRouter } from '../../context/RouterContext';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Coding Path', href: '/coding' },
  { label: 'DECODE Season', href: '/decode-season' },
  { label: 'Debug Checklist', href: '/debug-checklist' },
];

const isActiveRoute = (currentPath, href) => {
  if (href === '/coding') {
    return currentPath.startsWith('/coding');
  }
  return currentPath === href;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { navigate, path } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-googlebox-blue p-2">
            <Cpu className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            FTC <span className="text-googlebox-blue">DECODE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                isActiveRoute(path, item.href)
                  ? 'text-googlebox-blue'
                  : 'text-gray-600 hover:text-googlebox-blue'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search lessons..."
              className="w-48 rounded-full border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 focus:border-googlebox-blue focus:outline-none"
            />
          </form>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-2 px-4 py-4">
            <form onSubmit={handleSubmit} className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search lessons..."
                className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 focus:border-googlebox-blue focus:outline-none"
              />
            </form>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActiveRoute(path, item.href)
                      ? 'bg-googlebox-blue/10 text-googlebox-blue'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
