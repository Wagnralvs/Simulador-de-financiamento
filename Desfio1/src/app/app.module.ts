import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {Router, RouterModule, Routes} from '@angular/router';
import { NgxMaskModule  } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { DatasComponent } from './pages/categories/datas/datas.component';
import { DatasPropertyComponent } from './pages/categories/datas-property/datas-property.component';
import { HomeComponent } from './pages/categories/home/home.component';
import { ResultsComponent } from './pages/categories/datas-property/results/results.component';
import { DatasPropertyService } from './pages/categories/services/datas-property-service';
import { ResultReprovadoComponent } from './pages/categories/result-reprovado/result-reprovado.component';
import { HistoricComponent } from './pages/categories/historic/historic.component';

import localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CategoriesModule } from './pages/categories/categories.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    // DatasComponent,
    // DatasPropertyComponent,
    // HomeComponent,
    // ResultsComponent,
    // ResultReprovadoComponent,
    // HistoricComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    // CategoriesModule,
    NgxMaskModule.forRoot({
     dropSpecialCharacters:false
    })
  ],
   providers: [
    // DatasPropertyService,
            { provide: LOCALE_ID,
             useValue : 'pt-BR',}],
  bootstrap: [AppComponent],
  exports:[AppComponent]

})
export class AppModule { }
