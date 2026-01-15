
import React from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  scrollY: number;
}

const About: React.FC<Props> = ({ scrollY }) => {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden" id="sobre">
      {/* Background Glows */}
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px] animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-[100px] animate-pulse" 
        style={{ animationDelay: '1s', transform: `translateY(${scrollY * -0.1}px)` }}
      ></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="relative z-10 p-5 glass-card rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] glow-border-purple rotate-2 transition-transform hover:rotate-0 duration-500 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1519340241574-2eca39dbf4ff?auto=format&fit=crop&q=80&w=1200&h=900" 
                alt="Piscina de bolinhas no Atelie Kids" 
                className="rounded-[2rem] w-full object-cover aspect-video shadow-inner"
              />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-pink text-white flex items-center justify-center rounded-full font-black text-center text-sm shadow-[0_0_20px_#db2777] animate-bounce-soft -rotate-12 border-4 border-white">
                ALEGRIA <br/>PURA! ✨
              </div>
            </div>
            <div className="absolute inset-0 bg-brand-turquoise/20 rounded-[3rem] -rotate-3 scale-105 -z-10 blur-sm"></div>
            <div className="absolute inset-0 bg-brand-yellow/20 rounded-[3rem] rotate-1 scale-105 -z-20 blur-sm"></div>
          </div>
          
          <div className="flex-1 relative text-white">
            <div className="flex items-center gap-3 mb-8 text-brand-pink font-black uppercase tracking-[0.2em] text-sm neon-text-pink">
              <Sparkles className="w-6 h-6 animate-pulse" /> O Buffet Mais Brilhante
            </div>
            
            <div className="mb-10">
              <div className="bubble-base bubble-purple text-4xl md:text-6xl font-fredoka font-balloon mb-2">
                UM MUNDO DE
              </div>
              <br />
              <div className="bubble-base bubble-yellow text-4xl md:text-6xl font-fredoka font-balloon">
                LUZ E ALEGRIA!
              </div>
            </div>

            <p className="text-xl text-purple-100 mb-12 leading-relaxed font-semibold italic drop-shadow-md">
              "Aqui a diversão não tem limites e o brilho é constante! Criamos um espaço onde cada detalhe reflete a felicidade do seu filho."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group flex flex-col gap-4 glass-card p-8 rounded-[2.5rem] border-2 border-brand-purple/40 shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all transform hover:-translate-y-2">
                <span className="text-5xl group-hover:scale-125 transition-transform">🏰</span>
                <span className="font-black text-brand-purple text-xl leading-tight neon-text-purple">Espaço Neon & Mágico</span>
              </div>
              <div className="group flex flex-col gap-4 glass-card p-8 rounded-[2.5rem] border-2 border-brand-pink/40 shadow-lg hover:shadow-[0_0_30px_rgba(219,39,119,0.3)] transition-all transform hover:-translate-y-2">
                <span className="text-5xl group-hover:scale-125 transition-transform">🍦</span>
                <span className="font-black text-brand-pink text-xl leading-tight neon-text-pink">Doces Radiantes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
