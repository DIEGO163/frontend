import { Component, OnInit } from '@angular/core';
import { Feriados } from '../feriados';
import { FeriadosService } from '../feriados.service';

@Component({
  selector: 'app-feriados-list',
  templateUrl: './feriados-list.component.html',
})
export class FeriadosListComponent implements OnInit {

  constructor(
    private feriadosService:FeriadosService
  ) { }

  feriadosList: Feriados[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.feriadosService.findAll().subscribe(
      (response) => this.feriadosList = response
    );
  }

  public findByDescription(term:string): void{
    if(term.length >= 2){
      this.feriadosService.findByDescription(term).subscribe(
        (response) => this.feriadosList = response
      )
    }
    if(term.length == 0){
      this.findAll();
    }
  }

}
