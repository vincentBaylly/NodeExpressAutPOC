import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

// import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  moduleId: 'Home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  // implements OnInit {
  model: any = {};
  loading = false;

/*  constructor(
        private route: ActivatedRoute,
        private router: Router
  ) { }*/

/*  ngOnInit() {

  }*/

  login() {
    this.loading = true;
    /*        this.authenticationService.login(this.model.username, this.model.password)
                .subscribe(
                    data => {
                        this.router.navigate([this.returnUrl]);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });*/
  }
}
