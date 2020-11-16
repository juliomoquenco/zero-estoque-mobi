import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  txt_login: string = "";
  txt_senha: string = "";

  constructor(
    private usuarioDao: UsuarioService,
    private storage: Storage,
    private router : Router,
    private alertCtrl: AlertController
  ) { 

      this.storage.get("usuario").then((usuario:any)=>
      {
        console.log(usuario);
        if(usuario)
        {
          this.router.navigate(["/produtos-cadastrados"]);
        }
      });

    }

  ngOnInit() {
  }

  logar()
  {
    this.usuarioDao.getUserByLogin(this.txt_login, this.txt_senha).then((retorno:any)=>
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
