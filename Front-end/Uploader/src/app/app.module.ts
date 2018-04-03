import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileServerService } from './services/file-server.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [FileServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
