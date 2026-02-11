
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-400 to-teal-200 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
              RZ
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Rannia Zaki</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-slate-600 hover:text-emerald-500 font-medium transition-colors">Profil</a>
              <a href="#experience" className="text-slate-600 hover:text-emerald-500 font-medium transition-colors">Expériences</a>
              <a href="#education" className="text-slate-600 hover:text-emerald-500 font-medium transition-colors">Formations</a>
              <a href="#skills" className="text-slate-600 hover:text-emerald-500 font-medium transition-colors">Compétences</a>
              <a href="mailto:ranniazaki@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md shadow-emerald-200">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-emerald-500 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-500 font-medium rounded-md">Profil</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-500 font-medium rounded-md">Expériences</a>
            <a href="#education" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-500 font-medium rounded-md">Formations</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-500 font-medium rounded-md">Compétences</a>
            <a href="mailto:ranniazaki@gmail.com" className="block px-3 py-2 bg-emerald-500 text-white font-semibold rounded-md text-center mt-4">Me contacter</a>
          </div>
        </div>
      )}
    </nav>
  );
};
