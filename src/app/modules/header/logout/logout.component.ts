import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@appServices';

@Component({
  selector: 'gkc-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
