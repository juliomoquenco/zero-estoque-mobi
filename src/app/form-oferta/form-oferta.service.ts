import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import { CurrentServerService } from '../current-server/current-server.service';

@Injectable({
  providedIn: 'root'
})
export class FormOfertaService 
{
  constructor
  (
    private http: HTTP,
    private currentServer: CurrentServerService
  ) 
  {

  }

  mandarOferta(modelo: any)
  {
    return new Promise((resolve,reject)=>
    {
      let url = this.currentServer.getServer()+"/setOferta";
      this.http.get(
        url+"?usuario_id="+modelo.usuario_id.toString()+"&produto_id="+modelo.produto_id.toString()+"&valor_oferta="+modelo.valor_oferta
        ,
        {},
        {})
      .then((data)=>
      {
        resolve(true);
      })
      .catch((data)=>
      {
        console.log(data);
        reject();
      });
    });

  }
}
