import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnOption:string='opt-1';
  fontSizePx:number=10;
  fontSizePx2:number=20;

  setBtnOption(opt:string):void{
    this.btnOption=opt;
  }

}
