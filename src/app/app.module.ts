import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import 'hammerjs';
import { ProfileComponent } from './profile.component';

import { GithubService } from './github.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
