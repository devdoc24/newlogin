import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component ({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    verificationId: any;
    code: string = "";

  constructor() { }

  ngOnInit() {
  }
    send() {
        (<any>window).FirebasePlugin.verifyPhoneNumber("+918099044468", 60, (credential) => {
            alert("SMS Sent Successfully");
            console.log(credential);

            this.verificationId = credential.verificationId;
        }, (error) => {
            console.error(error);
            });
    }

    verify() {
        let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
        firebase.auth().signInWithCredential(signInCredential).then((info) => {
        console.log(info)
        }, (error) => {
            console.error(error);
        })
    }
  }