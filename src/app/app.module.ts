import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from '@appApi/graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderModule } from './layouts/loader';
import { LoadingScreenInterceptor } from '@appInterceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    LoaderModule
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingScreenInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
