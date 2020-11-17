import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCadastroPage } from './editar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCadastroPageRoutingModule {}
