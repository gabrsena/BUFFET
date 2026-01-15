
import React from 'react';

interface Props {
  scrollY: number;
}

const Balloon: React.FC<{ 
  left: string; 
  top: number; 
  size: number; 
  color: string; 
  speed: number; 
  delay: string;
  scrollY: number;
  rotation: number;
}> = ({ left, top, size, color, speed, delay, scrollY, rotation }) => {
  // Parallax: os balões sobem conforme o scroll desce
  const translateY = scrollY * speed;

  return (
    <div 
      className={`fixed z-0 pointer-events-none transition-transform duration-100 ease-out`}
      style={{ 
        left, 
        top: `${top}px`, 
        transform: `translateY(-${translateY}px) rotate(${rotation}deg)`,
      }}
    >
      <div 
        className={`rounded-full animate-float ${color} opacity-40 blur-[1px] border-2 border-white/30 shadow-inner relative`}
        style={{ 
          width: `${size}px`, 
          height: `${size * 1.3}px`, 
          animationDelay: delay,
          boxShadow: `inset -5px -10px 20px rgba(0,0,0,0.1), 0 0 25px ${color.includes('purple') ? '#9333ea' : color.includes('pink') ? '#db2777' : color.includes('yellow') ? '#facc15' : '#06b6d4'}`
        }}
      >
        {/* Reflexo do balão */}
        <div className="absolute top-3 left-3 w-1/3 h-1/4 bg-white/40 rounded-full blur-[2px]"></div>
        
        {/* Nózinho do balão */}
        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-2 ${color} clip-triangle`}></div>
      </div>
      {/* Linha do balão */}
      <div className="w-0.5 h-20 bg-white/10 mx-auto -mt-1 opacity-50"></div>
    </div>
  );
};

const BalloonsLayer: React.FC<Props> = ({ scrollY }) => {
  // Uma lista expandida de balões para cobrir toda a extensão vertical do site
  const colors = ['bg-brand-purple', 'bg-brand-pink', 'bg-brand-turquoise', 'bg-brand-yellow', 'bg-brand-orange'];
  
  // Gerando um set de 40 balões com propriedades variadas
  const balloons = Array.from({ length: 40 }).map((_, i) => ({
    left: `${(i * 7.7) % 100}%`, // Distribuição horizontal
    top: i * 250 + 100, // Distribuição vertical inicial (espalhados pelo documento)
    size: 40 + (i % 4) * 25, // Tamanhos: 40, 65, 90, 115
    color: colors[i % colors.length],
    speed: 0.4 + (i % 5) * 0.3, // Velocidades variadas de subida
    delay: `${(i % 10) * 0.5}s`,
    rotation: (i % 3 === 0) ? -10 : (i % 3 === 1) ? 10 : 0
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {balloons.map((b, i) => (
        <Balloon key={i} {...b} scrollY={scrollY} />
      ))}
    </div>
  );
};

export default BalloonsLayer;
