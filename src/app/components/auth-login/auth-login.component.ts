import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {

  @Output() onSuccess = new EventEmitter<null>();

  user = new User({
    email: '',
    password: ''
  });

  error: string;

  constructor(private auth: AuthService) { }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => this.onSuccess.emit(),
      (err) => this.error = err
    );
  }
}
