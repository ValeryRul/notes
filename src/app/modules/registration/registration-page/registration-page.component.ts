import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationModel } from '@appModels/user-registration.model';
import { AuthService } from '@appServices';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onRegister(): void {
    const user: UserRegistrationModel = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService
      .register(user)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
