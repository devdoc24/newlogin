import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {

  username: string;
  password: string;

  constructor() { }

  register() {
    console.log("username: "+this.username);
    console.log("Password: "+this.password);
   }

  ngOnInit() {
  }

}
