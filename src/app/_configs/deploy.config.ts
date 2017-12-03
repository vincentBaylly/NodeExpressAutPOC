import { OpaqueToken } from "@angular/core";

export let DEPLOY_CONFIG = new OpaqueToken("deploy.config");

export interface IDeployConfig {
    apps: any[];
    hosts:string[];
};

export const DeployConfig: IDeployConfig = {

  apps:[
    {
      id:'APP',
      name:'Application Name'
    },
  ],
  hosts:['HOST1','HOST2','HOST3','HOST4','HOST5','HOST6']
};
