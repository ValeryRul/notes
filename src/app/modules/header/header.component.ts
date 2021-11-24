import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@appServices';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gkc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  isLogoutBlockActive: boolean = false;
  searchingField: string = '';

  onAddLogoutComponent() {
    this.isLogoutBlockActive = !this.isLogoutBlockActive;
  }

  onLogout() {
    this.onAddLogoutComponent();
    this.authService
      .logout()
      .pipe(take(1))
      .subscribe(() => this.router.navigateByUrl('/login'));
  }

  onClearSearchingField(): void {
    this.searchingField = '';
  }
}
