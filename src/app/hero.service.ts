import { Injectable } from '@angular/core';
import { Cricket,bat ,ball, kit} from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  giveData(){
    return Cricket
  }

  giveData1(){
    return bat
  }
  giveData2(){
    return ball
  }
giveData3(){
  return kit
}
}


