import { DatasPropertyService } from "../../shared/datas-property-service";

export class Service {    
    constructor(
        public parcelaInicial: number ,
        public valorAprovado: number,
        public quantidadeParcelas: number,
        public nome: string,
    ) {
        this.parcelaInicial = parcelaInicial ;
        this.valorAprovado = valorAprovado;
        this.quantidadeParcelas = quantidadeParcelas;
        this.nome = nome;
    }
}