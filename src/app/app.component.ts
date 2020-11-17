import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './database/database.service';
import { UsuarioService } from './usuario/usuario.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent 
{
  promises : any = [];
  usuarios: any = [];

  constructor
  (
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private usuarioDao: UsuarioService,
    private databaseDao: DatabaseService,
    
    private storage: Storage,
    private router: Router
  ) 
  {
    this.initializeApp();
  }
  logoff()
  {
    this.storage.clear();
    this.router.navigate(['/home']);
  }
  open(pagina:string)
  {
    this.router.navigate(["/"+pagina]);
  }

  initializeApp() 
  {
    this.platform.ready().then(() => 
    {
      this.promises = [];
    
      this.promises.push
      (
        this.databaseDao.createTableUsuario().then((retorno: any)=>
        {
        })
      );
  
      this.promises.push
      (
        this.usuarioDao.clearAll().then((resposta: any)=>
        { 
        })
      );
  
      this.promises.push
      (
        this.usuarioDao.getFromApi().then((usuarios: any)=>
        {
          this.usuarios = usuarios;
        })
      );

      Promise.all(this.promises).then((execucao:any)=>
      {
        this.usuarioDao.insertUsuario(this.usuarios).then((resultado:any)=>
        {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        });
      });

    });
  }
}
