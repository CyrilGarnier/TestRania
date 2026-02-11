
import React from 'react';
import { Mail, Phone, MapPin, Car, ExternalLink, Download, Sparkles, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-40 pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-200 rounded-full blur-[100px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100/80 backdrop-blur-sm text-emerald-700 rounded-2xl text-xs font-black uppercase tracking-[0.2em] mb-8 border border-emerald-200">
              <Sparkles size={14} /> Available for projects
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
              L'avenir sera <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">digital.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Je suis <span className="text-slate-900 font-bold underline decoration-emerald-300 decoration-4 underline-offset-4">Rannia Zaki</span>, Chef de Projet Digitaux. J'accompagne la transformation des entreprises à travers des solutions numériques innovantes et humaines.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 max-w-xl mx-auto lg:mx-0">
              {[
                { icon: Mail, text: "ranniazaki@gmail.com", href: "mailto:ranniazaki@gmail.com" },
                { icon: Phone, text: "07 66 82 83 60", href: "tel:+33766828360" },
                { icon: MapPin, text: "Évry-Courcouronnes", href: "#" },
                { icon: Car, text: "Permis B", href: "#" }
              ].map((item, idx) => (
                <a key={idx} href={item.href} className="flex items-center gap-4 p-4 bg-white/50 border border-white hover:border-emerald-200 rounded-3xl transition-all group hover:shadow-lg hover:bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-slate-700">{item.text}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="mailto:ranniazaki@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-[2rem] font-black transition-all shadow-2xl shadow-emerald-200 flex items-center justify-center gap-3 scale-100 hover:scale-105">
                Me contacter <ExternalLink size={20} />
              </a>
              <button className="glass border-2 border-white hover:border-emerald-500 text-slate-800 px-10 py-5 rounded-[2rem] font-black transition-all flex items-center justify-center gap-3">
                CV Version PDF <Download size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 p-6">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-[80px] blur-3xl -z-10 animate-pulse"></div>
               <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait Rannia Zaki" 
                className="rounded-[60px] w-full aspect-[4/5] object-cover shadow-2xl border-8 border-white animate-float"
              />
              
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[40px] shadow-2xl border border-white/50 max-w-[240px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                    <Linkedin size={24} />
                  </div>
                  <div className="font-black text-slate-900 leading-tight">Digital Leader</div>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                  Passionnée par l'innovation et l'excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
