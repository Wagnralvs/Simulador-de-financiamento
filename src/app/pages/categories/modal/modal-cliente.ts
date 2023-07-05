
export class ModalCliente {
    constructor(
        public nome: string ,
        public profissao: string,
        public cpf: number,
        public email: string,
        public data:string,
        public cep : number,
        public celular: number,
    ) {
        this.nome = nome ;
        this.profissao = profissao;
        this.cpf = cpf;
        this.email = email;
        this.data = data;
        this.cep = cep;
        this.celular= celular;
    }
}
