import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testarray',
  templateUrl: './testarray.page.html',
  styleUrls: ['./testarray.page.scss'],
})
export class TestarrayPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  Waifuku = ['Focalors', 'Klee', 'Hutao'];
  Gameku = [
    'Pokémon Yellow',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
  ];
}
