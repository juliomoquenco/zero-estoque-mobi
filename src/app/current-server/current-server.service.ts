import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentServerService 
{
  constructor
  (
  ) 
  {    
  }

  getServer()
  {
    return "http://erp.sonnitech.com.br/zeroestoque/api";
  }

}
