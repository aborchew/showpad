import { Injectable } from '@angular/core';
import { StorageService } from './storage.service'
import { iDeck, iDeckConfig } from 'src/types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  constructor(
    private storage: StorageService,
    private api: ApiService
  ) { }
  
  public list (): iDeck[] {
    return this.storage.get('decks');
  }

  public new (config: iDeckConfig): Promise<iDeck> {
    return this.api.getDeck(undefined, config)
      .then(deck => {
        this.storage.add('decks', { ...deck, ...config });
        return deck;
      })
  }

  public get (deckId: string): Promise<iDeck> {
    return this.api.getDeck(deckId)
      .then(deck => {
        return { ...this.storage.getOneOf('decks', { deck_id: deckId }), ...deck };
      })
  }
}
