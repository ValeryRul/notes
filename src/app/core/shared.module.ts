import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMMON_MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
];


@NgModule({
    imports: [COMMON_MODULES],
    exports: [COMMON_MODULES],
    declarations: [
      
    ]
})
export class SharedModule { }
