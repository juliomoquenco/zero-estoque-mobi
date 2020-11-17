import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { CurrentServerService } from '../current-server/current-server.service';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor
  (
    private http: HTTP,
    private databaseDao: DatabaseService,
    private currentServer: CurrentServerService
  ) { }

  
  getFromApi()
  {
    return new Promise((resolve, reject)=>
    {
      this.http.get(this.currentServer.getServer()+"/getUsuarios",{},{})
      .then((retorno)=>
      {
        console.log('api usuarios recebido');
        resolve(JSON.parse(retorno.data));
      })
      .catch((err)=>
      {
        console.log(err);
        reject(); 
      });
    });
  }

  insertUsuario(modelos: any)
  {
    return new Promise((resolve,reject)=>
    {
      
      this.databaseDao.getDB().then((db: SQLiteObject)=>
      {
        let sql = "";
        modelos.forEach((modelo)=>
        {
          sql = `
          INSERT INTO usuarios
          (
            id_server, nome, email, senha, cpf, cnpj, sexo, endereco, regra
          )
          VALUES
          (${modelo.id}, '${modelo.nome}', '${modelo.email}', '${modelo.senha}',
          '${modelo.cpf}', '${modelo.cnpj}', '${modelo.sexo}', '${modelo.endereco}', '${modelo.regra}');
          `;
          db.executeSql(sql, [])
          .then((insercao:any)=>
          {});
        });

        resolve(true);
      });
    });
  }

  insertUsuarioApi(modelo: any)
  {
    return new Promise((resolve,reject)=>
    {
      this.http.get(this.currentServer.getServer()+"/setUsuario",
      {
        nome: modelo.nome,
        endereco: modelo.endereco,
        email: modelo.email,
        senha: modelo.senha,
        cpf: modelo.cpf,
        cnpj: modelo.cnpj,
        sexo: modelo.sexo,
        regra: modelo.regra
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
  editUsuarioApi(modelo: any)
  {
    return new Promise((resolve,reject)=>
    {
      this.http.get(this.currentServer.getServer()+
      `/editUsuario?id=${modelo.id_server}&nome=${modelo.nome}&endereco=${modelo.endereco}&email=${modelo.email}&senha=${modelo.senha}&cpf=${modelo.cpf}&cnpj=${modelo.cnpj}&sexo=${modelo.sexo}&regra=${modelo.regra}`,
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
        let sql = `SELECT * FROM usuarios`;
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
        let sql = `SELECT * FROM usuarios where email = '${email}' and senha = '${senha}'`;
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
        DELETE FROM usuarios WHERE id > 0
        `;
        db.executeSql(sql, [])
        .then((resultado:any)=>
        {
          console.log('tabela usuarios limpa');
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
