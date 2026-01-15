import React from 'react';

const NeonBackgroundLayer: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none bg-[#0f172a]">
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-brand-purple/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-pink/15 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-brand-turquoise/10 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '8s' }}></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
  );
};

export default NeonBackgroundLayer;