import { Component } from '@angular/core';
import{Http,Response} from '@angular/http';
import {ServerService} from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)

/** Exported App Module which can be found in the index.html file via the 'app-root' selector lcoated above */
export class AppComponent {

  /** The following commented out code relates to the angular service file generated "server.service.ts" */
  /** 
  constructor(private serverService: ServerService){}
  myArray = ['Baltimore','Chicago'];

  onSave(){
    this.serverService.storeServers(this.myArray).subscribe(
      (response) =>console.log(response), (error) =>console.log(error)    
    );
  }

  onGet(){
    this.serverService.getServers()
    .subscribe(
      (data: any[]) => console.log(data),
      (error) =>console.log(error) 
    );
  }
  */
}
