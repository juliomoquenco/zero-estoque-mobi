import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditarCadastroPageRoutingModule } from './editar-cadastro-routing.module';

import { EditarCadastroPage } from './editar-cadastro.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,
    EditarCadastroPageRoutingModule
  ],
  declarations: [EditarCadastroPage]
})
export class EditarCadastroPageModule {}
