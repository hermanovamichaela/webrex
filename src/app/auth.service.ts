import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private keycloakAuthUrl = 'https://37.205.12.245:9443/auth/realms/linup/protocol/openid-connect/auth';
    private redirectUri = 'http://localhost:8080/login/oauth2/code/oidc';
    private clientId = 'web_app';
    private responseType = 'code';
    private scope = 'openid profile email';
    constructor(private http: HttpClient, private router: Router) {}

    public initiateOAuthFlow() {
        const state = this.generateState();
        const nonca = this.generateNonce();

        const params = new HttpParams()
            .set('response_type', this.responseType)
            .set('client_id', this.clientId)
            .set('scope', this.scope)
            .set('state', state)
            .set('redirect_url', this.redirectUri)
            .set('nonca', nonca);

        window.location.href = `${this.keycloakAuthUrl}?${params.toString()}`;
    }

    private generateState(): string {
        return this.generateRandomValue();
      }
    
      private generateNonce(): string {
        return this.generateRandomValue();
      }
    
      private generateRandomValue(): string {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0].toString(16);
      }
}