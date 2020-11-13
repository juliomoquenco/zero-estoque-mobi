import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { CurrentServerService } from '../current-server/current-server.service';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosFavoritosService {

  constructor(
    private currentServer: CurrentServerService,
    private databaseDao: DatabaseService,
    private http: HTTP
  ) { }

  getFromApi()
  {
    return new Promise((resolve, reject)=>
    {
      this.http.get(this.currentServer.getServer()+"/getProdutosFavoritos",{},{})
      .then((retorno)=>
      {
        console.log('api produtos favoritos recebido');
        resolve(JSON.parse(retorno.data));
      })
      .catch((err)=>
      {
        console.log(err);
        reject(); 
      });
    });
  }
  
  insertProduto(modelos: any)
  {
    return new Promise((resolve,reject)=>
    {
      
      this.databaseDao.getDB().then((db: SQLiteObject)=>
      {
        let sql = "";
        modelos.forEach((modelo)=>
        {
          sql = `
          INSERT INTO produtos
          (
            id_server, descricao, nome, preco
          )
          VALUES
          (${modelo.id}, '${modelo.descricao}', '${modelo.nome}', ${modelo.preco});
          `;
          db.executeSql(sql, [])
          .then((insercao:any)=>
          {});
        });

        resolve(true);
      });
    });
  }

  insertProdutoApi()
  {
    return new Promise((resolve,reject)=>
    {
      this.http.get(this.currentServer.getServer()+"/setProdutoFavorito",
      {
      },{})
      .then((retorno:any)=>
      {
        resolve(retorno);
      })
      .catch((err)=>
      {
        console.log(err);
        reject(); 
      });
    });
  }


  getAll()
  {
    return new Promise((resolve,reject)=>
    {
      this.databaseDao.getDB().then((db: SQLiteObject)=>
      {
        let sql = `SELECT * FROM produtos`;
        db.executeSql(sql, [])
        .then((resultado:any)=>
        {
          let retorno = [];
          for(var i = 0; i<=(resultado.rows.length-1); i++)
          {
            retorno.push(resultado.rows.item(i));
          }
          resolve(retorno);
        })
        .catch((err)=>
        {
          reject(err);
        });
      });
    });
  }

  getUserByLogin(email: string, senha: string)
  {
    return new Promise((resolve,reject)=>
    {
      this.databaseDao.getDB().then((db: SQLiteObject)=>
      {
        let sql = `SELECT * FROM produtos where email = '${email}' and senha = '${senha}'`;
        db.executeSql(sql, [])
        .then((resultado:any)=>
        {
          let retorno = [];
          for(var i = 0; i<=(resultado.rows.length-1); i++)
          {
            retorno.push(resultado.rows.item(i));
          }
          resolve(retorno);
        })
        .catch((err)=>
        {
          reject(err);
        });
      });
    });
  }

  clearAll()
  {
    return new Promise((resolve,reject)=>
    {
      this.databaseDao.getDB().then((db: SQLiteObject)=>
      {
        let sql = `
        DELETE FROM produtos WHERE id > 0
        `;
        db.executeSql(sql, [])
        .then((resultado:any)=>
        {
          console.log('tabela produtos limpa');
          resolve(true);
        })
        .catch((err)=>
        {
          reject(err);
        });
      });
    });
  }
}
