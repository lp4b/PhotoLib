import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPhoto} from '../interfaces/photo';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private accessKey = 'j6oS059dqLGnXhkFmF7Sox3XrAyw1iC6P8wMXfTH1H0';
  private apiUrl = 'https://api.unsplash.com/photos';

  private cache: Map<string, IPhoto> = new Map();

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<IPhoto[]> {
    if (!this.cache.size) {
      return this.httpClient.get<IPhoto[]>(this.apiUrl, {
        params: {
          client_id: this.accessKey,
          per_page: '9'
        }
      }).pipe(
        tap(val => val.forEach(photo => this.cache.set(photo.id, photo)))
      );
    }
    return of(Array.from(this.cache.values()));
  }

  getById(id: string): Observable<IPhoto> {
    if (!this.cache.has(id)) {
      return this.httpClient.get<IPhoto>(`${this.apiUrl}/${id}`, {
        params: {
          client_id: this.accessKey
        }
      });
    }
    return of(this.cache.get(id));
  }
}
