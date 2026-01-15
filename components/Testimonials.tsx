
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  quote: string;
  avatar: string;
  label: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mariana Silva",
    quote: "A festa do meu filho foi simplesmente inesquecível! O buffet é maravilhoso e a equipe de recreação não deixou ninguém parado. O Atelie Kids realmente brilha!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    label: "Mãe da aniversariante",
    color: "border-brand-purple"
  },
  {
    name: "Ricardo Santos",
    quote: "Melhor salão do Wanel Ville. Segurança nota 10 e os brinquedos são muito modernos. Meus convidados elogiaram muito a organização e a limpeza.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    label: "Pai do aniversariante",
    color: "border-brand-turquoise"
  },
  {
    name: "Carla Oliveira",
    quote: "Cada detalhe planejado com muito carinho. O efeito neon da festa foi o ponto alto! Recomendo de olhos fechados para quem busca qualidade em Sorocaba.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    label: "Mãe de aniversariante",
    color: "border-brand-pink"
  }
];

interface Props {
  scrollY: number;
}

const Testimonials: React.FC<Props> = ({ scrollY }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-pink/5 rounded-full blur-[120px] animate-pulse-glow"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.05}px))` }}
      ></div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="mb-20">
          <div className="bubble-base bubble-purple text-4xl md:text-6xl font-fredoka font-balloon mb-4">
            O QUE OS PAIS
          </div>
          <br />
          <div className="bubble-base bubble-yellow text-4xl md:text-6xl font-fredoka font-balloon">
            DAS ESTRELAS DIZEM!
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[3rem] glass-card border border-white/10 p-12 md:p-20 shadow-2xl text-left">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col items-center text-center">
                  <div className="relative mb-10">
                    <div className={`w-32 h-32 rounded-full border-4 ${t.color} p-1 shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-float-delayed overflow-hidden`}>
                      <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-brand-yellow p-2 rounded-full shadow-lg">
                      <Quote className="w-6 h-6 text-brand-purple fill-current" />
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-brand-yellow fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-purple-100 font-medium italic mb-10 leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
                    "{t.quote}"
                  </p>
                  
                  <h4 className="text-2xl font-black text-brand-yellow uppercase tracking-widest font-fredoka">
                    {t.name}
                  </h4>
                  <p className="text-brand-turquoise font-bold mt-1 text-sm tracking-widest uppercase">{t.label}</p>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 p-4 bg-brand-purple text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 z-20 border border-white/20"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 p-4 bg-brand-purple text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 z-20 border border-white/20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-brand-yellow w-12 shadow-[0_0_15px_#facc15]' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
