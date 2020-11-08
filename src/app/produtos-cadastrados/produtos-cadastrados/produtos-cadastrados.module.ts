import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosCadastradosPageRoutingModule } from './produtos-cadastrados-routing.module';

import { ProdutosCadastradosPage } from './produtos-cadastrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosCadastradosPageRoutingModule
  ],
  declarations: [ProdutosCadastradosPage]
})
export class ProdutosCadastradosPageModule {}
