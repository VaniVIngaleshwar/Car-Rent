import { Injectable } from '@angular/core';
import { bookingmodel } from './booking/bookmodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseurl: string = "http://localhost:3000/booking/";

  constructor(private http: HttpClient) { }

  addBuy(bookdata: bookingmodel) {
    return this.http.post<bookingmodel>(this.baseurl, bookdata)
  }

  getBuy() {
    return this.http.get<bookingmodel[]>(this.baseurl);
  }

  deleteBuy(id: number) {
    return this.http.delete<bookingmodel>(this.baseurl + id);
  }

  updateBaby(bookdata: bookingmodel, id: number) {
    return this.http.put<bookingmodel>(this.baseurl + id, bookdata);
  }

  fetchData(id: number) {
    return this.http.get<bookingmodel>(this.baseurl + id);
  }

  searchBuy(name: string) {
    return this.http.get<any>(`${this.baseurl}?name=${name}`);
  }

}
