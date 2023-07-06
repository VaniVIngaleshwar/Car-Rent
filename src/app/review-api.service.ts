import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reviewmodel } from './review/reviewmodel';


@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {

  baseurl: string = "http://localhost:3000/review/";

  constructor(private http: HttpClient) { }

  addReview(bdata: reviewmodel) {
    return this.http.post<reviewmodel>(this.baseurl, bdata)
  }

  getReview() {
    return this.http.get<reviewmodel[]>(this.baseurl);
  }

  fetchData(id: number) {
    return this.http.get<reviewmodel>(this.baseurl + id);
  }
}
