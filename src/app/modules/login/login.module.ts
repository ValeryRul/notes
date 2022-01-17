import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@appSharedModule';
import { LoginPageComponent } from './login-page/login-page.component';

const routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class LoginModule {}
