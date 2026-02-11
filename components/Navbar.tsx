
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profil', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Formations', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-500 rounded-[2rem] border border-white/50 shadow-2xl shadow-slate-200/50 flex justify-between items-center h-20 px-8 ${scrolled ? 'glass scale-100' : 'bg-transparent border-transparent shadow-none scale-105'}`}>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black group-hover:bg-emerald-500 transition-colors shadow-lg">
              RZ
            </div>
            <span className={`font-black text-xl tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>Rania Zaki</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center gap-10">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-black uppercase tracking-[0.15em] text-slate-500 hover:text-emerald-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="mailto:ranniazaki@gmail.com" className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 shadow-xl">
                Contact <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-3 bg-white shadow-lg rounded-2xl border border-slate-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white p-6 pt-32 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-4 bg-slate-100 rounded-full">
             <X size={28} />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-slate-900 hover:text-emerald-500 transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <a href="mailto:ranniazaki@gmail.com" className="bg-emerald-500 text-white py-6 rounded-[2rem] font-black text-2xl mt-12 shadow-2xl shadow-emerald-200">
              Démarrer un projet
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
