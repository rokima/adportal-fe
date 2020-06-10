import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'adp-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users: User[];
  loaded = false;

  constructor(private userSerice: UserService) { }

  ngOnInit() {
    this.userSerice.getUsers().subscribe(res => {
      this.users = res;
      this.loaded = true;
    });
  }

}
