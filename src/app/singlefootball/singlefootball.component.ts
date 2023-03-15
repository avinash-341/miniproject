import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerofootballService } from '../herofootball.service';

@Component({
  selector: 'app-singlefootball',
  templateUrl: './singlefootball.component.html',
  styleUrls: ['./singlefootball.component.css']
})
export class SinglefootballComponent {
gotoHere(arg0: any) {
throw new Error('Method not implemented.');
}
  constructor(private hero:HerofootballService,private router:Router){}
  
 single:any
  ngOnInit(){
    let id=localStorage.getItem('footballId')
    console.log(id)
    if(id==="4"){
     this.single= this.hero.giveData1()
    }else if(id==="5"){
      this.single= this.hero.giveData2()
     }else if(id==="6"){
      this.single= this.hero.giveData3()
     }
}
gotoft(){
  this.router.navigate(['/purchase'])
}
}
