import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {User} from '../../models/user';
import {AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

import { RegisterPage } from '../register/register';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private fire:AngularFireAuth,private alertctrl:AlertController) {
  }
  alert(message:string){
    this.alertctrl.create({
      title: 'Alert',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
   login(user:User){
    this.fire.auth.signInWithEmailAndPassword(this.user.email,this.user.password)
    .then(data =>{
    this.navCtrl.setRoot(HomePage);
   
  })
  
    .catch(error=>{
      this.navCtrl.setRoot(LoginPage);
      this.alert('Username and Password not match');
    })
  }
   
  Register() {
     this.navCtrl.push(RegisterPage);
}

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad SplashPage');
  }

}
