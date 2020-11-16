import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private route: Router,
    private storage: Storage
  ) {}

  open(pagina:string)
  {
    if(pagina == "login")
    {
      this.storage.get("usuario").then((usuario:any)=>
      {
        console.log(usuario);
        if(usuario)
        {
          this.route.navigate(["/produtos-cadastrados"]);
        }
        else
        {
          this.route.navigate(["/"+pagina]);
        }
      });
    }
    else
    {
      this.route.navigate(["/"+pagina]);
    }
  }

}
