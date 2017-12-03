import { Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsoleService {

  //TODO add listener to reload the file everytime he changes
  //complete :EventEmitter = new EventEmitter();
    private subject = new Subject<any>();

  constructor(private http:Http) { }

   showFile() {
        //TODO find an other way to load the file
        //with this solution the file have to be include to Nodejs package deployed (cf: angular-cli.json file)
        //see if the shell can copy the file to the dist folder ?
       return this.http.get('toBeRemove.log').map((response:Response) => response.text());
   }

   getLog(): Observable<any> {
     return this.subject.asObservable();
   }

}
