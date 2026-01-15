
import React from 'react';

interface Props {
  scrollY: number;
}

const Hero: React.FC<Props> = ({ scrollY }) => {
  const extraEmojis = [
    { char: '🥳', left: '5%', top: '15%', speed: 0.2, size: 'text-5xl' },
    { char: '🎂', left: '12%', top: '45%', speed: 0.15, size: 'text-6xl' },
    { char: '🍦', left: '85%', top: '10%', speed: 0.25, size: 'text-5xl' },
    { char: '🍭', left: '90%', top: '60%', speed: 0.18, size: 'text-6xl' },
    { char: '🎁', left: '20%', top: '75%', speed: 0.1, size: 'text-4xl' },
    { char: '🍿', left: '75%', top: '80%', speed: 0.12, size: 'text-5xl' },
    { char: '🎡', left: '40%', top: '5%', speed: 0.3, size: 'text-7xl' },
    { char: '🎨', left: '60%', top: '12%', speed: 0.22, size: 'text-5xl' },
    { char: '🧸', left: '30%', top: '30%', speed: 0.14, size: 'text-4xl' },
    { char: '🚀', left: '70%', top: '25%', speed: 0.4, size: 'text-6xl' },
    { char: '🎪', left: '2%', top: '85%', speed: 0.08, size: 'text-6xl' },
    { char: '🧁', left: '95%', top: '35%', speed: 0.16, size: 'text-5xl' },
  ];

  const scrollToMagia = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden px-6 py-20">
      <div className="absolute top-6 right-6 z-50">
        <a 
          href="https://wa.me/5515999999999" 
          target="_blank" 
          className="bg-brand-turquoise text-white font-black py-2.5 px-6 rounded-full shadow-[0_5px_0_#0891b2] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 active:translate-y-1 text-xs uppercase tracking-widest whitespace-nowrap"
        >
          RESERVAR AGORA 🚀
        </a>
      </div>

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/20 rounded-full blur-[120px] animate-blob"></div>
      
      {extraEmojis.map((e, i) => (
        <div 
          key={i}
          className={`absolute pointer-events-none select-none ${e.size} opacity-60 transition-transform duration-75 will-change-transform`}
          style={{ 
            left: e.left, 
            top: e.top, 
            transform: `translate3d(0, ${scrollY * -e.speed}px, 0)` 
          }}
        >
          {e.char}
        </div>
      ))}

      <div className="container mx-auto relative z-10 text-center max-w-5xl">
        <div 
          className="inline-block glass-card px-8 py-3 rounded-full text-brand-yellow font-bold mb-14 border border-white/20 shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-bounce-soft uppercase tracking-[0.3em] text-xs"
          style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
        >
          ✨ O REINO DA DIVERSÃO E DO BRILHO ✨
        </div>
        
        <div className="mb-10 space-y-4">
          <div 
            className="bubble-base bubble-yellow text-4xl md:text-6xl lg:text-7xl font-fredoka shadow-[0_8px_0_#ca8a04]"
            style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0) rotate(1.5deg)` }}
          >
            A FESTA MAIS
          </div>
          <br />
          <div 
            className="bubble-base bubble-purple text-5xl md:text-8xl lg:text-9xl font-fredoka animate-wiggle shadow-[0_8px_0_#7e22ce]"
            style={{ transform: `translate3d(0, ${scrollY * -0.08}px, 0) rotate(-2deg)` }}
          >
            MÁGICA
          </div>
          <br />
          <div 
            className="bubble-base bubble-yellow text-4xl md:text-6xl lg:text-7xl font-fredoka shadow-[0_8px_0_#ca8a04]"
            style={{ transform: `translate3d(0, ${scrollY * -0.12}px, 0) rotate(1.5deg)` }}
          >
            ESTÁ AQUI!
          </div>
        </div>
        
        <p 
          className="text-xl md:text-2xl text-purple-100 mb-16 font-medium max-w-2xl mx-auto leading-relaxed"
          style={{ transform: `translate3d(0, ${scrollY * -0.02}px, 0)` }}
        >
          No Buffet Infantil Atelie Kids, cada segundo é uma explosão de cores e alegria no coração do Wanel Ville.
        </p>
        
        <button 
          onClick={scrollToMagia}
          className="group relative inline-flex items-center gap-3 bg-brand-purple text-white text-xl md:text-2xl font-black py-5 px-10 rounded-full shadow-[0_8px_0_#7e22ce] hover:scale-105 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 animate-shimmer shimmer-btn"></div>
          <span className="relative z-10">CONHECER A MAGIA 🎡</span>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
