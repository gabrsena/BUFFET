
import React, { useMemo } from 'react';

interface Props {
  scrollY: number;
}

const BackgroundEmoji: React.FC<{ 
  emoji: string;
  left: string; 
  top: number; 
  size: string; 
  speed: number; 
  delay: string;
  scrollY: number;
  rotation: number;
}> = ({ emoji, left, top, size, speed, delay, scrollY, rotation }) => {
  // Parallax: os emojis sobem conforme o scroll desce
  const translateY = scrollY * speed;

  return (
    <div 
      className="fixed z-0 pointer-events-none transition-transform duration-100 ease-out select-none"
      style={{ 
        left, 
        top: `${top}px`, 
        transform: `translateY(-${translateY}px) rotate(${rotation}deg)`,
      }}
    >
      <div 
        className={`animate-float opacity-[0.08] blur-[0.5px] ${size}`}
        style={{ animationDelay: delay }}
      >
        {emoji}
      </div>
    </div>
  );
};

const EmojisLayer: React.FC<Props> = ({ scrollY }) => {
  // Gerando 180 emojis (10x a quantidade anterior) proceduralmente
  const generatedEmojis = useMemo(() => {
    const emojiPool = ['🍭', '🍿', '🎪', '🎨', '🍦', '🧸', '🎈', '🍰', '🎠', '🍔', '🍕', '🍩', '🌟', '🥳', '🥨', '🧩', '🪁', '🍫', '🎁', '🎂', '🧁', '🎡', '🚀', '🦖', '🧸', '🌈', '✨', '⚡'];
    const sizes = ['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl'];
    
    return Array.from({ length: 180 }).map((_, i) => ({
      emoji: emojiPool[i % emojiPool.length],
      // Distribuição horizontal espalhada
      left: `${(i * 13.7) % 100}%`,
      // Distribuição vertical ao longo de toda a página (estimada em 8000px de altura total)
      top: (i * 45) + (Math.random() * 100), 
      size: sizes[i % sizes.length],
      // Velocidades variadas para efeito de profundidade
      speed: 0.1 + (Math.random() * 0.4),
      delay: `${(i * 0.1).toFixed(1)}s`,
      rotation: Math.floor(Math.random() * 40) - 20 // Rotação aleatória entre -20 e 20 graus
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {generatedEmojis.map((e, i) => (
        <BackgroundEmoji key={i} {...e} scrollY={scrollY} />
      ))}
    </div>
  );
};

export default EmojisLayer;
