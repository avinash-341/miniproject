import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HeroService } from 'src/app/hero.service';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  name: string = '';
  constructor(private auth: HeroService) {}
  ngOnInit(): void {
   this.auth.no();
  }
  login(){
    if (this.email==""){
    
    alert("Please enter your email")
    return;
    }
    if (this.password==""){
    
      alert("Please enter your password")
      return;
      }
    this.auth.login(this.email,this.password);
    
    this.email='';
    this.password='';
    
    }

  register() {
    if (this.name == '') {
      alert('Please enter your name');
      return;
    }
    if (this.email == '') {
      alert('Please enter your email');
      return;
    }
    if (this.password == '') {
      alert('Please enter your password');
      return;
    }

    const cred = {
      email:this.email,
      password:this.password,
      name:this.name,
    }
    this.auth.register(cred);
    this.email = '';
    this.password = '';
    this.name = '';
  }

 

}
