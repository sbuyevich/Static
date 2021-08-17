import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AccountInfo, AuthenticationResult, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

type IdTokenClaims = {
  preferred_username: string,
  roles: []
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  account?: AccountInfo;  
  idTokenClaims?: IdTokenClaims;
  loginDisplay = false;

  private readonly _destroying$ = new Subject<void>();

  constructor(//@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, 
  private http: HttpClient,
  private broadcastService: MsalBroadcastService, 
  private authService: MsalService) { }

  ngOnInit() {    

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
    })
  }

  login() {
    this.authService.loginRedirect();  
  }

  logout() { // Add log out function here
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:5555'
    });
  }

  setLoginDisplay() {    
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    if(this.loginDisplay){
      this.account = this.authService.instance.getAllAccounts()[0];
      this.idTokenClaims = this.account.idTokenClaims as IdTokenClaims;
      console.log("idTokenClaims", this.idTokenClaims.preferred_username);
      console.log("roles", this.idTokenClaims.roles);    
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
