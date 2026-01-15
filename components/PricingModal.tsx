
import React from 'react';
import { X, Zap, Gift } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg glass-card border-2 border-brand-purple/50 rounded-[3rem] p-10 shadow-[0_0_100px_rgba(147,51,234,0.3)] animate-float overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-pink text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
            <Zap className="w-4 h-4 fill-current" /> OFERTA ATIVADA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2 font-balloon leading-tight">
            FESTA <span className="text-brand-yellow neon-text-yellow">MÁGICA</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-brand-turquoise font-black mb-8 uppercase tracking-[0.2em] text-sm">
            <Gift className="w-4 h-4" /> Brindes Exclusivos
          </div>

          <div className="glass-card bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 relative group">
             <div className="flex flex-col items-center">
                <span className="text-purple-100/50 line-through text-xl font-bold mb-1">De R$ 1.200,00</span>
                <div className="flex items-center gap-2">
                  <span className="text-brand-turquoise text-2xl font-black">R$</span>
                  <span className="text-brand-yellow text-7xl font-black drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">940</span>
                  <span className="text-brand-turquoise text-xl font-black">,00</span>
                </div>
                <p className="text-brand-pink font-bold mt-2 text-sm">Parcelamento facilitado no cartão! 💳</p>
             </div>
          </div>

          <a 
            href="https://wa.me/5515999999999?text=Quero%20aproveitar%20a%20Oferta%20Mágica%20de%20R$940!" 
            target="_blank"
            className="group relative w-full inline-flex items-center justify-center gap-3 bg-brand-turquoise text-white text-2xl font-black py-6 rounded-2xl shadow-[0_10px_0_#0891b2] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 active:translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 animate-shimmer shimmer-btn"></div>
            <span className="relative z-10">APROVEITAR AGORA! 🚀</span>
          </a>
          
          <p className="text-purple-100/30 text-[10px] mt-10 font-bold uppercase tracking-widest">
            *Promoção válida por tempo limitado ou enquanto durarem as datas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
