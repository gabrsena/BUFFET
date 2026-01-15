
import React from 'react';
import { MapPin } from 'lucide-react';

interface Props { scrollY: number; }

const Location: React.FC<Props> = ({ scrollY }) => {
  return (
    <section className="py-32 px-6 bg-transparent text-white relative overflow-hidden">
      {/* Intense Background Glows with Parallax */}
      <div 
        className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-turquoise/10 rounded-full blur-[150px] animate-pulse"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      ></div>
      <div 
        className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-purple/10 rounded-full blur-[150px] animate-pulse" 
        style={{animationDelay: '1.5s', transform: `translateY(${scrollY * -0.06}px)` }}
      ></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center mb-16">
            <div className="bubble-base bubble-purple text-4xl md:text-7xl font-balloon mb-4 font-fredoka">
              ONDE
            </div>
            <br />
            <div className="bubble-base bubble-yellow text-4xl md:text-7xl font-balloon font-fredoka">
              ESTAMOS
            </div>
          </div>

          <div className="w-full relative">
            <div className="p-2 glass-card rounded-[3.5rem] shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.01] duration-500 border border-white/20 overflow-hidden relative group">
               
               {/* Radar Scan Animation Overlay */}
               <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-[3rem]">
                  <div className="w-full h-1 bg-brand-turquoise/40 shadow-[0_0_20px_#06b6d4] absolute top-0 left-0 animate-[scan_4s_linear_infinite]"></div>
                  
                  {/* Pulsing Pin Indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 bg-brand-pink/30 rounded-full animate-ping"></div>
                      <div className="absolute w-12 h-12 bg-brand-pink/50 rounded-full animate-pulse shadow-[0_0_20px_#db2777]"></div>
                      <MapPin className="w-8 h-8 text-white relative z-20 drop-shadow-lg" />
                    </div>
                  </div>
               </div>

               {/* Embed do Google Maps Sorocaba */}
               <div className="w-full aspect-video rounded-[3rem] overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117081.98305739347!2d-47.53039645!3d-23.50422175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f5909240366b%3A0xc3f1738779836369!2sSorocaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-[1.2] invert opacity-80"
                  ></iframe>
               </div>
            </div>
            
            {/* Overlay link para abrir mapa */}
            <a 
              href="https://www.google.com/maps/search/Wanel+Ville+Sorocaba" 
              target="_blank" 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-brand-turquoise text-white font-black py-4 px-10 rounded-full shadow-[0_8px_0_#0891b2] hover:scale-110 active:translate-y-1 transition-all flex items-center gap-3 uppercase text-sm tracking-widest whitespace-nowrap z-20 font-fredoka"
            >
              <MapPin className="w-5 h-5" /> Ver no Google Maps
            </a>

            {/* Glow beneath map */}
            <div className="absolute -inset-4 bg-brand-turquoise/5 blur-3xl rounded-[3rem] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Location;
