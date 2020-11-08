import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/usuario.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  ) { }

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
        this.messagem("Aviso","Não foi encontrado nenhum usuario!");
      }
    });
  }

  async messagem(header: string, msg: string)
  {
    var alerta = await this.alertCtrl.create(
      {
        header: header,
        message: msg
      });

    alerta.present();
  }

}
