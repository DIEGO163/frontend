import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feriados-toolbar',
  templateUrl: './feriados-toolbar.component.html',
})
export class FeriadosToolbarComponent implements OnInit {

  @Input() entityDescription: string = "";
  @Output() termEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){

    this.termEmitter.emit(term);
  }

}
