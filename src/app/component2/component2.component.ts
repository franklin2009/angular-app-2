import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  disabledInput:boolean=true;
  typeInput:string='password';
  userName:string='';

  constructor() { }

  changeTypeInput(){
    this.typeInput=(this.typeInput==='password'? 'text' : 'password');
  }

  changeUserName(){
    let name:string=""+prompt("Actauliza el usuario: ", this.userName);
    if(name!="null"){
      this.userName=name;
    }
  }

  viewUserName(){
    alert("userName : "+this.userName);
  }

}
