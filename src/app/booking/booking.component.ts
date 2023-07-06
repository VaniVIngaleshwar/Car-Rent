import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookingmodel } from './bookmodel';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

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
}
