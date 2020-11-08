import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.page.html',
  styleUrls: ['./form-oferta.page.scss'],
})
export class FormOfertaPage implements OnInit {

  nome_produto:string = "";

  produto: any;

  constructor(
    private router: Router
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
  }

  ngOnInit() {
  }

}
