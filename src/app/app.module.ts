import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from 'src/app/photos/photos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PhotosModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
