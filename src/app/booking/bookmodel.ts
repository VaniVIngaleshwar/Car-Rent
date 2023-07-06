import { Time } from "@angular/common";

export interface bookingmodel{
    id:number;
    name:string;
    contact:number;
    address:string;
    startdate:Date;
    starttime:Time;
    enddate:Date;
    endtime:Time;
    car:string;
}