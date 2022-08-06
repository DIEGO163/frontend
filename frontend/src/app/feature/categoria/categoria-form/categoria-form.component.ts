import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
})
export class CategoriaFormComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Categoria = 
  {
    categoriaId: 0,
    name: "",
    color: "",
    created: new Date(),
    enabled: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.categoriaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
          categoriaId: 0,
          name: "",
          color: "",
          created: new Date(),
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.categoriaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.categoriaService.deleteById(this.currentEntity.categoriaId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
