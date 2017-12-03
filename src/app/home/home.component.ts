import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfigService, ConsoleService} from '../_services/index';

//TODO use the user for rights
import { User, DeployForm } from '../_models/index';

@Component({
  moduleId: 'Home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  deployForm: DeployForm;
  model: any = {};
  currentUser: User;
  catalinaOut: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService,
    private consoleService: ConsoleService
  ) {}

  ngOnInit() {
    this.deployForm = this.configService.loadDeployForm();
    //console.log('[INFO] home deploy form: ' + JSON.stringify(this.deployForm));

    //TODO to be remove after the sh deployment done
    this.displayTomcat();
  }

  displayTomcat(){
    this.consoleService.showFile().subscribe(catalinaOut => this.catalinaOut = catalinaOut);
  }

  //TODO have to call the sh to deploy the application
  // deploy(){
  //   TODO display the tomcat console log!!!
  //   this.displayTomcat();
  // }
}
