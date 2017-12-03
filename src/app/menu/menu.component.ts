import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../_models/index';

import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {
  currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {

    this.authenticationService.getLoggedInUser.subscribe(currentUser => {
      this.setCurrentUSer(currentUser);
    });
    this.authenticationService.getLoggedInUser.emit(this.currentUser);
  }

  setCurrentUSer(currentUser){
    if(currentUser){
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.currentUser = currentUser;
    }else{
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUser = null;
    }
  }

}
