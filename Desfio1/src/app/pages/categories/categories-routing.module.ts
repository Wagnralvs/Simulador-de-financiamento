import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatasComponent } from './datas/datas.component';

const routes: Routes = [
 // {path: 'new' , component: DatasComponent},
  //{path: '' , component: DatasComponent},
  {path: '' , component: DatasComponent}

    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
