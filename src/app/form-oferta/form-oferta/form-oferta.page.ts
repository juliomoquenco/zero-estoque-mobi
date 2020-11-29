import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormOfertaService } from '../form-oferta.service';
import { Storage } from '@ionic/storage';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.page.html',
  styleUrls: ['./form-oferta.page.scss'],
})
export class FormOfertaPage implements OnInit {

  nome_produto: string = "";
  produto: any;

  valor_oferta: string = "0,00";

  usuario_id: number = 0;
  usuario: any;

  private formulario : FormGroup;

  constructor
  (
    private router: Router,
    private formOfertaService: FormOfertaService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) 
  {
    if (this.router.getCurrentNavigation().extras.queryParams) 
    {
      const queryParams = this.router.getCurrentNavigation().extras.queryParams;
      this.produto = queryParams.produto ? JSON.parse(queryParams.produto) : null;

      if(this.produto != null)
      {
        this.nome_produto = this.produto.nome;
      }
    }

    this.storage.get("usuario").then((valor:any)=>
    {
      this.usuario = valor;
      this.usuario_id = valor.id_server;
    });

    this.formulario = this.formBuilder.group({
      valor_oferta: ['', Validators.required],
    });

  }

  mandarOferta()
  {
   this.formOfertaService.mandarOferta(
    {
      usuario_id: this.usuario_id,
      produto_id: this.produto.id,
      valor_oferta: this.valor_oferta
    }).then((retorno)=>
    {
      this.mensagem("Aviso","Oferta enviada com sucesso!");
    });
  }

  async mensagem(header: string, msg: string)
  {
    var alerta = await this.alertCtrl.create(
      {
        header: header,
        message: msg
      });

    alerta.present();
  }

  ngOnInit()
  {
  }

}
