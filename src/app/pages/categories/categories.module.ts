import { LOCALE_ID, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CategoriesRoutingModule } from './categories-routing.module';
import { DatasComponent } from './datas/datas.component';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { DatasPropertyComponent } from './datas-property/datas-property.component';
import { ResultReprovadoComponent } from './result-reprovado/result-reprovado.component';
import { HistoricComponent } from './historic/historic.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results-aprovado/results.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    DatasComponent,
    HomeComponent,
    DatasPropertyComponent,
    ResultsComponent,
    ResultReprovadoComponent,
    HistoricComponent,
    ChartComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    CategoriesRoutingModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,

  ],
  exports: [
    DatasComponent,
    HomeComponent,
    DatasPropertyComponent,
    ResultsComponent,
    ResultReprovadoComponent,
    HistoricComponent,
    // RouterModule,
    // CommonModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class CategoriesModule {}
