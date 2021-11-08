import { DatasPropertyService } from "../../shared/datas-property-service";

export class Service {    
    constructor(
        public parcelaInicial: number ,
        public valorAprovado: number,
    ) {
        this.parcelaInicial = parcelaInicial ;
        this.valorAprovado = valorAprovado;
    }
}