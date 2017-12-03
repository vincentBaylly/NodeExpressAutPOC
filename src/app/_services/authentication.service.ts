import { Injectable , Output, EventEmitter} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../_models/index';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  @Output() getLoggedInUser: EventEmitter<any> = new EventEmitter();

  login(username: string, password: string) {

    var headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');

    var body = 'username=' + username + '&password=' + password;

    return this.http.post('/api/ldapauthenticate', body, { headers : headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user: User = <User>response.json();

        //TODO add password validation
        if (user) {
          this.getLoggedInUser.emit(user);
        }else{
          this.getLoggedInUser.emit(null);
        }

        return user;
      });
  }

  logout() {
    this.getLoggedInUser.emit(null);
  }
}
