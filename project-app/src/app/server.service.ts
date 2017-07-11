import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ServerService{

constructor(private http: Http){}
    storeServers(servers: any[]){
       return this.http.put('https://cmsc-7d779.firebaseio.com/data.json',servers)
    }

    getServers(){
        return this.http.get('https://cmsc-7d779.firebaseio.com/data.json').map(

            (response: Response) =>{
                const data = response.json();
                return data;
            }
        );
    }
}