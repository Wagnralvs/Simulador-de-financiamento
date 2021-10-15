import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DatasPropertyComponent } from './pages/categories/datas-property/datas-property.component';
import { DatasComponent } from './pages/categories/datas/datas.component';
import { HomeComponent } from './pages/categories/home/home.component';
import { ResultComponent } from './pages/categories/result/result.component';

const routes: Routes = [
   //{ path: 'next', loadChildren: './pages/categories/categories.module.ts#CategoriesModule'},
   //{ path: 'new', loadChildren: './pages/categories/categories.module.ts#CategoriesModule'}


   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'next' , component: DatasComponent},
   {path: 'property', component: DatasPropertyComponent},
   {path: 'result', component: ResultComponent}
   
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
