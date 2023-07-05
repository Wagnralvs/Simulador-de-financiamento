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
import { Subscription, tap, pipe} from 'rxjs';


@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css'],
  // providers: [DatasPropertyService, ServiceCliente],
})
@Injectable()
export class DatasPropertyComponent implements OnInit , OnDestroy{
  private dadosClienteImovelModel: DadosClienteImovelModel;
  public dadosClienteModel: ModalCliente ;
  public formulario: UntypedFormGroup;
  public menssage = '';


  private nome: string;
  private profissao: string;
  private email: string;
  private cpf: number;
  private data: string;
  private cep: number;
  private celular: number;
  public entradaMin: number;

  @Input() visualizarModel= false;
  @Input() clienteDados: ModalCliente ;

  //----data -------
  public dataHoje: number = Date.now();

  public rendaMensal: number;
  public valorImovel: number;
  public valorEntrada: number;
  public quantidadeParcelas: number;

  public mensaisParcelas: number;
  public valorAprovado: number ;
  public rendaAprovada: boolean ;

  public id = '';

  private subscription: Subscription ;
  constructor(
    private propertyService: DatasPropertyService,
    private clienteService: ServiceCliente,
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {

    this.subscription = new Subscription();
    if(this.clienteDados){
       debugger
    }


    this.clienteService.pegarDadosCliente().pipe(
      tap((result) => { debugger
        this.visualizarModel = true;
        this.nome = result.nome;
        this.celular = result.celular;
        this.cep = result.cep;
        this.cpf = result.cpf;
        this.data = result.data;
        this.email = result.email;
        this.profissao = result.profissao
       })
    ).subscribe();

  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      rendaMensal: [null, [Validators.required]],
      valorImovel: [null, [Validators.required]],
      valorEntrada: [null, [Validators.required]],
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
        this.menssage = 'O valor da entrada não pode ser inferior a';
        this.entradaMin = this.entradaMinima();
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
    const entradaMinima: number = entradaPorcentagem * this.valorImovel;

    return entradaMinima;
  }

  parcelasMensais(): number {
    const totalParcelasMensais =
      ((this.valorImovel * 0.8) / this.quantidadeParcelas) * 1.058;

    return totalParcelasMensais;
  }

  // -----caclulo validação-----
  validacao() {

    this.rendaMensal = +this.formulario.get('rendaMensal')?.value;
    this.valorImovel = +this.formulario.get('valorImovel')?.value;
    this.valorEntrada = +this.formulario.get('valorEntrada')?.value;
    this.quantidadeParcelas = +this.formulario.get('quantidadeParcelas')?.value;
    this.mensaisParcelas = this.parcelasMensais();
    this.valorAprovado = this.aprovadoValor();
    this.rendaAprovada = this.renda();

    let id = this.id;

    //


    let nome = this.nome;
    let profissao = this.profissao;
    let cpf = this.cpf;
    let email = this.email;
    let data = this.data;
    let cep = this.cep;
    let celular = this.celular;



    if (this.rendaAprovada) {

      this.dadosClienteImovelModel = new DadosClienteImovelModel(
        nome,
        profissao,
        cpf,
        email,
        data,
        cep,
        celular,
        this.rendaMensal,
        this.valorImovel,
        this.valorEntrada,
        this.mensaisParcelas,
        this.valorAprovado,
        this.quantidadeParcelas,
        this.dataHoje
      );
      this.propertyService.receberDados(this.dadosClienteImovelModel);

      // enviar dados para o banco de dados
      this.propertyService.criarBD(this.dadosClienteImovelModel).subscribe(() => {
        this.aprovadoValor();
      });
    } else this.reprovado();
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
    this.router.navigate(['/results']);
  }
}

