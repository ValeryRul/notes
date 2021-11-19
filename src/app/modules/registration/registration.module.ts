import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@appSharedModule';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: RegistrationPageComponent }])],
  providers: []
})
export class RegistrationModule {}
