import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './database/database.service';
import { UsuarioService } from './usuario/usuario.service';

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
    private databaseDao: DatabaseService
  ) 
  {
    this.addPromises().then(()=>
    {
      this.initializeApp();
    });
  }

  addPromises()
  {
    return new Promise((resolve,reject)=>
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

        resolve(true);
    });
  }

  initializeApp() 
  {
    this.platform.ready().then(() => 
    {
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
