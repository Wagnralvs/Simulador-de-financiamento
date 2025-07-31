import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatasPropertyComponent } from './pages/categories/datas-property/datas-property.component';
import { ResultReprovadoComponent } from './pages/categories/result-reprovado/result-reprovado.component';
import { DatasComponent } from './pages/categories/datas/datas.component';
import { HistoricComponent } from './pages/categories/historic/historic.component';
import { HomeComponent } from './pages/categories/home/home.component';
import { ResultsComponent } from './pages/categories/results-aprovado/results.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'next' , component: DatasComponent},
   {path: 'property', component: DatasPropertyComponent},
   {path: 'aprov', component: ResultsComponent},
   {path: 'reprov', component: ResultReprovadoComponent},
   {path: 'historic' , component: HistoricComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
