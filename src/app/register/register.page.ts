import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  password: string;
  repassword: string;
  constructor() { }

  ngOnInit() {
  }
 register() {
     if (!this.username || !this.password || !this.repassword) {
       alert('please fill all the fields');
      } else {
           console.log("username: "+this.username);
           console.log("Password: "+this.password);
           console.log("RePassword: "+this.repassword);
     }
  }
}
