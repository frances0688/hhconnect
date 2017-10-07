import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  BASE_URL: 'http://localhost:3000';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/users`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/users/${id}`)
      .map((res) => res.json());
  }

  edit(user) {
    return this.http.put(`${this.BASE_URL}/api/users/${user.id}`, user)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/users/${id}`)
      .map((res) => res.json());
  }
}
