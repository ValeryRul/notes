import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '@appApi/user/user-api.service';
import { User } from '@appApi/user/user-api.types';
import { AuthService } from '@appServices';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gkc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogoutBlockActive: boolean = false;
  searchingField: string = '';
  user!: Observable<User>;

  constructor(private router: Router, private authService: AuthService, private userApiService: UserApiService) {}

  onAddLogoutComponent(): void {
    this.user = this.userApiService.getUserInfo();
    this.isLogoutBlockActive = !this.isLogoutBlockActive;
  }

  onLogout(): void {
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
