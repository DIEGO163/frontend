import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feriados } from '../feriados';
import { FeriadosService } from '../feriados.service';


@Component({
  selector: 'app-feriados-form',
  templateUrl: './feriados-form.component.html',
})
export class FeriadosFormComponent implements OnInit {

  constructor(
    private feriadosService: FeriadosService,
    private activatedRoute: ActivatedRoute

  ) { }

  currentEntity: Feriados = {
    feriadosId: 0,
    beginning: new Date(),
    culmination: new Date(),
    description: "",
    enabled: true,
    created: new Date(),
    updated:new Date()
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")) {
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save(): void {
    console.table(this.currentEntity);
    this.feriadosService.save(this.currentEntity).subscribe(
      () => {
        this.currentEntity = {
          feriadosId: 0,
          beginning: new Date(),
          culmination: new Date(),
          description: "",
          enabled: true,
          created: new Date(),
          updated: new Date(),
        }
      }
    )
  }

 
  
  findById(id: number): void{
    this.feriadosService.findById(id).subscribe(
      (response) =>{
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.feriadosService.deleteById(this.currentEntity.feriadosId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
