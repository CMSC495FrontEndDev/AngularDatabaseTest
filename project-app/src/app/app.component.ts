import { Component } from '@angular/core';
import{Http,Response} from '@angular/http';
import {ServerService} from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
