import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = 'https://gallifreylabs-hartnell.herokuapp.com/file_upload'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  sendFile(data) {
    return this.http.post(this.url,
    {
      "train_file_url": data,
      "model_file_name": "iris-model.model"
    },
    this.httpOptions)
  }
}
