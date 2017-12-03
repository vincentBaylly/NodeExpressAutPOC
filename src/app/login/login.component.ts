import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { AlertService, AuthenticationService, ModalService} from '../_services/index';

@Component({
    moduleId: 'Login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    @Output()
    getLoggedInUser: EventEmitter<any> = new EventEmitter();

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private modalService: ModalService
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
      this.modalService.show();
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.modalService.hide();
              });
    }
}
