import { Categoria } from "../categoria/categoria";

export interface Feriados{
    feriadosId: number,
    beginning:  Date,
    culmination: Date,
    description: string,
    enabled: boolean,
    created:Date,
    updated:Date,
    rolId:number,
    feriadosCategoria: Categoria[]
}