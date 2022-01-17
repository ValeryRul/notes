import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from '@appModels/user-login.model';
import { AuthService } from '@appServices';
import { take } from 'rxjs/operators';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onLogin(): void {
    const user: UserLoginModel = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService
      .login$(user)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
