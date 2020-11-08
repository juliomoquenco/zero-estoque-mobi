import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOfertaPageRoutingModule } from './form-oferta-routing.module';

import { FormOfertaPage } from './form-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOfertaPageRoutingModule
  ],
  declarations: [FormOfertaPage]
})
export class FormOfertaPageModule {}
