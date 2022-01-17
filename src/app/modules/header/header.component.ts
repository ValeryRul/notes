import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '@appApi/user/user-api.service';
import { User } from 'app/core/types/user-api.types';
import { AuthService } from '@appServices';
import { Observable } from 'rxjs';

@Component({
  selector: 'gkc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogoutBlockActive: boolean = false;
  searchingField: string = '';
  user$!: Observable<User>;

  constructor(private authService: AuthService, private userApiService: UserApiService) {
    this.user$ = this.userApiService.getUserInfo();
  }

  onAddLogoutComponent(): void {
    this.isLogoutBlockActive = !this.isLogoutBlockActive;
  }

  onLogout(): void {
    this.onAddLogoutComponent();
    this.authService.logout();
    window.location.reload()
  }

  onClearSearchingField(): void {
    this.searchingField = '';
  }
}
