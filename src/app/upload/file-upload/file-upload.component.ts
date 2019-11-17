import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent {

  uploadPercent: Observable<number>;

  downloadURL: Observable<string>;

  beforeUpload = true;

  constructor(
    private storage: AngularFireStorage,
    private uploadService: UploadService
  ) {}

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          this.downloadURL.subscribe(url => {
            this.request(url);
          })
        })
     )
    .subscribe()
  }

  request(url) {
    this.uploadService.sendFile(url).subscribe(value => {
      console.log(value)
    });
  }
}
