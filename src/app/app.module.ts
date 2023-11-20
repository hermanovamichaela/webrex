import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authConfig } from './auth.config';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(authConfig)
  ],
  providers: [
    { 
      provide: OAuthStorage, 
      useValue: localStorage 
    }, 
    { 
      provide: AuthConfig, 
      useValue: authConfig 
    }, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
