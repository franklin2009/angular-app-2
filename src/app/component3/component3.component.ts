import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `
  <h3>Comunicación de Componentes</h3>
  <p>@Input() / @Output() / EventEmitter</p>
  <br/>
    <div>
      <button type="button" (click)="dec()" title="smaller" class="btn btn-secundary m-2">-</button>
      <button type="button" (click)="inc()" title="bigger" class="btn btn-secundary m-2">+</button>
      <span>FontSize: {{size}}px</span>
      <p class="text" [style.font-size.px]="size" > {{ text }}</p>
    </div>
  `,
  styles: [`.text{ color: blue; }`]
})
export class Component3Component {
  @Input()  size!: number | string;
  @Input()  text?: string = "Texto en componente hijo";
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
