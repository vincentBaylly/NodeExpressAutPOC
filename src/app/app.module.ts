import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { DEPLOY_CONFIG, DeployConfig, IDeployConfig } from './_configs/index';
import { AlertComponent, ModalComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ModalService, ConsoleService, ConfigService} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    MenuComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    ModalService,
    AuthenticationService,
    UserService,
    ConsoleService,
    ConfigService,
    {provide: DEPLOY_CONFIG, useValue: DeployConfig}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
