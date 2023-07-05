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
   {path: 'results', component: ResultsComponent},
   {path: 'reprov', component: ResultReprovadoComponent},
   {path: 'historic' , component: HistoricComponent}

  //  {path: '', loadChildren:() => import('../app/pages/categories/home/home.component').then( m => m.HomeComponent) },
  //  {path: 'home', loadChildren:() => import('../app/pages/categories/home/home.component').then( m => m.HomeComponent) },
  //  {path: 'next', loadChildren:() => import('../app/pages/categories/datas/datas.component').then( m => m.DatasComponent) },
  //  {path: 'property', loadChildren:() => import('../app/pages/categories/datas-property/datas-property.component').then( m => m.DatasPropertyComponent) },
  //  {path: 'results', loadChildren:() => import('./pages/categories/results-aprovado/results.component').then( m => m.ResultsComponent) },
  //  {path: 'reprov', loadChildren:() => import('../app/pages/categories/historic/historic.component').then( m => m.HistoricComponent) },



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
