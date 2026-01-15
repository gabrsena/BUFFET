
import React from 'react';
import { Zap, Baby, Mountain, Gamepad2 } from 'lucide-react';

interface Props {
  scrollY: number;
}

const activities = [
  {
    icon: <Zap className="w-16 h-16 text-white" />,
    title: "Super Brinquedão",
    color: "bg-brand-purple",
    glow: "shadow-[0_0_30px_rgba(147,51,234,0.5)]",
    neonAnim: "animate-neon-purple",
    emoji: "🏰",
    description: "Desafios luminosos!"
  },
  {
    icon: <Baby className="w-16 h-16 text-white" />,
    title: "Área Baby Glow",
    color: "bg-brand-pink",
    glow: "shadow-[0_0_30px_rgba(219,39,119,0.5)]",
    neonAnim: "animate-neon-pink",
    emoji: "🍼",
    description: "Cuidado e carinho."
  },
  {
    icon: <Mountain className="w-16 h-16 text-white" />,
    title: "Tirolesa Neon",
    color: "bg-brand-turquoise",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    neonAnim: "animate-neon-turquoise",
    emoji: "🧗",
    description: "Voe nas cores!"
  },
  {
    icon: <Gamepad2 className="w-16 h-16 text-white" />,
    title: "Arena Games",
    color: "bg-brand-yellow",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.5)]",
    neonAnim: "animate-neon-yellow",
    emoji: "🎮",
    description: "Muita luz e ação!"
  }
];

const GalleryIcons: React.FC<Props> = ({ scrollY }) => {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-pattern opacity-5"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
      {/* Background Glows */}
      <div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-brand-purple/10 blur-[100px]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-pink/10 blur-[100px]"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      ></div>
      
      <div className="container mx-auto text-center max-w-6xl relative z-10">
        <div className="mb-20">
          <div className="bubble-base bubble-purple text-4xl md:text-7xl font-fredoka font-balloon mb-4">
            DIVERSÃO
          </div>
          <br />
          <div className="bubble-base bubble-yellow text-4xl md:text-7xl font-fredoka font-balloon italic">
            RADIANTE!
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {activities.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative group glass-card p-12 rounded-[3.5rem] shadow-2xl transition-all hover:-translate-y-6 hover:bg-white/5 overflow-hidden border border-white/10`}
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${item.color} ${item.glow}`}></div>
              <div className={`${item.color} ${item.glow} w-28 h-28 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:rotate-12 transition-transform shadow-2xl border-2 border-white/30 overflow-hidden`}>
                <div className={`${item.neonAnim}`}>
                  {item.icon}
                </div>
              </div>
              <div className="text-5xl mb-6 group-hover:scale-150 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{item.emoji}</div>
              <h3 className="text-2xl font-black text-white mb-4 drop-shadow-md font-fredoka">{item.title}</h3>
              <p className="text-purple-100/70 font-bold leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryIcons;
