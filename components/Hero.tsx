import React from 'react';

interface Props {
  scrollY: number;
}

const Hero: React.FC<Props> = ({ scrollY }) => {
  const extraEmojis = [
    { char: '🥳', left: '5%', top: '15%', speed: 0.8, size: 'text-5xl' },
    { char: '🎂', left: '12%', top: '45%', speed: 0.4, size: 'text-6xl' },
    { char: '🍦', left: '85%', top: '10%', speed: 0.7, size: 'text-5xl' },
    { char: '🍭', left: '90%', top: '60%', speed: 0.5, size: 'text-6xl' },
    { char: '🎁', left: '20%', top: '75%', speed: 0.9, size: 'text-4xl' },
    { char: '🍿', left: '75%', top: '80%', speed: 0.3, size: 'text-5xl' },
    { char: '🎡', left: '40%', top: '5%', speed: 0.6, size: 'text-7xl' },
    { char: '🎨', left: '60%', top: '12%', speed: 0.45, size: 'text-5xl' },
    { char: '🧸', left: '30%', top: '30%', speed: 0.55, size: 'text-4xl' },
    { char: '🚀', left: '70%', top: '25%', speed: 1.1, size: 'text-6xl' },
    { char: '🎪', left: '2%', top: '85%', speed: 0.2, size: 'text-6xl' },
    { char: '🧁', left: '95%', top: '35%', speed: 0.75, size: 'text-5xl' },
    { char: '🦖', left: '15%', top: '55%', speed: 0.3, size: 'text-6xl' },
    { char: '🥨', left: '50%', top: '90%', speed: 0.65, size: 'text-4xl' },
    { char: '🧩', left: '80%', top: '50%', speed: 0.4, size: 'text-5xl' },
    { char: '🎠', left: '35%', top: '65%', speed: 0.5, size: 'text-7xl' },
    { char: '🍔', left: '55%', top: '40%', speed: 0.35, size: 'text-4xl' },
    { char: '🍕', left: '45%', top: '20%', speed: 0.85, size: 'text-5xl' },
    { char: '🍩', left: '25%', top: '10%', speed: 0.5, size: 'text-6xl' },
    { char: '🌟', left: '65%', top: '70%', speed: 0.6, size: 'text-5xl' },
    { char: '🎆', left: '10%', top: '2%', speed: 0.25, size: 'text-7xl' },
    { char: '🎈', left: '88%', top: '5%', speed: 0.9, size: 'text-6xl' },
    { char: '🥤', left: '3%', top: '35%', speed: 0.4, size: 'text-4xl' },
    { char: '🍫', left: '92%', top: '82%', speed: 0.55, size: 'text-5xl' },
    { char: '🪁', left: '48%', top: '15%', speed: 0.7, size: 'text-6xl' },
    { char: '🥞', left: '18%', top: '12%', speed: 0.4, size: 'text-5xl' },
    { char: '🧞', left: '78%', top: '40%', speed: 0.9, size: 'text-7xl' },
    { char: '🧚', left: '8%', top: '68%', speed: 0.6, size: 'text-5xl' },
    { char: '🍉', left: '32%', top: '85%', speed: 0.5, size: 'text-4xl' },
    { char: '🌮', left: '62%', top: '92%', speed: 0.8, size: 'text-6xl' },
    { char: '🛸', left: '22%', top: '3%', speed: 1.2, size: 'text-5xl' },
    { char: '🦁', left: '55%', top: '72%', speed: 0.3, size: 'text-6xl' },
  ];

  const scrollToMagia = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden px-6 py-20">
      {/* Botão Reservar Agora */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
        <a 
          href="https://wa.me/5515999999999" 
          target="_blank" 
          className="bg-brand-turquoise text-white font-black py-2.5 px-6 rounded-full shadow-[0_5px_0_#0891b2] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 active:translate-y-1 text-xs md:text-sm uppercase tracking-widest whitespace-nowrap"
        >
          RESERVAR AGORA 🚀
        </a>
      </div>

      {/* Background Glows with Parallax */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/30 rounded-full blur-[120px] animate-pulse-glow will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
      ></div>
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-pink/30 rounded-full blur-[120px] animate-pulse-glow will-change-transform" 
        style={{animationDelay: '1.5s', transform: `translate3d(0, ${scrollY * -0.2}px, 0)` }}
      ></div>
      
      {/* Emojis Layer with Parallax */}
      {extraEmojis.map((e, i) => (
        <div 
          key={i}
          className={`absolute pointer-events-none select-none ${e.size} ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'} opacity-60 transition-transform duration-100 will-change-transform`}
          style={{ 
            left: e.left, 
            top: e.top, 
            transform: `translate3d(0, ${scrollY * e.speed}px, 0)`,
            animationDelay: `${i * 0.2}s`
          }}
        >
          {e.char}
        </div>
      ))}

      <div className="container mx-auto relative z-10 text-center max-w-5xl">
        {/* Badget com paralaxe leve */}
        <div 
          className="inline-block glass-card px-8 py-3 rounded-full text-brand-yellow font-bold mb-14 border border-white/20 shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-bounce-soft uppercase tracking-[0.3em] text-xs will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        >
          ✨ O REINO DA DIVERSÃO E DO BRILHO ✨
        </div>
        
        {/* Títulos com paralaxe escalonado */}
        <div className="mb-10 space-y-4">
          <div 
            className="bubble-base bubble-yellow text-4xl md:text-6xl lg:text-7xl font-fredoka mb-4 will-change-transform"
            style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) rotate(1.5deg)` }}
          >
            A FESTA MAIS
          </div>
          <br />
          <div 
            className="bubble-base bubble-purple text-5xl md:text-8xl lg:text-9xl font-fredoka animate-wiggle will-change-transform"
            style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0) rotate(-2deg)` }}
          >
            MÁGICA
          </div>
          <br />
          <div 
            className="bubble-base bubble-yellow text-4xl md:text-6xl lg:text-7xl font-fredoka will-change-transform"
            style={{ transform: `translate3d(0, ${scrollY * 0.55}px, 0) rotate(1.5deg)` }}
          >
            ESTÁ AQUI!
          </div>
        </div>
        
        {/* Parágrafo com paralaxe lento */}
        <p 
          className="text-xl md:text-3xl text-purple-100 mb-16 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        >
          No Buffet Infantil, cada segundo é uma explosão de cores e alegria no coração do Wanel Ville.
        </p>
        
        {/* Botão de ação com paralaxe invertido leve para "flutuar" */}
        <div 
          className="flex flex-col sm:flex-row gap-8 justify-center items-center will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
        >
          <button 
            onClick={scrollToMagia}
            className="group relative inline-flex items-center gap-3 bg-brand-purple text-white text-xl md:text-2xl font-black py-5 px-10 rounded-full shadow-[0_8px_0_#7e22ce] hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] transition-all transform hover:scale-105 active:scale-95 active:translate-y-1 overflow-hidden animate-pulse-glow font-fredoka"
          >
            <div className="absolute inset-0 animate-shimmer shimmer-btn"></div>
            <span className="relative z-10 flex flex-col items-center">
              CONHECER A MAGIA 🎡
              <span className="text-lg animate-bounce mt-1">✨</span>
            </span>
          </button>
        </div>
      </div>

      {/* Onda inferior (Estática para fechar a seção) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <div className="h-2 w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-turquoise shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;