import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOfertaPage } from './form-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: FormOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOfertaPageRoutingModule {}
