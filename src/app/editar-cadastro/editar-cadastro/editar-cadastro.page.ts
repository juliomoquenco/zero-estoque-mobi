import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.page.html',
  styleUrls: ['./editar-cadastro.page.scss'],
})
export class EditarCadastroPage implements OnInit {
  modelo:any;

  constructor(
    private storage: Storage,
    private usuarioDao: UsuarioService,
    private alertCtrl: AlertController,
    private router: Router
  ) 
  {
    this.modelo =
      {
        id_server: "0",
        nome: "",
        endereco: "",
        email: "",
        senha: "",
        cpf: "",
        sexo:"",
        cpnj: "",
        regra: ""
      };

    this.storage.get("usuario").then((usuario:any)=>
    {
      this.modelo = 
      {
        id_server: usuario.id_server.toString(),
        nome: usuario.nome,
        endereco: usuario.endereco,
        email: usuario.email,
        senha: usuario.senha,
        cpf: usuario.cpf,
        sexo: usuario.sexo,
        cpnj: usuario.cnpj,
        regra: usuario.regra
      };
    });
  }

  ngOnInit() {
  }

  salvar()
  {
    this.usuarioDao.editUsuarioApi(this.modelo).then(()=>
    {
      this.mensagem("Aviso","Usuario editado com Sucesso!")
      .then(()=>
      {
        this.router.navigate(['/produtos-cadastrados']);
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
