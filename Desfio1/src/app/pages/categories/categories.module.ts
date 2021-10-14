import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';

import { DatasComponent } from './datas/datas.component';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { DatasPropertyComponent } from './datas-property/datas-property.component';


@NgModule({
  declarations: [
    DatasComponent,
    HomeComponent,
    DatasPropertyComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriesRoutingModule,
    NgxMaskModule.forChild()
  ]
})
export class CategoriesModule { }
