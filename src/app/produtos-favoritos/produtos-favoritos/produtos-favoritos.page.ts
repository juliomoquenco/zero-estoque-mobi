import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProdutosFavoritosService } from '../produtos-favoritos.service';

@Component({
  selector: 'app-produtos-favoritos',
  templateUrl: './produtos-favoritos.page.html',
  styleUrls: ['./produtos-favoritos.page.scss'],
})
export class ProdutosFavoritosPage implements OnInit {

  usuario: any;
  produtos: any = [];
  promises: any = [];

  constructor
  (
    private storage: Storage,
    private router: Router,
    private produtoDao: ProdutosFavoritosService,
    private favoritoDao: ProdutosFavoritosService,
    private alertCtrl: AlertController
  ) 
  { 
    this.loadingFavoritos();
  }
  loadingFavoritos()
  {
    this.storage.get("usuario").then((valor:any)=>
    {
      this.usuario = valor;
      console.log(this.usuario);

      this.produtoDao.getFromApi(this.usuario.id_server).then((produtos:any)=>
      {
        this.produtos = produtos;

        this.produtos.forEach((produto) => 
        {
          produto.imagens.forEach((imagem)=>
          {
            imagem.nome = "http://erp.sonnitech.com.br/zeroestoque/images/"+imagem.nome;
          });
        });
      });
    });
  }

  removeFavorito(produto_id:number)
  {
    this.favoritoDao.removeProdutoApi(
      this.usuario.id_server,
      produto_id
    ).then(()=>
    {
      this.mensagem("Aviso","Removido como Favorito!")
      .then(()=>
      {
        this.produtos = [];
        this.loadingFavoritos();
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

  openFormOferta(produto:any)
  {
    this.router.navigate(["/form-oferta"], 
    {
      queryParams: 
      {
        produto: JSON.stringify(produto)
      }
    });
  }

  open(pagina:string)
  {
    this.router.navigate(["/"+pagina]);
  }

  ngOnInit() 
  {
  }


}
