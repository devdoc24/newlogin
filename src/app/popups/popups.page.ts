import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.page.html',
  styleUrls: ['./popups.page.scss'],
})
export class PopupsPage implements OnInit {

    username: string;
    password: string;

  constructor() { }

  ngOnInit() {
  }
    login() {
        console.log("username: " + this.username);
        console.log("Password: " + this.password);
    }
    buttonClick() {
        console.log('clicked');
    }
}
