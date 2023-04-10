import { Component } from '@angular/core';
import { IElement } from './IElement'

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component  {

  elemArray:Array<IElement>=[];
  elemStatus:number=1;

  constructor() {
      this.elemArray=[
        {id:1, name:'data 1', time:2, status:true},
        {id:2, name:'data 2', time:9, status:false},
        {id:3, name:'data 3', time:7, status:false, deleted:true},
        {id:4, name:'data 4', time:10, status:true}
      ];
   }

   otherState(){
    this.elemStatus++;
    if(this.elemStatus>4) this.elemStatus=1;
   }

}
