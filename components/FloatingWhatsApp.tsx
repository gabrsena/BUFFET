
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface Props {
  scrollY: number;
}

const FloatingWhatsApp: React.FC<Props> = ({ scrollY }) => {
  // O botão aparece apenas quando o usuário chega na seção "About"
  const isVisible = scrollY > 500;

  return (
    <a 
      href="https://wa.me/5515999999999?text=Olá!%20Gostaria%20de%20consultar%20datas%20disponíveis%20para%20uma%20festa." 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 group transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50 pointer-events-none'}`}
      title="Fale conosco no WhatsApp"
    >
      {/* Glow Neon Effect */}
      <div className={`absolute inset-0 bg-green-500 rounded-full ${isVisible ? 'animate-pulse-glow-green' : ''}`} style={{ animationDuration: '4s' }}></div>
      
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:hidden"></div>
      
      <div className="relative bg-green-500 text-white p-6 rounded-full shadow-2xl transition-all transform group-hover:scale-110 group-active:scale-95 border-4 border-white overflow-hidden">
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <MessageCircle className="w-10 h-10 fill-current relative z-10" />
        <span className="sr-only">WhatsApp</span>
      </div>
      
      {/* Cartoon bubble */}
      <div className="absolute -top-12 right-0 bg-white text-green-600 px-4 py-1 rounded-full text-xs font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fala com a gente! 👋
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
