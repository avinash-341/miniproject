import { Component } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  dig:any
firstname:string='';
lastname:string='';
username:string='';
email:string='';
address:string='';
address2:string='';
country:string='';
state:string='';
credit:string='';
debit:string='';
paypal:string='';
name:string='';
number:string='';
date:string='';
cvv:string='';
constructor(private fire:Firestore,public auth:HeroService){}
submit()
{
const data={
firstname:this.firstname,
lastname:this.lastname,
username:this.username,
email:this.email,
address:this.address,
address2:this.address2,
country:this.country,
state:this.state,

name:this.name,
number: this.number,
date:this.date,
cvv:this.cvv,
}
console.log(data);
const docRef=collection(this.fire,"booking")
this.auth.insertData(docRef,data)
this.firstname=''
this.lastname=''
this.username=''
this.email=''
this.address=''
this.address2=''
this.country=''
this.state=''
this.credit=''
this.debit=''
this.paypal=''
this.name=''
this.date=''
this.cvv=''
alert( 'bookingsuccess')
}

}

