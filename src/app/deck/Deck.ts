import { iDeck } from '../../types';
import { pick, extend } from 'lodash';
import { DeckService } from '../deck.service';

export class Deck {
  public deck_count: number;
  public pile_count: number;
  public remaining: number;
  public hand_size: number;
  public shuffled: boolean;
  private deck_id: string;

  constructor (
    config: iDeck,
    private decks: DeckService
  ) {
    extend(this, pick(config, [
      'deck_count',
      'hand_size',
      'pile_count',
      'remaining',
      'shuffled',
      'deck_id'
    ]))
  }

  public shuffle () {
    console.log('shuffle!');
  }
}