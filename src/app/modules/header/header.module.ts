import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HTTP_INTERCEPTOR_PROVIDER } from '@appInterceptors/auth-interceptor';
import { UserApiService } from 'app/core/api-rest/user/user-api.service';

@NgModule({
  declarations: [LogoutComponent, HeaderComponent],
  imports: [SharedModule],
  exports: [LogoutComponent, HeaderComponent],
  providers: [HTTP_INTERCEPTOR_PROVIDER, UserApiService]
})
export class HeaderModule {}
