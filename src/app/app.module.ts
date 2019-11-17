import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { TitleComponent } from './shared/title/title.component';
import { RichTextComponent } from './shared/rich-text/rich-text.component';
import { ButtonComponent } from './shared/button/button.component';
import { UploadComponent } from './upload/upload.component';
import { ResponseComponent } from './response/response.component';
import { environment } from 'src/environments/environment';
import { FileUploadComponent } from './upload/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TitleComponent,
    RichTextComponent,
    ButtonComponent,
    UploadComponent,
    ResponseComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
