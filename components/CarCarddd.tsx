
import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  isSelectedForComparison: boolean;
  onCtaClick: (url: string, carName: string, action: string) => void;
  onCompareToggle: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, isSelectedForComparison, onCtaClick, onCompareToggle }) => {
  return (
    <div className={`relative w-full h-[320px] md:h-[240px] mb-4 group overflow-hidden border shadow-lg bg-black transition-all duration-300 ${isSelectedForComparison ? 'border-[#ffcc00] ring-4 ring-[#ffcc00]/30' : 'border-gray-300'}`}>
      {/* Background Image */}
      <img 
        src={car.imageUrl} 
        alt={car.model} 
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 car-card-bg"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6">
        <div className="flex flex-col items-start w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-4xl md:text-5xl font-oswald font-bold text-[#ffcc00] drop-shadow-lg">{car.rank}.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
              {car.name} <span className="text-gray-100">{car.model}</span>
            </h2>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base italic mb-6 max-w-sm drop-shadow-sm">
            {car.description}
          </p>

          <div className="flex gap-3">
            <button 
              onClick={() => onCompareToggle(car)}
              className={`${isSelectedForComparison ? 'bg-white text-black' : 'bg-[#1a4584] text-white hover:bg-[#14325a]'} px-5 py-2 rounded flex items-center gap-2 text-xs font-bold transition-all shadow-md active:scale-95`}
            >
              <i className={`fa-solid ${isSelectedForComparison ? 'fa-xmark' : 'fa-right-left'}`}></i> 
              {isSelectedForComparison ? 'Cancel Selection' : 'Compare'}
            </button>
            <button 
              onClick={() => onCtaClick(car.distributorUrl, `${car.name} ${car.model}`, 'See Offers')}
              className="bg-[#ffcc00] hover:bg-[#e6b800] text-black px-5 py-2 rounded flex items-center gap-2 text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <i className="fa-solid fa-tag"></i> See Offers
            </button>
          </div>
        </div>

        {/* Optional Right Side Stats (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-end text-white/60 group-hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest font-bold">MSRP from</span>
          <span className="text-2xl font-oswald font-bold text-[#ffcc00]">{car.stats.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
