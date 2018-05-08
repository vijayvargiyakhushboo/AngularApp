import {sqlite3} from 'sqlite3';
//const sqlite3 = require('sqlite3');

export class DB {
  
   constructor(public path: String) {
   	this.path = path;
   }
   
   connect(){
     console.log('anp sqlite3', sqlite3);
     console.log('anp db path ', this.path);
   }
     
   
}
