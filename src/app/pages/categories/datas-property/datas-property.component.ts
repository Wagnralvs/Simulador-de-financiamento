import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Inject,
  Injectable,
} from '@angular/core';
import { FormGroup, Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ModalCliente } from '../modal/modal-cliente';
import { ServiceCliente } from '../services/service-cliente';
import { DadosClienteImovelModel } from '../modal/model-imovel';
import { DatasPropertyService } from '../services/datas-property-service';
import { Subscription, tap, pipe, of} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css'],
  // providers: [DatasPropertyService, ServiceCliente],
})
@Injectable()
export class DatasPropertyComponent implements OnInit , OnDestroy{
  @Input() visualizarModel= false;
  @Input() clienteDados: ModalCliente ;

  private dadosClienteImovelModel: DadosClienteImovelModel;
  public dadosClienteModel: ModalCliente ;
  public formulario: UntypedFormGroup;
  public requestAprovado : RequestAprovadoModel;

  private nome: string;
  private profissao: string;
  private email: string;
  private cpf: number;
  private data: string;
  private cep: number;
  private celular: number;
  public entradaMin: number;
  private taxa :number;
  public dataHoje: number = Date.now();

  public rendaMensal: number;
  public valorImovel: number;
  public valorEntrada: number;
  public quantidadeParcelas: number;
  public mensaisParcelas: number;
  public valorAprovado: number ;
  public rendaAprovada: boolean ;
  public valorTotalImovelJuros:number;
  public id = '';
  public menssage = '';
  public visulizarAprov = false ;

  private subscription: Subscription ;
  constructor(
    private propertyService: DatasPropertyService,
    private clienteService: ServiceCliente,
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      rendaMensal: [null, [Validators.required]],
      valorImovel: [null, [Validators.required]],
      valorEntrada: [null, [Validators.required]],
      taxa: [null, [Validators.required]],
      quantidadeParcelas: [
        null,
        [Validators.required, Validators.max(360), Validators.min(1)],
      ],
    });


    this.subscription.add(
      this.clienteService.pegarDadosCliente().pipe(
        tap((result) => {
          this.visualizarModel = true;
          this.nome = result.nome;
          this.celular = result.celular;
          this.cep = result.cep;
          this.cpf = result.cpf;
          this.data = result.data;
          this.email = result.email;
          this.profissao = result.profissao
         })
      ).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  entradaValidacao() {
    const entradaReal: number = +this.formulario.get('valorEntrada')?.value;
    if (entradaReal) {
      const entradaMinima: number = this.entradaMinima();
      if (entradaMinima > entradaReal) {
        this.menssage = `O valor da entrada não pode ser inferior a R$ ${this.entradaMinima()}`;
        return false;
      }
    }
    this.menssage = '';
    return true;
  }

  //  -----caclulos -----//

  aprovadoValor(): number {
    const valorAprovado = this.valorImovel - this.valorEntrada;

    return valorAprovado;
  }

  entradaMinima() {
    const entradaPorcentagem = 0.2;
    const valorImovel = +this.formulario.get('valorImovel')?.value;
    const entradaMinima: number = entradaPorcentagem * valorImovel;

    return entradaMinima;
  }

  parcelasMensais(): number {
    const taxaMensal = (this.taxa / 12)/100;

    const totalParcelasMensais =
      ((this.valorImovel - this.valorEntrada) / this.quantidadeParcelas) * (taxaMensal + 1);

    return totalParcelasMensais;
  }
  valorTotalEmprestimoJuros(): number{
   const jurosTotal = (this.taxa * this.quantidadeParcelas / 12)/100
   const valorTotalImovelJuros = this.valorAprovado * (jurosTotal + 1)

   return valorTotalImovelJuros
  }

  // -----caclulo validação-----
  validacao() {

    this.rendaMensal = +this.formulario.get('rendaMensal')?.value;
    this.valorImovel = +this.formulario.get('valorImovel')?.value;
    this.valorEntrada = +this.formulario.get('valorEntrada')?.value;
    this.quantidadeParcelas = +this.formulario.get('quantidadeParcelas')?.value;
    this.taxa = +this.formulario.get('taxa')?.value;
    this.mensaisParcelas = this.parcelasMensais();
    this.valorAprovado = this.aprovadoValor();
    this.rendaAprovada = this.renda();
    this.valorTotalImovelJuros = this.valorTotalEmprestimoJuros()

    let nome = this.nome;
    let profissao = this.profissao;
    let cpf = this.cpf;
    let email = this.email;
    let data = this.data;
    let cep = this.cep;
    let celular = this.celular;

    if (this.rendaAprovada) {

      this.dadosClienteImovelModel = new DadosClienteImovelModel(
        nome,profissao,cpf,email,
        data,cep,celular,
        this.rendaMensal,
        this.valorImovel,
        this.valorEntrada,
        this.mensaisParcelas,
        this.valorAprovado,
        this.quantidadeParcelas,
        this.dataHoje,
        this.taxa,
        this.valorTotalImovelJuros
      );

      // enviar dados para o banco de dados
      this.subscription.add(
        this.propertyService.criarBD(this.dadosClienteImovelModel).subscribe(() => {

        })
      )

      this.aprovado();
    }
    else this.reprovado();
  }

  renda(): boolean {
    if (this.mensaisParcelas > (this.rendaMensal * 0.3)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.validacao();
  }

  reprovado() {
    this.router.navigate(['/reprov']);
  }
  aprovado() {
    this.requestAprovado = {
       taxa: this.taxa,
       totalParcelaInicial: this.mensaisParcelas ,
       totalValorAprovado: this.valorAprovado,
       valorTotalImovelJuros : this.valorTotalImovelJuros,
    }

    this.visulizarAprov = true ;
    this.visualizarModel = false ;

  }
}
export class RequestAprovadoModel{
  taxa : number;
  totalParcelaInicial : number;
  totalValorAprovado :number;
  valorTotalImovelJuros : number;

}
