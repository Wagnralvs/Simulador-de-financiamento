import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {Router, RouterModule, Routes} from '@angular/router';
import { NgxMaskModule  } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CategoriesModule } from './pages/categories/categories.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiMockAngularInMemoryWebApiService } from './pages/categories/services/api-mock/api-mock-angular-in-memory-web-api.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiMockAngularInMemoryWebApiService),

    CategoriesModule,
    NgxMaskModule.forRoot({
     dropSpecialCharacters:false
    })
  ],
   providers: [
    // DatasPropertyService,
            { provide: LOCALE_ID,
             useValue : 'pt-BR',}],
  bootstrap: [AppComponent],
  exports:[
      AppComponent,
   ]

})
export class AppModule { }
