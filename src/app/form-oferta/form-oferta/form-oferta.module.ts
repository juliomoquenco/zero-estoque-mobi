import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { FormOfertaPageRoutingModule } from './form-oferta-routing.module';

import { FormOfertaPage } from './form-oferta.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,

    FormOfertaPageRoutingModule
  ],
  declarations: [FormOfertaPage]
})
export class FormOfertaPageModule {}
