import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/database/database.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  modelo: any = [];
  usuarios: any = [];
  promises: any = [];

  private formulario : FormGroup;

  constructor(
    private storage: Storage,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioDao: UsuarioService,
    private alertCtrl: AlertController,
    private databaseDao: DatabaseService
  ) 
  {
    this.modelo.push(
      {
        nome: "",
        endereco: "",
        email: "",
        senha: "",
        cnpj: "",
        cpf: "",
        regra: "Usuario",
        sexo: ""
      });

      this.formulario = this.formBuilder.group(
        {
          cpf: ['', Validators.required],
        });
  }

  ngOnInit()
  {
  }

  salvar()
  {
    this.modelo.regra = "Usuario";
    this.modelo.cnpj = "";
    console.log(this.modelo);

    this.usuarioDao.insertUsuarioApi(this.modelo)
    .then((resultado:any)=>
    {
      if(resultado)
      {
        if(resultado.data=="true")
        {
          this.mensagem("Aviso","Usuario criado com Sucesso!").then(()=>
          {
            this.registro_sucesso();
          });
        }
        else
        {
          this.mensagem("Aviso","Falha ao criar o usuario!");
        }
      }
    });
  }

  registro_sucesso()
  {
      this.promises = [];
    
      this.promises.push
      (
        this.databaseDao.createTableUsuario().then((retorno: any)=>
        {
        })
      );
  
      this.promises.push
      (
        this.usuarioDao.clearAll().then((resposta: any)=>
        { 
        })
      );
  
      this.promises.push
      (
        this.usuarioDao.getFromApi().then((usuarios: any)=>
        {
          this.usuarios = usuarios;
        })
      );

      Promise.all(this.promises).then((execucao:any)=>
      {
        this.usuarioDao.insertUsuario(this.usuarios).then((resultado:any)=>
        {
          this.usuarioDao.getUserByLogin(this.modelo.email, this.modelo.senha).then((retorno:any)=>
          {
            if(retorno.length>0)
            {
              this.storage.set("usuario",retorno[0]);
              this.router.navigate(["/produtos-cadastrados"]);
            }
            else
            {
              this.mensagem("Aviso","Não foi encontrado nenhum usuario!");
            }
          });
        });
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

}
