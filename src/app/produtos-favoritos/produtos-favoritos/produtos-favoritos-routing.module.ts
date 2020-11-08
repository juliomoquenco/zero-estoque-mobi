import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosFavoritosPage } from './produtos-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosFavoritosPageRoutingModule {}
