import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './app.config';
import { NgForm} from '@angular/forms';
import { Server } from './app.query';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public electronService: ElectronService,
    private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    let s = new Server('Anoop','Khushboo');
    s.displayName();
     

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  onAddItem(form: NgForm){
  
console.log(form);
var value = form.value;
  var newFormValues = new newFormValues(value.name,value.amount,value.type,value.interest,value.date);
  }
}
