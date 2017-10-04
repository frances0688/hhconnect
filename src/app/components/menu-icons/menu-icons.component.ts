import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  private setUser(user: User | null) {
    this.user = user;
  }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.setUser(user);
    });
  }

}
