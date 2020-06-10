import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'adp-user-registration',
  templateUrl: './user-registration.component.html'
})
export class UserRegistrationComponent {
  user = new User();

  constructor(private userService: UserService) {
  }

  registerUser() {
    if (this.isUserValid()) {
      this.userService.addUser(this.user).subscribe(res => {
        alert(this.user.FirstName);
      });
    } else {
      alert('Please fill all required fields');
    }
  }

  isUserValid(): boolean {
    if (!this.user.FirstName || !this.user.LastName || !this.user.Email || !this.user.Login || !this.user.Password ) {
      return false;
    }

    return true;
  }
}
