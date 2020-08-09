import { Query } from "@angular/core"

export interface iDeck {
  created: number;
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
  piles?: {
    [key:string]: iPile
  }
}

export interface iPile {
  remaining: number;
  cards: iCard[]
}

export interface iCard {
  image: string;
  value: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'JACK' | 'QUEEN' | 'KING' | 'ACE' | 'JOKER';
  suit: 'SPADES' | 'HEARTS' | 'CLUBS' | 'DIAMONDS';
  code: '2S' | '3S' | '4S' | '5S' | '6S' | '7S' | '8S' | '9S' | '10S' | 'JS' | 'QS' | 'KS' | 'AS' | '2H' | '3H' | '4H' | '5H' | '6H' | '7H' | '8H' | '9H' | '10H' | 'JH' | 'QH' | 'KH' | 'AH' | '2C' | '3C' | '4C' | '5C' | '6C' | '7C' | '8C' | '9C' | '10C' | 'JC' | 'QC' | 'KC' | 'AC' | '2D' | '3D' | '4D' | '5D' | '6D' | '7D' | '8D' | '9D' | '10D' | 'JD' | 'QD' | 'KD' | 'AD' | 'JOKER';
}

export interface iDeckConfig {
  deck_count: number;
  pile_count: number;
  hand_size: number;
}