import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  users: {name: string}[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
