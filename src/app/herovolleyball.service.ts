import { Injectable } from '@angular/core';
import { kneepad, net, Volleyball, volleyballs } from 'src/assets/datavolleyball';

@Injectable({
  providedIn: 'root'
})
export class HerovolleyballService {

  constructor() { }
  giveData(){
    return Volleyball
}

giveData1(){
  return volleyballs
}
giveData2(){
  return net
}
giveData3(){
return kneepad
}
}
