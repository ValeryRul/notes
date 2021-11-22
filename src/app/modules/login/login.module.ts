import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@appSharedModule';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: LoginPageComponent }])],
  providers: []
})
export class LoginModule {}
