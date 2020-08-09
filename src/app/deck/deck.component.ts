import { Component, OnInit } from '@angular/core';
import { iDeck } from 'src/types';
import { DeckService } from '../deck.service';
import { ActivatedRoute } from '@angular/router';
import { Deck } from './Deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  public deck: Deck;

  constructor(
    private decks: DeckService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const { deckId } = this.route.snapshot.params;
    this.deck = new Deck(await this.decks.get(deckId), this.decks);
  }

  async start () {
    this.deck.shuffle();
  }

}
