import { Component } from '@angular/core';
import { HerofootballService } from 'src/app/herofootball.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {
  constructor(private a:HerofootballService,private router:Router){}
  Football=this.a.giveData();
  gotoHere(id:any){
    localStorage.setItem('footballId',id)
    this.router.navigate(['/singlefootball'])
  }
}
