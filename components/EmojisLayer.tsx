
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
  // Gerando 450 emojis (aumentado para máxima densidade visual) proceduralmente
  const generatedEmojis = useMemo(() => {
    const emojiPool = [
      '🍭', '🍿', '🎪', '🎨', '🍦', '🧸', '🎈', '🍰', '🎠', '🍔', '🍕', '🍩', '🌟', '🥳', 
      '🥨', '🧩', '🪁', '🍫', '🎁', '🎂', '🧁', '🎡', '🚀', '🦖', '🧸', '🌈', '✨', '⚡',
      '🍉', '🍓', '🍒', '🍍', '🌮', '🥞', '🛸', '🧞', '🧚', '🦄', '🐯', '🦊', '🐼', '🦁',
      '🎸', '🥁', '🎷', '🎭', '🎨', '🎬', '🏆', '🥇', '👑', '💎', '🔮', '🧿'
    ];
    const sizes = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl'];
    
    return Array.from({ length: 450 }).map((_, i) => ({
      emoji: emojiPool[i % emojiPool.length],
      // Distribuição horizontal espalhada com um pouco mais de variação aleatória
      left: `${(i * 17.3 + Math.random() * 5) % 100}%`,
      // Distribuição vertical ao longo de toda a página (densidade aumentada)
      top: (i * 25) + (Math.random() * 200), 
      size: sizes[i % sizes.length],
      // Velocidades variadas para efeito de profundidade (3D parallax effect)
      speed: 0.05 + (Math.random() * 0.5),
      delay: `${(i * 0.05).toFixed(2)}s`,
      rotation: Math.floor(Math.random() * 360) - 180 // Rotação total permitida para variedade
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
