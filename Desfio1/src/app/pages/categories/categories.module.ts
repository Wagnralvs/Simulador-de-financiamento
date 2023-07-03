import { LOCALE_ID, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { DatasComponent } from './datas/datas.component';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { DatasPropertyComponent } from './datas-property/datas-property.component';
import { ResultsComponent } from './datas-property/results/results.component';
import { ResultReprovadoComponent } from './result-reprovado/result-reprovado.component';
import { AppModule } from 'src/app/app.module';
import { HistoricComponent } from './historic/historic.component';


@NgModule({
  declarations: [
    DatasComponent,
    HomeComponent,
    DatasPropertyComponent,
    ResultsComponent,
    ResultReprovadoComponent,
    HistoricComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    AppModule,
  ],
  exports: [
    DatasComponent,
    HomeComponent,
    DatasPropertyComponent,
    ResultsComponent,
    ResultReprovadoComponent,
    HistoricComponent
  ],
  providers: [
    //DatasPropertyService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class CategoriesModule {}
