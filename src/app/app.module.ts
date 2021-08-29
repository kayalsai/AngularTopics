import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SsampleComponent } from './ssample/ssample.component';
import { SampleService } from './sample.service';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustompipePipe } from './custompipe.pipe';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SsampleComponent,
    CustomdirectiveDirective,
    CustompipePipe,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
