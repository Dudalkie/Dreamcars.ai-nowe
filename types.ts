
export interface CarStats {
  hp: number;
  zeroToSixty: string;
  topSpeed: string;
  price: string;
  cargoSpace: string; // 5th quality
}

export interface Car {
  rank: number;
  name: string;
  model: string;
  description: string;
  stats: CarStats;
  imageUrl: string;
  distributorUrl: string;
  features: string[];
}

export interface TrackingEvent {
  category: string;
  action: string;
  label: string;
}
