import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@appModules/main/main-page/header/header.module';
import { SharedModule } from '@appSharedModule';
import { MainPageComponent } from './main-page/main-page.component';
import { TodoModule } from './main-page/todo/todo.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    HeaderModule,
    TodoModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MainPageComponent }])
  ],
  exports: [MainPageComponent, RouterModule]
})
export class MainModule {}
