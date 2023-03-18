import { Component } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string='';
  email:string='';
  number:string='';
  message:string='';
constructor(private fire:Firestore,public auth:HeroService){}
submit()
{
  const data={
  name:this.name,
  email:this.email,
  message:this.message,
  }
  console.log(data);
  const docRef=collection(this.fire,"contactus")
  this.auth.insertData(docRef,data)
  this.name=''
  this.email=''
  this.message=''
  alert('success')
}
}
