import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosFavoritosPageRoutingModule } from './produtos-favoritos-routing.module';

import { ProdutosFavoritosPage } from './produtos-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosFavoritosPageRoutingModule
  ],
  declarations: [ProdutosFavoritosPage]
})
export class ProdutosFavoritosPageModule {}
