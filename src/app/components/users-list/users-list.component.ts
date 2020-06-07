import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'adp-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users: any

  constructor(private userSerice: UserService) { }

  ngOnInit() {
    this.userSerice.getUsers().subscribe(res => {
      this.users = res;
    });
  }

}
