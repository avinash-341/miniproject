import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerovolleyballService } from 'src/app/herovolleyball.service';
@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.component.html',
  styleUrls: ['./volleyball.component.css']
})
export class VolleyballComponent {
  constructor(private a:HerovolleyballService,private router:Router){}
  Volleyball=this.a.giveData();
  gotoHere(id:any){
    localStorage.setItem('volleyballId',id)
    this.router.navigate(['/singlevolleyball'])
}
}
