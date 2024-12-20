import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { DropdownBasicDemo } from './app/dropdown-basic-demo';
import { Routes, provideRouter } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:
    [
        DropdownBasicDemo,
    ],
    imports: [

        CommonModule,
        BrowserModule,
        DropdownModule,
        FormsModule,
        NoopAnimationsModule
    ],
    bootstrap: [DropdownBasicDemo]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
