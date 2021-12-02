import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@appModules/header/header.module';
import { SharedModule } from '@appSharedModule';

import { MainPageComponent } from './main-page/main-page.component';
import { TodoModule } from './main-page/todo/todo.module';

const routes = [{ path: '', component: MainPageComponent }];

@NgModule({
  declarations: [MainPageComponent],
  imports: [HeaderModule, TodoModule, SharedModule, RouterModule.forChild(routes)]
})
export class MainModule {}