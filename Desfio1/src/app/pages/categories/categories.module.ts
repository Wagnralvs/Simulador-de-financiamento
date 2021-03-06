import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CategoriesRoutingModule } from './categories-routing.module';
import { DatasComponent } from './datas/datas.component';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { DatasPropertyComponent } from './datas-property/datas-property.component';
import { ResultsComponent } from './datas-property/results/results.component';
import { ResultReprovadoComponent } from './datas-property/result-reprovado/result-reprovado.component';



@NgModule({
  declarations: [
    DatasComponent,
    HomeComponent,
    DatasPropertyComponent,
    ResultsComponent,
    ResultReprovadoComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule
  ],
  exports:[DatasPropertyComponent]
})
export class CategoriesModule { }
