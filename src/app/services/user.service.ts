import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://localhost:44312/api/user')
  }

  addUser(user) {
    return this.http.post('api/users', user);
  }
}
