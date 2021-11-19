import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
/* import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
 */import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './core/shared.module';
import { RegistrationPageComponent } from '@appModules/auth/pages/registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    /* LoginPageComponent, */
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
