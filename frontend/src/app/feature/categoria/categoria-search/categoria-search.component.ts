import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-search',
  templateUrl: './categoria-search.component.html',
})
export class CategoriaSearchComponent implements OnInit {

  @Output() termEmitter = new EventEmitter<Categoria>();
  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService,) { }

  ngOnInit(): void {
  }

  
  public onInput(term: string) {
      if(term.length >= 2){
          this.categoriaService.findByName(term).subscribe(
              (response) => this.categorias = response
          )
      }
      if(term.length === 0){
          this.categorias=[]
      }
  }


  public onSelect(categoria: Categoria): void{
      this.termEmitter.emit(categoria);

  }

}
