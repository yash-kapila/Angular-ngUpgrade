import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { AppService } from './services/app.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChildAComponent,
    ChildBComponent
  ],
  entryComponents: [
    ChildAComponent,
    ChildBComponent
  ],
  providers: [
    AppService
  ]
})

export class AppModule {
    ngDoBootstrap() {}
};