import { Injectable } from '@angular/core';
import axios from 'axios';
import { iDeck, iDeckConfig } from 'src/types';
import { pick } from 'lodash';

const uri = 'https://deckofcardsapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {
  }

  shuffleDeck(deckId: string): Promise<iDeck> {
    return axios.get(`${uri}/deck/${deckId}/shuffle`).then(({ data }) => data)
  }

  getDeck(deckId = 'new', config?: iDeckConfig): Promise<iDeck> {
    console.log(config, pick(config, ['deck_count']));
    return axios.get(
      `${uri}/deck/${deckId}`,
      { params: pick(config, ['deck_count']) }
    ).then(({ data }) => data)
  }
}
