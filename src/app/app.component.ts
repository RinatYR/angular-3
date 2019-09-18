import { Component } from '@angular/core';
import {StorageService} from './storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [StorageService]
})
export class AppComponent  {
  items: string[] = [];
    constructor(private storageService: StorageService){}
      
    addItem(name: string, data: string){
        this.items.push(data);
        this.storageService.save(name, this.items);
    }
    load(name: string){
        this.items = this.storageService.load(name);
    }
    reset(){
      this.storageService.reset();
      this.items = [];
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/