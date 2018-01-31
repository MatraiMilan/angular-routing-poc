import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable()
export class UserServiceService {

  users: UserInterface[] = [
    {name: 'Méhes Csilla'},
    {name: 'Rozbora Nikolett'},
    {name: 'Mátrai Milán'},
    {name: 'Csetneki Sándor'},
    {name: 'Juhász Norbert'},
    {name: 'Fehér Dávid'},
    {name: 'Szalkai Dávid'},
    {name: 'Bódi László'}
  ];

  constructor() { }

  getUsers(): UserInterface[] {
    return this.users;
  }

}
