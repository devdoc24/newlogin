import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';


@Component ({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit{
  phoneNumber: string = "";
  verificationId: any = '';
  code = "";
  user: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  send(phoneNumber: number) {
        let number = this.phoneNumber;
        (<any>window).FirebasePlugin.verifyPhoneNumber(number, 60, (credential) => {
            alert("SMS Sent Successfully");
            console.log(credential);
        
            this.verificationId = credential.verificationId;
        }, error => {
            console.log(error);
            });
    }

   verify(verifyObj:any) {
        let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
        
        firebase.auth().signInWithCredential(signInCredential).then((info) => {
          console.log(info);
          this.router.navigate(['/popups']);
        }, error => {
            console.log("error: " + error);
            });
    }
  }