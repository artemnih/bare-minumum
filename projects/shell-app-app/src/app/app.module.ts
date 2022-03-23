import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersRouting } from './app-routing.module';
import { ThemeModule } from '@labshare/ngx-components/theme';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {
  NgxCoreServicesModule,
  AuthService,
  ConfigService,
  initializeFromAppConf,
  AppType
} from '@labshare/ngx-core-services';
import { DemoComponent } from './components/demo/demo.component';

function initialize(http: HttpClient, config: ConfigService, auth: AuthService): () => Promise<any> {
  return async () => {
    if (APP_TYPE === AppType.Site) {
      return initializeFromAppConf(http, config, auth);
    } else {
      return auth.configure().toPromise();
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCoreServicesModule.forRoot({ appConf: APP_CONF, appType: APP_TYPE, appBuildVersion: APP_BUILD_VERSION }),
    ThemeModule,
    CommonModule,
    UsersRouting,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    NgxJsonViewerModule,
    FormlyBootstrapModule
  ],
  providers: [
    Title,
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      deps: [HttpClient, ConfigService, AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
