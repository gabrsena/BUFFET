import React, { useMemo } from 'react';

interface Props {
  scrollY: number;
}

const EmojisLayer: React.FC<Props> = ({ scrollY }) => {
  const emojis = useMemo(() => {
    const pool = ['🍭', '🍿', '🎪', '🎨', '🍦', '🧸', '🎈', '🍰', '🎠', '🍔', '🍕', '🍩', '🌟', '🥳', '🧁', '🎡', '🚀', '🦖', '🌈', '✨', '🎸', '🎮', '🧩', '🪁'];
    return Array.from({ length: 650 }).map((_, i) => ({
      char: pool[i % pool.length],
      left: `${(i * 13.7 + Math.random() * 5) % 100}%`,
      top: (i * 20) + (Math.random() * 100),
      speed: 0.05 + (Math.random() * 0.4),
      size: ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'][i % 5],
      delay: `${Math.random() * 5}s`,
      rotate: Math.random() * 360
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {emojis.map((e, i) => (
        <div 
          key={i}
          className={`fixed transition-transform duration-100 ease-out select-none opacity-[0.1] blur-[0.2px] animate-float ${e.size}`}
          style={{ 
            left: e.left, 
            top: `${e.top}px`, 
            animationDelay: e.delay,
            transform: `translateY(-${scrollY * e.speed}px) rotate(${e.rotate}deg)`
          }}
        >
          {e.char}
        </div>
      ))}
    </div>
  );
};

export default EmojisLayer;