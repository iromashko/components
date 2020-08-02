import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { YoutubePageComponent } from './youtube-page/youtube-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    YoutubePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonsComponent]
})
export class AppModule { }
