import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProdutosFavoritosService } from 'src/app/produtos-favoritos/produtos-favoritos.service';
import { ProdutosCadastradosService } from '../produtos-cadastrados.service';

@Component({
  selector: 'app-produtos-cadastrados',
  templateUrl: './produtos-cadastrados.page.html',
  styleUrls: ['./produtos-cadastrados.page.scss'],
})
export class ProdutosCadastradosPage implements OnInit 
{

  usuario: any;
  produtos: any = [];
  promises: any = [];

  constructor
  (
    private storage: Storage,
    private router: Router,
    private produtoDao: ProdutosCadastradosService,
    private favoritoDao: ProdutosFavoritosService,
    private alertCtrl: AlertController,
    private menu: MenuController
  ) 
  {
    this.menu.enable(true);
    this.loadingFavoritos();
  }
  
  loadingFavoritos()
  {
    this.storage.get("usuario").then((valor:any)=>
    {
      this.usuario = valor;

      this.produtoDao.getFromApi().then((produtos:any)=>
      {
        this.produtos = produtos;

        this.produtos.forEach((produto) => 
        {

          this.favoritoDao.getVerifyFavorito(this.usuario.id_server, produto.id).then((retorno:any)=>
          {
            if(retorno.length>0)
            {
              console.log(retorno[0]);
              produto.favorito_id = retorno[0].id;
            }
            else
            {
              produto.favorito_id = 0;
            }
          });

          produto.imagens.forEach((imagem)=>
          {
            imagem.nome = "http://erp.sonnitech.com.br/zeroestoque/images/"+imagem.nome;
          });
        });
      });
    });
  }

  defineFavorito(produto_id:number)
  {
    this.favoritoDao.insertProdutoApi(
      this.usuario.id_server,
      produto_id
    ).then(()=>
    {
      this.mensagem("Aviso","Definido como Favorito!")
      .then(()=>
      {
        this.produtos = [];
        this.loadingFavoritos();
      });
    });
  }
  removeFavorito(produto_id:number)
  {
    this.favoritoDao.removeProdutoApi(
      this.usuario.id_server,
      produto_id
    )
    .then(()=>
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

  logoff()
  {
    this.storage.clear();
    this.router.navigate(['/home']);
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
    this.produtos = [];
    this.loadingFavoritos();
  }

  ionViewWillEnter()
  {
    this.produtos = [];
    this.loadingFavoritos();
  }

}
