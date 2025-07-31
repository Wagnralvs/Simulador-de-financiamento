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
})
@Injectable()
export class DatasPropertyComponent implements OnInit, OnDestroy {
  private dadosClienteImovelModel: DadosClienteImovelModel;
  public dadosClienteModel: ModalCliente;
  public formulario: UntypedFormGroup;
  public requestAprovado: RequestAprovadoModel;

  public entradaMin: number;
  private taxa: number;
  public dataHoje: number = Date.now();

  public rendaMensal: number;
  public valorImovel: number;
  public valorEntrada: number;
  public quantidadeParcelas: number;
  public mensaisParcelas: number;
  public valorAprovado: number;
  public rendaAprovada: boolean;
  public valorTotalImovelJuros: number;
  public id = '';
  public menssage = '';
  public dataCliente: ModalCliente;

  private subscription: Subscription;
  constructor(
    private propertyService: DatasPropertyService,
    private clienteService: ServiceCliente,
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {
    this.subscription = new Subscription();
    this.onForm();
  }

  ngOnInit(): void {
    this.clienteService.dadosclientes$.subscribe((result) => {
      if (result) {
        this.dataCliente = result;
      }
    });
  }

  onForm() {
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
    const taxaMensal = this.taxa / 12 / 100;

    const totalParcelasMensais =
      ((this.valorImovel - this.valorEntrada) / this.quantidadeParcelas) *
      (taxaMensal + 1);

    return totalParcelasMensais;
  }
  valorTotalEmprestimoJuros(): number {
    const jurosTotal = (this.taxa * this.quantidadeParcelas) / 12 / 100;
    const valorTotalImovelJuros = this.valorAprovado * (jurosTotal + 1);

    return valorTotalImovelJuros;
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
    this.valorTotalImovelJuros = this.valorTotalEmprestimoJuros();

    if (this.rendaAprovada) {
      this.dadosClienteImovelModel = new DadosClienteImovelModel(
        this.dataCliente.nome,
        this.dataCliente.profissao,
        this.dataCliente.cpf,
        this.dataCliente.email,
        this.dataCliente.data,
        this.dataCliente.cep,
        this.dataCliente.celular,
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
      this.subscription.add(
        this.propertyService
          .criarBD(this.dadosClienteImovelModel)
          .subscribe((result) => {
            console.log('dados salvos' + result);
          })
      );
      this.aprovado();
    } else this.reprovado();
  }

  renda(): boolean {
    if (this.mensaisParcelas > this.rendaMensal * 0.3) {
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
      totalParcelaInicial: this.mensaisParcelas,
      totalValorAprovado: this.valorAprovado,
      valorTotalImovelJuros: this.valorTotalImovelJuros,
      valorEntrada: this.valorEntrada,
      juros: this.valorTotalImovelJuros - this.valorAprovado,
    };
    this.clienteService.requestApproveModel$.next(this.requestAprovado);
    this.router.navigate(['/aprov']);
  }
}
export class RequestAprovadoModel{
  taxa : number;
  totalParcelaInicial : number;
  totalValorAprovado :number;
  valorTotalImovelJuros : number;
  valorEntrada?:number
  juros?:number

}
