
import React from 'react';
import { Mail, Phone, MapPin, Car, ExternalLink, Download, Cpu, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden">
      <div className="pastel-bg-blob bg-emerald-200 w-[500px] h-[500px] -top-24 -left-24"></div>
      <div className="pastel-bg-blob bg-orange-100 w-[400px] h-[400px] top-1/2 -right-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Chef de projet Digitaux
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Bonjour, je suis <span className="text-emerald-500">Rannia Zaki</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Actuellement Apprentie Chef de Projet Digitaux chez Enedis. Passionnée par la digitalisation et la communication, je mets mes compétences au service de la transformation numérique.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <Mail size={18} className="text-emerald-500" />
                </div>
                <span className="font-medium">ranniazaki@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <Phone size={18} className="text-emerald-500" />
                </div>
                <span className="font-medium">07 66 82 83 60</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <MapPin size={18} className="text-emerald-500" />
                </div>
                <span className="font-medium">Évry-Courcouronnes</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <Car size={18} className="text-emerald-500" />
                </div>
                <span className="font-medium">Permis B</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                Me contacter <ExternalLink size={18} />
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-500 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                Télécharger mon CV <Download size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
               <img 
                src="https://picsum.photos/seed/rannia/600/600" 
                alt="Portrait Rannia Zaki" 
                className="rounded-[32px] w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="bg-orange-400 p-3 rounded-xl text-white">
                  <Cpu size={32} />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
                <div className="bg-emerald-400 p-3 rounded-xl text-white">
                  <Heart size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
