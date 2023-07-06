import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { carModel } from './carmodel';
// import { CarService } from '../car.service';

@Component({
  selector: 'app-cars-available',
  templateUrl: './cars-available.component.html',
  styleUrls: ['./cars-available.component.css']
})
export class CarsAvailableComponent {

//  addbooks() {
//   this.carmodelObj.number = this.carform.value.number;
//   this.carmodelObj.month = this.carform.value.month;
//   this.carmodelObj.location = this.carform.value.location;
//   this.carmodelObj.time = this.carform.value.time;


//   this.car.postBook(this.carmodelObj)
//   .subscribe(res=>{
   
//     console.log(res);
//     alert("Books Added Successfully")
//     let ref = document.getElementById('cancel')
//     ref?.click();
//     this.carform.reset();
//     this.getbooks();
//   })
// }


// getbooks() {
//   this.car.getbooks().subscribe(res => {
//     this.carData = res;
 
//   })
//  }

// deletebooks(row: any) {
//  this.car.deletebooks(row.id).subscribe(res => {
//    alert("Book Deleted");
//    this.getbooks();

//  })
// }

// onEdit(row: any) {
//  this.carmodelObj.id = row.id;
//  this.carform.controls['number'].setValue(row.number);
//  this.carform.controls['month'].setValue(row.month);
//  this.carform.controls['location'].setValue(row.location);
//  this.carform.controls['time'].setValue(row.time);
// }

// updatebooks(){
//    this.carmodelObj.number = this.carform.value.number;
//   this.carmodelObj.month = this.carform.value.month;
//   this.carmodelObj.location = this.carform.value.location;
//   this.carmodelObj.time = this.carform.value.time;
//    this.car.updatebooks(this.carmodelObj,this.carmodelObj.id)
//   .subscribe(res=>{
//    alert("Updated Successfully");
//    let ref = document.getElementById('cancel')
//      ref?.click();
//      this.carform.reset();
//      this.getbooks();
//   })
// }

// bform!: FormGroup;
// bdata: undefined | carModel[];

// constructor(private formbuilder: FormBuilder, private bapi: CarService) { }

// ngOnInit(): void {
//   this.bform = this.formbuilder.group({
//     number : ['',Validators.required],
//      month:['',Validators.required],
//     location :['',Validators.required],
//      time:['',Validators.required]
//   })
//   this.getCar();
// }

// get date() {
//   return this.bform.get('date');
// }

// get fname() {
//   return this.bform.get('name');
// }

// get lname() {
//   return this.bform.get('name');
// }

// get time() {
//   return this.bform.get('time');
// }

// get mom() {
//   return this.bform.get('mom');
// }

// get dad() {
//   return this.bform.get('dad');
// }

// get contact() {
//   return this.bform.get('contact');
// }

// get address() {
//   return this.bform.get('address');
// }

// get gender() {
//   return this.bform.get('name');
// }

// addCar(bdata: carModel) {
//   this.bapi.addCar(bdata).subscribe((res => {
//     this.bform.reset();
//   }))
//   this.getCar();
//   alert("add to cars");
// }

// getCar() {
//   this.bapi.getCar().subscribe(res => {
//     this.bdata = res;
//   })
// }

// deleteCar(bdata: any) {
//   this.bapi.deleteCar(bdata.id).subscribe(res => {
//     this.getCar();
//   })
//   alert("delete car");
// }

// searchCar(event: any) {
//   if (event.target.value) {
//     this.bapi.searchCar(event.target.value).subscribe(res => {
//       this.bdata = res;
//     })
//   } else {
//     this.getCar();
//   }
// }
}
