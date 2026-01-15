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
        className={`animate-float opacity-[0.12] blur-[0.3px] ${size}`}
        style={{ animationDelay: delay }}
      >
        {emoji}
      </div>
    </div>
  );
};

const EmojisLayer: React.FC<Props> = ({ scrollY }) => {
  // Gerando 650 emojis para máxima densidade visual
  const generatedEmojis = useMemo(() => {
    const emojiPool = [
      '🍭', '🍿', '🎪', '🎨', '🍦', '🧸', '🎈', '🍰', '🎠', '🍔', '🍕', '🍩', '🌟', '🥳', 
      '🥨', '🧩', '🪁', '🍫', '🎁', '🎂', '🧁', '🎡', '🚀', '🦖', '🧸', '🌈', '✨', '⚡',
      '🍉', '🍓', '🍒', '🍍', '🌮', '🥞', '🛸', '🧞', '🧚', '🦄', '🐯', '🦊', '🐼', '🦁',
      '🎸', '🥁', '🎷', '🎭', '🎨', '🎬', '🏆', '🥇', '👑', '💎', '🔮', '🧿', '👻', '👾',
      '🤖', '🌞', '🌙', '🌏', '🌋', '🌊', '🪁', '🧸', '🪀', '🎮', '🎳', '🎯', '🎈'
    ];
    const sizes = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'];
    
    return Array.from({ length: 650 }).map((_, i) => ({
      emoji: emojiPool[i % emojiPool.length],
      left: `${(i * 13.7 + Math.random() * 8) % 100}%`,
      top: (i * 18) + (Math.random() * 150), 
      size: sizes[i % sizes.length],
      speed: 0.03 + (Math.random() * 0.45),
      delay: `${(Math.random() * 5).toFixed(2)}s`,
      rotation: Math.floor(Math.random() * 360) - 180
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