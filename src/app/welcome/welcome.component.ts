import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { Router } from '@angular/router';
import { iDeck } from 'src/types';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { NewDeckComponent } from '../new-deck/new-deck.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public games: iDeck[] = [];
  public displayedColumns = [
    'created',
    'deck_id',
    'shuffled',
    'remaining',
    'players',
    'hand_size'
  ]

  constructor(
    private deckService: DeckService,
    private router: Router,
    public dialog: MatDialog
  ) {
    
  }

  async new() {
    const dialogRef = this.dialog.open(NewDeckComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async ngOnInit() {
    this.games = await this.deckService.list();
  }

  public navigateToDeck(deckId) {
    this.router.navigate([`deck/${deckId}`]);
  }

  public prettyDate(dateString) {
    return moment(dateString).format('MMMM Do [at] h:mm a');
  }

}
