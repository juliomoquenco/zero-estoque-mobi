import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCadastroPageRoutingModule } from './editar-cadastro-routing.module';

import { EditarCadastroPage } from './editar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCadastroPageRoutingModule
  ],
  declarations: [EditarCadastroPage]
})
export class EditarCadastroPageModule {}
