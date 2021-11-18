import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/core/interfaces';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;

  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.email, Validators.required]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)])
    })
  }

  login(){
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }


    this.auth.login(user).subscribe(
      () => {
         this.form.reset;
         this.router.navigateByUrl('/notes')
      }
    );
        
  }
}
