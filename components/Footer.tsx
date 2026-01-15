
import React from 'react';
import { Phone, Instagram, Facebook, Mail } from 'lucide-react';

interface Props {
  onTitleDoubleClick?: () => void;
}

const Footer: React.FC<Props> = ({ onTitleDoubleClick }) => {
  return (
    <footer className="bg-transparent text-white pt-20 pb-10 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-12 rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-turquoise"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
            <div className="md:col-span-2">
              <h2 
                onDoubleClick={onTitleDoubleClick}
                className="text-4xl font-extrabold text-brand-yellow mb-6 drop-shadow-lg neon-text-yellow cursor-pointer hover:scale-105 transition-transform active:scale-95 inline-block select-none"
                title="Clique duas vezes para uma surpresa!"
              >
                Buffet Infantil
              </h2>
              <p className="text-purple-100/70 text-lg mb-8 max-w-sm font-medium italic leading-relaxed">
                Transformando sonhos em realidade no Wanel Ville. Sua festa, nossa paixão!
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-purple hover:scale-110 transition-all shadow-lg">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-purple hover:scale-110 transition-all shadow-lg">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-black mb-6 text-brand-turquoise uppercase tracking-widest">Contatos</h4>
              <ul className="space-y-4 text-purple-100/80 font-semibold">
                <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <div className="p-2 bg-brand-turquoise/20 rounded-lg">
                    <Phone className="w-5 h-5 text-brand-turquoise" />
                  </div>
                  (15) 99999-9999
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                  <div className="p-2 bg-brand-pink/20 rounded-lg">
                    <Mail className="w-5 h-5 text-brand-pink" />
                  </div>
                  contato@ateliekids.com.br
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-black mb-6 text-brand-yellow uppercase tracking-widest">Atendimento</h4>
              <p className="text-purple-100/80 font-semibold leading-relaxed">
                <span className="text-brand-yellow">Segunda a Sexta:</span><br />
                13h às 20h<br /><br />
                <span className="text-brand-pink">Sábado e Domingo:</span><br />
                10h às 22h
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 text-center text-purple-100/40 text-sm">
            <p>© {new Date().getFullYear()} Buffet Infantil Wanel Ville. Todos os direitos reservados.</p>
            <p className="mt-2 font-black uppercase tracking-[0.2em] text-xs text-brand-turquoise">Salão de Festa Infantil Wanel Ville Sorocaba</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
