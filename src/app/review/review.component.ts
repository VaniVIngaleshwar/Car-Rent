import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewApiService } from '../review-api.service';
import { reviewmodel } from './reviewmodel';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  bform!: FormGroup;
  bdata: undefined | reviewmodel[];

  constructor(private formbuilder: FormBuilder, private bapi: ReviewApiService) { }

  ngOnInit(): void {
    this.bform = this.formbuilder.group({
      name: ['', Validators.required],
      dp: ['', Validators.required],
      description: ['', Validators.required],
    })
    this.getReview();
  }

  get dp() {
    return this.bform.get('dp');
  }

  get name() {
    return this.bform.get('name');
  }

  get description() {
    return this.bform.get('description');
  }

  addReview(bdata: reviewmodel) {
    this.bapi.addReview(bdata).subscribe((res => {
      this.bform.reset();
    }))
    this.getReview();
  }

  getReview() {
    this.bapi.getReview().subscribe(res => {
      this.bdata = res;
    })
  }
}
