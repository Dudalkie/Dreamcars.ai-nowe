
import { Car } from './types';

export const CARS_DATA: Car[] = [
  {
    rank: 10,
    name: "Volvo",
    model: "EX30",
    description: "Swedish minimalist excellence in a compact electric footprint.",
    stats: { hp: 268, zeroToSixty: "5.1s", topSpeed: "112mph", price: "$34,950", cargoSpace: "14.1 cu ft" },
    imageUrl: "https://www.wyborkierowcow.pl/wp-content/uploads/2023/06/Volvo-EX30-07.jpg",
    distributorUrl: "https://www.volvocars.com/us/cars/ex30-electric/",
    features: ["Sustainable Materials", "Google Built-in", "Pilot Assist"]
  },
  {
    rank: 9,
    name: "Jeep",
    model: "Compass",
    description: "Trail-rated capability meets refined city-driving comfort.",
    stats: { hp: 200, zeroToSixty: "7.8s", topSpeed: "120mph", price: "$25,900", cargoSpace: "27.2 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distributorUrl: "https://www.jeep.com/compass.html",
    features: ["4x4 Capability", "Uconnect 5", "Selec-Terrain"]
  },
  {
    rank: 8,
    name: "Subaru",
    model: "Forester",
    description: "The ultimate adventure companion with legendary symmetrical AWD.",
    stats: { hp: 182, zeroToSixty: "8.0s", topSpeed: "127mph", price: "$27,095", cargoSpace: "28.9 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1710171940308-8f9670ecfeda?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distributorUrl: "https://www.subaru.com/vehicles/forester.html",
    features: ["Symmetrical AWD", "EyeSight Driver Assist", "Spacious Cargo"]
  },
  {
    rank: 7,
    name: "Hyundai",
    model: "Tucson",
    description: "Bold design coupled with a class-leading tech ecosystem.",
    stats: { hp: 187, zeroToSixty: "8.8s", topSpeed: "120mph", price: "$27,500", cargoSpace: "38.7 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1709774378962-171db2614a30?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distributorUrl: "https://www.hyundaiusa.com/us/en/vehicles/tucson-hybrid",
    features: ["SmartSense Safety", "Digital Key", "H-TRAC AWD"]
  },
  {
    rank: 6,
    name: "Audi",
    model: "SQ5",
    description: "Precision-engineered performance for the discerning luxury driver.",
    stats: { hp: 349, zeroToSixty: "4.7s", topSpeed: "155mph", price: "$57,000", cargoSpace: "25.8 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200",
    distributorUrl: "https://www.audiusa.com/us/web/en/models/q5/sq5.html",
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Sound"]
  },
  {
    rank: 5,
    name: "Mazda",
    model: "CX-5",
    description: "Craftsmanship and driving soul that rivals European luxury brands.",
    stats: { hp: 187, zeroToSixty: "7.2s", topSpeed: "130mph", price: "$29,300", cargoSpace: "30.8 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1762077656380-22733f2cd8da?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distributorUrl: "https://www.mazdausa.com/vehicles/cx-5",
    features: ["Kodo Design", "i-Activ AWD", "Premium Interior"]
  },
  {
    rank: 4,
    name: "Toyota",
    model: "RAV4 Hybrid",
    description: "Unbeatable reliability paired with modern hybrid efficiency.",
    stats: { hp: 219, zeroToSixty: "7.1s", topSpeed: "115mph", price: "$31,725", cargoSpace: "37.5 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1200",
    distributorUrl: "https://www.toyota.com/rav4/",
    features: ["Hybrid Efficiency", "Toyota Safety Sense", "Rugged Stance"]
  },
  {
    rank: 3,
    name: "BMW",
    model: "X3 M50",
    description: "The ultimate driving machine reimagined for the SUV class.",
    stats: { hp: 393, zeroToSixty: "4.4s", topSpeed: "155mph", price: "$64,000", cargoSpace: "28.7 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200",
    distributorUrl: "https://www.bmwusa.com/vehicles/x-models/x3/suv/overview.html",
    features: ["M-Sport Dynamics", "iDrive 9", "Panoramic Roof"]
  },
  {
    rank: 2,
    name: "Porsche",
    model: "Macan Turbo EV",
    description: "Supercar acceleration meet SUV versatility in an electric masterpiece.",
    stats: { hp: 630, zeroToSixty: "3.1s", topSpeed: "161mph", price: "$105,300", cargoSpace: "18.0 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&q=80&w=1200",
    distributorUrl: "https://www.porsche.com/usa/models/macan/macan-electric-models/macan-turbo-electric/",
    features: ["800V Architecture", "E-Performance", "Adaptive Air Suspension"]
  },
  {
    rank: 1,
    name: "Tesla",
    model: "Model Y Performance",
    description: "The undisputed champion of the modern electric SUV revolution.",
    stats: { hp: 455, zeroToSixty: "3.5s", topSpeed: "155mph", price: "$52,490", cargoSpace: "30.2 cu ft" },
    imageUrl: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=1200",
    distributorUrl: "https://www.tesla.com/modely",
    features: ["Autopilot", "Supercharger Network", "Over-the-air Updates"]
  }
];
