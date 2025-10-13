export interface ITransactions {
  id: number;
  category: string;
  title: string;
  date: string;
  time: string;
  amount: string;
  type: string;
  points: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
}

export interface Product {
  id: number;
  category: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  serviceName: string;
  comment: string;
  date: string;
}

export interface ServiceProvider {
  id: number;
  name: string;
  distance: string;
  yearsInBusiness: string;
  price: string;
  rating: number;
  imageUrl: string;
  description?: string;
  services?: Service[];
  products?: Product[];
  reviews?: Review[];
}
