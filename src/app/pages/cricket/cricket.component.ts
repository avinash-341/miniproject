import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  constructor(private a:HeroService,private router:Router){}
  cricket=this.a.giveData();
  gotoHere(id:any){
    localStorage.setItem('batId',id)
    this.router.navigate(['/single'])
  }

}
