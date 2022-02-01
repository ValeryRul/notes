import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/core/types/user-api.types';
import { AuthService } from '@appServices';
import { Observable } from 'rxjs';
import { UserApiService } from 'app/core/api-rest/user/user-api.service';

@Component({
  selector: 'gkc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogoutBlockActive: boolean = false;
  searchingField: string = '';
  user$!: Observable<User>;
  constructor(private router: Router, private authService: AuthService, private userApiService: UserApiService) {}

  ngOnInit(): void {
    this.user$ = this.userApiService.getUserInfo$();
  }

  onAddLogoutComponent(): void {
    this.isLogoutBlockActive = !this.isLogoutBlockActive;
  }

  onLogout(): void {
    this.onAddLogoutComponent();
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onClearSearchingField(): void {
    this.searchingField = '';
  }
}
