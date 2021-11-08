import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DatasPropertyComponent } from './pages/categories/datas-property/datas-property.component';
import { ResultReprovadoComponent } from './pages/categories/datas-property/result-reprovado/result-reprovado.component';
import { ResultsComponent } from './pages/categories/datas-property/results/results.component';
import { DatasComponent } from './pages/categories/datas/datas.component';
import { HomeComponent } from './pages/categories/home/home.component';


const routes: Routes = [
  

   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'next' , component: DatasComponent},
   {path: 'property', component: DatasPropertyComponent},
   {path: 'results', component: ResultsComponent},
   {path: 'reprov', component: ResultReprovadoComponent}

   
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
