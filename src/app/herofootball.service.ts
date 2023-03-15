import { Injectable } from '@angular/core';
import { ball } from 'src/assets/data';
import {Football, boot, football, stockings } from 'src/assets/datafootball';

@Injectable({
  providedIn: 'root'
})
export class HerofootballService {

  constructor() {}
    giveData(){
      return Football
     }
     
  giveData1(){
    return football
  }
  giveData2(){
    return boot
  }
giveData3(){
  return stockings
}
}
