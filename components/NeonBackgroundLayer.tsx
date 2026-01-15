
import React from 'react';

const NeonBackgroundLayer: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0f172a]">
      {/* Dynamic Pulsing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-purple/20 rounded-full blur-[120px] animate-blob-move opacity-40"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-brand-pink/15 rounded-full blur-[100px] animate-blob-move opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[10%] left-[5%] w-[55vw] h-[55vw] bg-brand-turquoise/20 rounded-full blur-[110px] animate-blob-move opacity-40" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[45vw] h-[45vw] bg-brand-yellow/15 rounded-full blur-[130px] animate-blob-move opacity-30" style={{ animationDelay: '6s' }}></div>
      
      {/* Central Pulsing Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-brand-purple/5 via-transparent to-brand-turquoise/5 animate-pulse-slow"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </div>
  );
};

export default NeonBackgroundLayer;
