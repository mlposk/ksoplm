import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseURL = 'https://api.nasa.gov/planetary/apod?api_key=18KFH0MNduEWvfax2diPMI32If7XpjTeDVxnjKIU';

  public getPic() {
    return this.http.get(this.baseURL);
  }
}
