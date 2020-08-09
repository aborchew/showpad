import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.scss']
})
export class NewDeckComponent implements OnInit {

  public deck_count = 1;
  public pile_count = 2;
  public hand_size = 5;

  constructor(
    private decks: DeckService
  ) { }

  ngOnInit(): void {
  }

  public async create () {
    const deck = await this.decks.new({
      deck_count: this.deck_count,
      pile_count: this.pile_count,
      hand_size: this.hand_size
    });
    console.log(deck);
  }

}
