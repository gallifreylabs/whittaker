import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { UploadComponent } from './upload/upload.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'response', component: ResponseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
