import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  dig:any
  constructor(private d:HeroService,private router:Router){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.giveData1();
    this.dig=arrd.filter(e=>e.price==idd)

}
}
