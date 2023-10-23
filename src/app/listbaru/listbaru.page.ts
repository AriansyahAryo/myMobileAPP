import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listbaru',
  templateUrl: './listbaru.page.html',
  styleUrls: ['./listbaru.page.scss'],
})
export class ListbaruPage implements OnInit {
  users: any[] | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.http
      .get<any>('https://dummyjson.com/users')
      .subscribe((data: any[] | undefined) => {
        this.users = data;
        console.log(this.users);
      });
  }

  myWaifu = ['Focalors', 'Klee', 'Hutao'];
  VideoGames = [
    'Pokémon Yellow',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
  ];
  public alertButtons = ['OK'];
  public seeGame = ['Yes', 'No'];
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
