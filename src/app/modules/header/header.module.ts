import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LogoutComponent, HeaderComponent],
  imports: [SharedModule],
  exports: [LogoutComponent, HeaderComponent]
})
export class HeaderModule {}
