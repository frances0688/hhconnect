import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-availability-form',
  templateUrl: './availability-form.component.html',
  styleUrls: ['./availability-form.component.css']
})
export class AvailabilityFormComponent implements OnInit {

  user = {
    availability: {
      mondayDay: true
    }
  };

  constructor(private authService: AuthService) { }

  // private setUser(user: User | null) {
  //   this.user = new User;
  // }

  ngOnInit() {
    // this.authService.userChange$.subscribe((user) => {
    //   this.setUser(user);
    // });
   // this.setUser(null);
  }

  submitForm(myForm) {
    console.log(myForm);
  }
}
