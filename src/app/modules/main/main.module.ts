import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderModule } from '@appModules/header/header.module';
import { SharedModule } from '@appSharedModule';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [HeaderModule, SharedModule, RouterModule.forChild([{ path: '', component: MainPageComponent }])],
  
  exports: [MainPageComponent, RouterModule]
})
export class MainModule {}
