import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from '../ro';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-form',
  templateUrl: './rol-form.component.html',
})
export class RolFormComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Rol = {
    rolId: 0,
    name: "",
    isAdmin: true,
    created: new Date(),
    isEnable: true,
    isArchived: true,
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


  save(): void {
    this.rolService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity ={
          rolId: 0,
          name: "",
          isAdmin: true,
          created: new Date(),
          isEnable: true,
          isArchived: true,
        };
      }
    )
  }
  findById(id: number): void {
    this.rolService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response
      }
    )
  }

  deleteById():void{
    this.rolService.deleteById(this.currentEntity.rolId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
