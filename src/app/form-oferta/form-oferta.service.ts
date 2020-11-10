import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentServerService } from '../current-server/current-server.service';

@Injectable({
  providedIn: 'root'
})
export class FormOfertaService 
{
  constructor
  (
    private httpPost: HttpClient,
    private currentServer: CurrentServerService
  ) 
  {

  }

  mandarOferta(modelo: any)
  {
    return new Promise((resolve,reject)=>
    {
      let url = this.currentServer.getServer()+"/setOferta";
      let postData = new FormData();

      postData.append('usuario_id', modelo.usuario_id);
      postData.append('produto_id', modelo.produto_id);
      postData.append('valor_oferta', modelo.valor_oferta);

      this.httpPost.post(url, postData)
      .subscribe((data)=>
      {
        resolve(data);
      });
    });

  }
}
