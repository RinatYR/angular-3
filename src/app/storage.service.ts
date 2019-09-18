import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  dataStr : string;
  dataRes : any;
  constructor() { }
  save(key : string, data : any){
    this.dataStr = JSON.stringify(data);
    localStorage.setItem(key, this.dataStr);
  }
  load(key : string) : any{
    this.dataRes = JSON.parse(localStorage.getItem(key));
    if(this.dataRes != null){
      return this.dataRes;
    }else{
      return [];
    }
  }
  reset(){
    localStorage.clear();
  }
}