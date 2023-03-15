import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
i: any;
gotoHere(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private hero:HeroService,private router:Router){}
  
 single:any
  ngOnInit(){
    let id=localStorage.getItem('batId')
    console.log(id)
    if(id==="1"){
     this.single= this.hero.giveData1()
    }else if(id==="2"){
      this.single= this.hero.giveData2()
     }else if(id==="3"){
      this.single= this.hero.giveData3()
     }
    // let ar=this.hero.giveData1();
    // this.single=ar.filter(e =>e.id==id)
    // console.log(this.single[0]);
  }
  gotopur(){
    this.router.navigate(['/purchase'])
  }
}
