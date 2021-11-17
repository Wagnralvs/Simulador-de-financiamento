import { DatasPropertyService } from "../../shared/datas-property-service";


export  class Service {    
    constructor(
       
        public nome: string,
        public profissao: string,
        public cpf: number,
        public email: string,
        public data: string,
        public cep: number,
        public celular: number,

        public tipoImovel: string,
        public rendaMensal: number,
        public valorImovel: number,
        public valorEntrada: number,
        public parcelaInicial: number ,
        public valorAprovado: number,
        public quantidadeParcelas: number,
        public dataHoje: number,
      //  public id : number,
        
    ) {
     //  this.id = id;
        this.nome = nome;
        this.profissao = profissao;
        this.cpf = cpf;
        this.email = email;
        this.data = data
        this.cep= cep;
        this.celular = celular;

        this.tipoImovel = tipoImovel;
        this.rendaMensal = rendaMensal;
        this.valorImovel = valorImovel;
        this.valorEntrada = valorEntrada;
        this.parcelaInicial = parcelaInicial ;
        this.valorAprovado = valorAprovado;
        this.quantidadeParcelas = quantidadeParcelas;
        this.dataHoje = dataHoje;
      
    }
    public id!: number;
}