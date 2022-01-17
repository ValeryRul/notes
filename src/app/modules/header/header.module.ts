import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { httpInterceptorProviders } from '@appInterceptors/auth-interceptor';

@NgModule({
  declarations: [LogoutComponent, HeaderComponent],
  imports: [SharedModule],
  exports: [LogoutComponent, HeaderComponent],
  providers: [httpInterceptorProviders]
})
export class HeaderModule {}
