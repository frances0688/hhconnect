import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';
import { routes } from '../../routes/routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleSuccess() {
    this.router.navigateByUrl('/profile');
  }
}
