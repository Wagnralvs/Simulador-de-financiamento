import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {Router, RouterModule, Routes} from '@angular/router';
import { NgxMaskModule  } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DatasComponent } from './pages/categories/datas/datas.component';
import { DatasPropertyComponent } from './pages/categories/datas-property/datas-property.component';
import { HomeComponent } from './pages/categories/home/home.component';
import { ResultsComponent } from './pages/categories/datas-property/results/results.component';
import { DatasPropertyService } from './pages/categories/datas-property/shared/datas-property-service';
import { ResultReprovadoComponent } from './pages/categories/datas-property/result-reprovado/result-reprovado.component';
import { HistoricComponent } from './pages/categories/historic/historic.component';
@NgModule({
  declarations: [
    AppComponent,
    DatasComponent,
    DatasPropertyComponent,
    HomeComponent,
    ResultsComponent,
    ResultReprovadoComponent,
    HistoricComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot({
     dropSpecialCharacters:false
    })
  ],
  providers: [DatasPropertyService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
