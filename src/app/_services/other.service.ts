import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = `https://reqres.in/api/users`;

@Injectable({ providedIn: 'root' })
export class OtherService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${baseUrl}?page=1`);
  }

  getOtherById(id: string) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }
}
