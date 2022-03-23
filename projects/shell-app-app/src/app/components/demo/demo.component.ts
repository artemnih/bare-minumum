import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@labshare/ngx-core-services';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  private onAuthorizationResult;

  constructor(private authService: AuthService, private router: Router) {
    this.onAuthorizationResult = this.authService.onAuthorizationResult();
  }

  ngOnInit(): void {
    this.authService.onAuthCallback();
    this.onAuthorizationResult.subscribe(result => {
      if (result.authorizationState === 'authorized') {
        console.log(`authorized`);
      }
    });
  }

  auth() {
    this.authService.login();
  }

}
