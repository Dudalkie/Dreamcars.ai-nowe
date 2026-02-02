
import React, { useState, useCallback, useMemo } from 'react';
import CarCard from './components/CarCard';
import { CARS_DATA } from './constants';
import { TrackingEvent, Car } from './types';

const trackEvent = ({ category, action, label }: TrackingEvent) => {
  console.log(`GA4 Track: [${category}] ${action} - ${label}`);
};

const App: React.FC = () => {
  const [showTopThree, setShowTopThree] = useState(false);
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const handleCtaClick = useCallback((url: string, carName: string, action: string) => {
    trackEvent({
      category: 'Conversion',
      action: action,
      label: carName
    });
    window.open(url, '_blank');
  }, []);

  const handleRevealClick = () => {
    trackEvent({
      category: 'Engagement',
      action: 'Reveal Top 3',
      label: 'Main List Reveal'
    });
    setShowTopThree(true);
  };

  const handleCompareToggle = (car: Car) => {
    setSelectedCars(prev => {
      const alreadySelected = prev.find(c => c.rank === car.rank);
      if (alreadySelected) {
        return prev.filter(c => c.rank !== car.rank);
      }
      if (prev.length >= 2) {
        return [prev[0], car];
      }
      return [...prev, car];
    });

    trackEvent({
      category: 'Interaction',
      action: 'Select for Comparison',
      label: `${car.name} ${car.model}`
    });
  };

  const clearComparison = () => setSelectedCars([]);

  const comparisonModal = useMemo(() => {
    if (selectedCars.length < 2) return null;
    const [c1, c2] = selectedCars;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/95 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
        <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh]">
          
          <div className="flex justify-between items-center px-6 py-4 bg-[#14325a] text-white shrink-0 border-b-4 border-[#ffcc00]">
            <button 
              onClick={clearComparison}
              className="flex items-center gap-2 bg-[#ffcc00] hover:bg-white text-black font-black uppercase text-[11px] tracking-widest transition-all px-4 py-2 rounded shadow-lg active:scale-95"
            >
              <i className="fa-solid fa-arrow-left"></i> GO BACK TO LIST
            </button>
            <div className="text-center hidden sm:block">
              <h2 className="text-xl font-oswald font-bold uppercase italic leading-none">Matchup Analysis</h2>
            </div>
            <button 
              onClick={clearComparison}
              className="text-white/50 hover:text-white transition-colors text-3xl"
              aria-label="Close Comparison"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="overflow-hidden flex-grow flex flex-col">
            <div className="grid grid-cols-3 divide-x divide-gray-100 bg-gray-50 shrink-0 border-b border-gray-100">
              <div className="flex items-center justify-center font-oswald font-bold text-gray-300 italic text-3xl md:text-5xl select-none">VS</div>
              
              <div className="p-4 flex flex-col items-center">
                <div className="w-full max-w-[200px] aspect-video mb-3 rounded-lg overflow-hidden shadow-xl ring-2 ring-white bg-black">
                  <img src={c1.imageUrl} className="w-full h-full object-cover" alt={c1.model} />
                </div>
                <h4 className="font-oswald font-bold text-lg md:text-xl text-[#1a4584] leading-tight text-center">{c1.name}</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{c1.model}</p>
              </div>

              <div className="p-4 flex flex-col items-center">
                <div className="w-full max-w-[200px] aspect-video mb-3 rounded-lg overflow-hidden shadow-xl ring-2 ring-white bg-black">
                  <img src={c2.imageUrl} className="w-full h-full object-cover" alt={c2.model} />
                </div>
                <h4 className="font-oswald font-bold text-lg md:text-xl text-[#1a4584] leading-tight text-center">{c2.name}</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{c2.model}</p>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar">
              {[
                { label: 'Est. Base MSRP', val1: c1.stats.price, val2: c2.stats.price },
                { label: 'Max Horsepower', val1: `${c1.stats.hp} HP`, val2: `${c2.stats.hp} HP` },
                { label: '0-60 Time', val1: c1.stats.zeroToSixty, val2: c2.stats.zeroToSixty },
                { label: 'Top Track Speed', val1: c1.stats.topSpeed, val2: c2.stats.topSpeed },
                { label: 'Cargo Volume', val1: c1.stats.cargoSpace, val2: c2.stats.cargoSpace }
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}>
                  <div className="flex items-center justify-center p-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
                    {row.label}
                  </div>
                  <div className="flex items-center justify-center p-3 font-oswald font-bold text-lg md:text-2xl text-gray-800 text-center">
                    {row.val1}
                  </div>
                  <div className="flex items-center justify-center p-3 font-oswald font-bold text-lg md:text-2xl text-gray-800 text-center">
                    {row.val2}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 divide-x divide-gray-100 bg-gray-100 p-4 shrink-0 border-t border-gray-200">
              <div className="hidden sm:flex flex-col justify-center px-4">
                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Matchup Ready</span>
                 <p className="text-[10px] text-gray-500 font-bold italic">Check local deals</p>
              </div>
              <div className="px-2">
                <button 
                  onClick={() => handleCtaClick(c1.distributorUrl, `${c1.name} ${c1.model}`, 'Comp Modal Offer')}
                  className="w-full bg-[#ffcc00] hover:bg-black hover:text-white text-black font-black py-4 rounded text-[11px] uppercase tracking-[0.15em] transition-all shadow-md active:scale-95"
                >
                  Offers
                </button>
              </div>
              <div className="px-2">
                <button 
                  onClick={() => handleCtaClick(c2.distributorUrl, `${c2.name} ${c2.model}`, 'Comp Modal Offer')}
                  className="w-full bg-[#ffcc00] hover:bg-black hover:text-white text-black font-black py-4 rounded text-[11px] uppercase tracking-[0.15em] transition-all shadow-md active:scale-95"
                >
                  Offers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [selectedCars, handleCtaClick]);

  const visibleRanks = CARS_DATA.filter(c => c.rank <= 10 && c.rank >= 4).sort((a, b) => b.rank - a.rank);
  const hiddenRanks = CARS_DATA.filter(c => c.rank <= 3).sort((a, b) => b.rank - a.rank);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Semi-transparent to let body background through */}
      <section className="relative py-16 md:py-32 px-6 text-center text-white overflow-hidden">
        {/* Subtle top-heavy overlay for readability in hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1321]/40 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-[#ffcc00] text-black px-4 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl animate-pulse">
            2026 OFFICIAL RANKINGS
          </div>
          <h1 className="text-5xl md:text-9xl font-oswald font-bold uppercase italic leading-none mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Top <span className="text-[#ffcc00]">10</span> SUV <br className="hidden md:block" /> <span className="text-[#ffcc00]">2026</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-wide mb-12 max-w-2xl mx-auto text-white drop-shadow-lg leading-relaxed">
            The definitive compact SUV evaluation. Select any two vehicles for a side-by-side performance analysis.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
             className="bg-[#ffcc00] text-black hover:bg-white px-12 py-6 rounded-xl font-black uppercase text-sm tracking-[0.2em] transition-all shadow-2xl hover:scale-105 active:scale-95 group"
          >
            Explore the List <i className="fa-solid fa-chevron-down ml-2 group-hover:translate-y-1 transition-transform"></i>
          </button>
        </div>
      </section>

      {/* Main Content with semi-translucent bg to show body image */}
      <main className="max-w-5xl mx-auto px-4 pb-32 relative z-10">
        <div className="mb-8">
          {visibleRanks.map(car => (
            <CarCard 
              key={car.rank} 
              car={car} 
              isSelectedForComparison={!!selectedCars.find(c => c.rank === car.rank)}
              onCtaClick={handleCtaClick} 
              onCompareToggle={handleCompareToggle}
            />
          ))}
        </div>

        {!showTopThree ? (
          <div className="mt-16 relative overflow-hidden rounded-3xl border-2 border-dashed border-gray-400/30 bg-white/40 backdrop-blur-md shadow-2xl group transition-all hover:bg-white/50">
            <div className="flex flex-col items-center justify-center py-24 px-8 text-center relative z-10">
              <div className="relative mb-8 group-hover:scale-110 transition-transform duration-700">
                <div className="w-28 h-28 bg-[#14325a] rounded-full flex items-center justify-center shadow-2xl relative">
                  <i className="fa-solid fa-trophy text-[#ffcc00] text-5xl"></i>
                  <div className="absolute inset-0 border-4 border-[#ffcc00] rounded-full animate-ping opacity-10"></div>
                </div>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-oswald font-bold text-gray-900 uppercase italic mb-6 leading-tight">
                Unlock the <span className="text-[#1a4584]">Top 3</span>
              </h3>
              <p className="text-gray-600 mb-12 max-w-lg text-lg font-medium leading-relaxed">
                Our elite finalists represent the cutting edge of automotive engineering. Access the podium to see the #1 pick of 2026.
              </p>
              
              <button 
                onClick={handleRevealClick}
                className="group relative bg-[#1a4584] hover:bg-[#14325a] text-white px-24 py-7 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center gap-4 transition-all shadow-[0_30px_60px_-15px_rgba(26,69,132,0.4)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-xl">REVEAL CHAMPIONS</span>
                <i className="fa-solid fa-bolt-lightning text-[#ffcc00] relative z-10"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <div className="flex items-center gap-8 py-16">
              <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent opacity-40"></div>
              <h3 className="text-4xl font-oswald font-bold text-gray-900 uppercase italic tracking-widest">The Elite Podium</h3>
              <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-[#ffcc00] to-transparent opacity-40"></div>
            </div>
            
            {hiddenRanks.map(car => (
              <CarCard 
                key={car.rank} 
                car={car} 
                isSelectedForComparison={!!selectedCars.find(c => c.rank === car.rank)}
                onCtaClick={handleCtaClick} 
                onCompareToggle={handleCompareToggle}
              />
            ))}
            
            <div className="text-center py-24">
               <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md hover:bg-black hover:text-white px-12 py-5 rounded-full text-gray-700 font-black uppercase text-xs tracking-[0.4em] transition-all shadow-xl border border-gray-200"
               >
                 <i className="fa-solid fa-arrow-up"></i> Return to Rankings
               </button>
            </div>
          </div>
        )}
      </main>

      {comparisonModal}

      {/* Floating Selection Indicator */}
      {selectedCars.length === 1 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[90] bg-black/90 backdrop-blur-lg text-white px-8 py-5 rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-white/20 flex items-center gap-8 animate-[bounceIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)]">
           <div className="flex flex-col">
             <span className="text-[10px] font-black text-[#ffcc00] uppercase tracking-[0.4em] mb-1">Pick opponent</span>
             <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
               Selected: <span className="italic text-[#ffcc00]">{selectedCars[0].name} {selectedCars[0].model}</span>
             </span>
           </div>
           <div className="h-10 w-[1px] bg-white/20"></div>
           <button onClick={clearComparison} className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/30 text-white/50 hover:text-white transition-all flex items-center justify-center">
             <i className="fa-solid fa-xmark"></i>
           </button>
        </div>
      )}

      {/* Aesthetic Footer */}
      <footer className="py-32 px-8 text-center bg-white/50 backdrop-blur-xl border-t border-gray-200/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] mb-8 text-gray-800 opacity-60">DreamCars.ai Global Reports</p>
          <p className="text-xs uppercase tracking-[0.2em] leading-relaxed font-semibold text-gray-500 max-w-3xl mx-auto opacity-70">
            Proprietary 2026 intelligence derived from standardized manufacturer specification sheets and independent real-world logging. MSRP and performance figures represent the United States market as of January 2026.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: translate(-50%, 150%) scale(0.9); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;