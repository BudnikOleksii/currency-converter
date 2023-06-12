export enum CurrencyTypes {
  to = 'to',
  from = 'from',
}

export interface Symbols {
  [key: string]: string;
}

export interface SymbolsResponse {
  success: boolean;
  symbols: Symbols;
}

export interface Rates {
  [key: string]: number;
}

export interface RatesResponse {
  base: string;
  date: string;
  rates: Rates;
  success: boolean;
  timestamp: number;
}
