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

export interface ServiceProvider {
  id: number;
  name: string;
  distance: string;
  yearsInBusiness: string;
  price: string;
}
