import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { RegistrationPageComponent } from './modules/auth/pages/registration-page/registration-page.component';



const routes: Routes = [
/*   {path:"", component: MainPageComponent},
 *//*   {path: "login", component: LoginPageComponent},
 */  {path: "reg", component: RegistrationPageComponent},
/*   {path: "**", redirectTo: '/'}
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
