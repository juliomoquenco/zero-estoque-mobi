import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService 
{

  constructor
  (
    private sqlite: SQLite
  ) 
  { 

  }

  getDB()
  {
      return this.sqlite.create(
      {
        name: "zeroestoque.db",
        location: "default"
      });
  }

  createTableUsuario()
  {
    return new Promise((resolve,reject)=>
    {
      this.getDB().then((db: SQLiteObject)=>
      {
        let sql = `
        CREATE TABLE IF NOT EXISTS usuarios
        (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          id_server INTEGER NOT NULL,
          nome VARCHAR(100),
          email VARCHAR(100),
          senha VARCHAR(100),
          cpf VARCHAR(20),
          cnpj VARCHAR(20),
          sexo VARCHAR(12),
          endereco VARCHAR(255),
          regra VARCHAR(12) 
        )
        `;
        db.executeSql(sql,[])
        .then((resultado)=>
        {
          console.log('tabela usuarios criada');
          resolve(true);
        })
        .catch((err)=>
        {
          console.log(err);
          reject(err);
        });
      });
    });
  }
}
