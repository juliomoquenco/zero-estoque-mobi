import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegistrarPageRoutingModule } from './registrar-routing.module';

import { RegistrarPage } from './registrar.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarPageRoutingModule
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
