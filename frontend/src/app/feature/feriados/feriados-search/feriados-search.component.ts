import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Feriados } from '../feriados';
import { FeriadosService } from '../feriados.service';

@Component({
  selector: 'app-feriados-search',
  templateUrl: './feriados-search.component.html',
})
export class FeriadosSearchComponent implements OnInit {

  @Output() termEmitter = new EventEmitter<Feriados>();
  feriado: Feriados[] = [];
  constructor(private feriadosService:FeriadosService,) { }

  ngOnInit(): void {
  }

  
  public onInput(term: string) {
      if(term.length >= 1){
          this.feriadosService.findByDescription(term).subscribe(
              (response) => this.feriado = response
          )
      }
      if(term.length === 0){
          this.feriado=[]
      }
  }


  public onSelect(feriados: Feriados): void{
      this.termEmitter.emit(feriados);

  }

}
