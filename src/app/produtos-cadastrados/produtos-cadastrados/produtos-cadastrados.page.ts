import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProdutosCadastradosService } from '../produtos-cadastrados.service';

@Component({
  selector: 'app-produtos-cadastrados',
  templateUrl: './produtos-cadastrados.page.html',
  styleUrls: ['./produtos-cadastrados.page.scss'],
})
export class ProdutosCadastradosPage implements OnInit {

  usuario: any;
  produtos: any = [];
  promises: any = [];

  constructor
  (
    private storage: Storage,
    private router: Router,
    private produtoDao: ProdutosCadastradosService
  ) 
  { 
    this.storage.get("usuario").then((valor:any)=>
    {
      this.usuario = valor;
    });

    this.produtoDao.getFromApi().then((produtos:any)=>
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
