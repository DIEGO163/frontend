import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../categoria/categoria.service';
import { Feriados } from '../feriados';
import { FeriadosService } from '../feriados.service';


@Component({
  selector: 'app-feriados-form',
  templateUrl: './feriados-form.component.html',
})
export class FeriadosFormComponent implements OnInit {

  constructor(
    private feriadosService: FeriadosService,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService

  ) { }

  currentEntity: Feriados = {
    feriadosId: 0,
    beginning: new Date(),
    culmination: new Date(),
    description: "",
    enabled: true,
    created: new Date(),
    updated:new Date(),
    rolId:0,
    feriadosCategoria:[]
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
          rolId:0,
          feriadosCategoria:[]
        }
      }
    )
  }

 
  
  // findById(id: number): void{
  //   this.feriadosService.findById(id).subscribe(
  //     (response) =>{
  //       this.currentEntity = response;
  //     }
  //   )
  // }

  findById(id: number):void {
    this.feriadosService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.feriadosCategoria.forEach(
          (auth) => {
            this.categoriaService.findById(auth.categoriaId).subscribe(
              (item) => auth.name = item.name
            )
          }
        )
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

  removeAuthority(categoriaId: number):void {
    this.currentEntity.feriadosCategoria =
    this.currentEntity.feriadosCategoria.filter(
      (item) => item.categoriaId != categoriaId
    );
  }

}
