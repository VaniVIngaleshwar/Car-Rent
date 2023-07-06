import { Component } from '@angular/core';
import { bookingmodel } from '../booking/bookmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent {
  bookform!: FormGroup;
  bookdata: undefined | bookingmodel[];

  constructor(private formbuilder: FormBuilder, private bookapi: BookingService) { }

  ngOnInit(): void {
    this.bookform = this.formbuilder.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      startdate: ['', Validators.required],
      starttime: ['', Validators.required],
      enddate: ['', Validators.required],
      endtime: ['', Validators.required],
      address: ['', Validators.required],
      car: ['', Validators.required],
    })
    this.getBuy();
  }

  get name() {
    return this.bookform.get('name');
  }

  get startdate() {
    return this.bookform.get('startdate');
  }

  get starttime() {
    return this.bookform.get('starttime');
  }

  get enddate() {
    return this.bookform.get('enddate');
  }

  get endtime() {
    return this.bookform.get('endtime');
  }

  get contact() {
    return this.bookform.get('contact');
  }

  get address() {
    return this.bookform.get('address');
  }

  addBuy(bookdata: bookingmodel) {
    this.bookapi.addBuy(bookdata).subscribe((res => {
      this.bookform.reset();
    }))
    this.getBuy();
    alert("book now");
  }

  getBuy() {
    this.bookapi.getBuy().subscribe(res => {
      this.bookdata = res;
    })
  }

  deleteBuy(bookdata: any) {
    this.bookapi.deleteBuy(bookdata.id).subscribe(res => {
      this.getBuy();
    })
    alert("Cancel");
  }

  searchBuy(event: any) {
    if (event.target.value) {
      this.bookapi.searchBuy(event.target.value).subscribe(res => {
        this.bookdata = res;
      })
    } else {
      this.getBuy();
    }
  }
}
