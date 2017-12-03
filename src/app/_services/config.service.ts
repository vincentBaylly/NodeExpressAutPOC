import { DEPLOY_CONFIG, IDeployConfig } from '../_configs/index';
import { Injectable, Inject } from '@angular/core';

import { DeployForm } from '../_models/index';

@Injectable()
export class ConfigService {
    private deployForm: DeployForm;

    constructor(@Inject(DEPLOY_CONFIG) private config: IDeployConfig) {
    }

    loadDeployForm(){
      //console.log('[INFO] config: ' + JSON.stringify(this.config));
      //TODO fetch the artifactory to get application versions
      this.deployForm = new DeployForm(this.config.apps, this.config.hosts, ['1.18.6','1.19']);
      //console.log('[INFO] deploy form: ' + JSON.stringify(this.deployForm));
      return this.deployForm;
    }
}
