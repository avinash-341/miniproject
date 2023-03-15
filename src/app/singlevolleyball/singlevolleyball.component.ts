
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerovolleyballService } from '../herovolleyball.service';
@Component({
  selector: 'app-singlevolleyball',
  templateUrl: './singlevolleyball.component.html',
  styleUrls: ['./singlevolleyball.component.css']
})
export class SinglevolleyballComponent {
gotoHere(arg0: any) {
throw new Error('Method not implemented.');
}
  constructor(private hero:HerovolleyballService,private router:Router){}
  single:any
   ngOnInit(){
     let id=localStorage.getItem('volleyballId')
     console.log(id)
     if(id==="7"){
      this.single= this.hero.giveData1()
     }else if(id==="8"){
       this.single= this.hero.giveData2()
      }else if(id==="9"){
       this.single= this.hero.giveData3()
      }
}

gotovolly(){
  this.router.navigate(['/purchase'])
}
}

