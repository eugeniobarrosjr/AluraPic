import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/photos/photo';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  listFromUser(username: string): Observable<Photo[]> {
    return this.http
      .get<Photo[]>( API + `${username}/photos`);
  }
}
