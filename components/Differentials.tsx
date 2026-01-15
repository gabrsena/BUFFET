
import React from 'react';
import { UtensilsCrossed, ShieldCheck, PartyPopper, Star } from 'lucide-react';

interface Props {
  scrollY: number;
}

const differentials = [
  {
    title: "Buffet Estelar",
    description: "Salgadinhos crocantes e doces que brilham no paladar de todos!",
    icon: <UtensilsCrossed className="w-14 h-14" />,
    color: "text-brand-pink",
    glowColor: "rgba(219, 39, 119, 0.5)",
    borderColor: "border-brand-pink/50",
    offset: "lg:-mt-12", // Estágio visual
    anim: "animate-float"
  },
  {
    title: "Segurança Neon",
    description: "Monitores treinados e ambiente 100% monitorado com tecnologia.",
    icon: <ShieldCheck className="w-14 h-14" />,
    color: "text-brand-purple",
    glowColor: "rgba(147, 51, 234, 0.5)",
    borderColor: "border-brand-purple/50",
    offset: "lg:mt-12", // Estágio visual
    anim: "animate-float-delayed"
  },
  {
    title: "Recreação VIP",
    description: "Gincanas neon e animadores que são verdadeiras estrelas!",
    icon: <PartyPopper className="w-14 h-14" />,
    color: "text-brand-turquoise",
    glowColor: "rgba(6, 182, 212, 0.5)",
    borderColor: "border-brand-turquoise/50",
    offset: "lg:-mt-12", // Estágio visual
    anim: "animate-float"
  }
];

const Differentials: React.FC<Props> = ({ scrollY }) => {
  return (
    <section className="py-32 px-6 bg-transparent overflow-hidden relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center gap-2 mb-8">
             <Star className="w-10 h-10 text-brand-yellow fill-current animate-bounce" />
             <Star className="w-10 h-10 text-brand-yellow fill-current animate-bounce delay-100" />
             <Star className="w-10 h-10 text-brand-yellow fill-current animate-bounce delay-200" />
          </div>
          
          <div className="mb-8">
            <div className="bubble-base bubble-purple text-4xl md:text-7xl font-fredoka font-balloon mb-4">
              POR QUE O
            </div>
            <br />
            <div className="bubble-base bubble-yellow text-4xl md:text-7xl font-fredoka font-balloon">
              BUFFET INFANTIL?
            </div>
          </div>
          
          <p className="text-2xl text-purple-200 max-w-2xl mx-auto font-black uppercase tracking-[0.2em] drop-shadow-lg font-fredoka">
            Excelência que brilha muito!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {differentials.map((diff, idx) => (
            <div 
              key={idx} 
              className={`p-12 rounded-[3.5rem] border-2 ${diff.borderColor} glass-card shadow-xl hover:shadow-[0_0_50px_${diff.glowColor}] transition-all flex flex-col items-center text-center group cursor-pointer ${diff.offset} ${diff.anim}`}
              style={{ animationDuration: '5s' }}
            >
              <div className={`mb-10 p-8 rounded-full bg-white/5 ${diff.color} shadow-inner group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 border-2 border-dashed border-white/20`}>
                {diff.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 text-white drop-shadow-md group-hover:neon-text-yellow transition-all font-fredoka">{diff.title}</h3>
              <p className="text-lg text-purple-100/80 leading-relaxed font-bold italic">{diff.description}</p>
              
              {/* Decorative sparkle on hover */}
              <div className="absolute top-8 right-8 text-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">✨</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
