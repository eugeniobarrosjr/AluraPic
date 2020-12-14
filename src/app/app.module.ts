import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PhotosModule } from 'src/app/photos/photos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [PhotosModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
