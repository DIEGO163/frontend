import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rol } from '../ro';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-combobox',
  templateUrl: './rol-combobox.component.html',
})
export class RolComboboxComponent implements OnInit {

  constructor(private rolService: RolService) { }

  ngOnInit(): void {
    this.findAll();
  }

  roles: Rol[]=[];
  @Output() rolIdEmiter= new EventEmitter<number>();
  @Input() rolId: number=0;

  public findAll():void{
    this.rolService.findAll().subscribe(
      (respose) => this.roles = respose
    )
  }

  public onSelect(id:string){
    this.rolIdEmiter.emit(parseInt(id));
  }

}
