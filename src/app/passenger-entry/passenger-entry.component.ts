import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Train } from '../app-model/train.model';
import { TrainService } from '../app-service/train-service/train.service';
import { Router } from '@angular/router';
import { TrainSummaryService } from '../app-service/train-service/train-summary.service';


@Pipe({
  name: 'farePipe'
})
export class FarePipe implements PipeTransform {

  transform(trainClass: any[], bookingClass: any) {
    return trainClass.filter(tClass => {
      return tClass.id === bookingClass.id;
    });
  }
}

@Component({
  selector: 'app-passenger-entry',
  templateUrl: './passenger-entry.component.html',
  styleUrls: ['./passenger-entry.component.css']
})
export class PassengerEntryComponent implements OnInit {

  trainObj: Train;
  bookingClass: { id: number, className: string };
  journeyDate: Date;

  preferenceList = [];
  genderList = [];
  foodList = [];

  pname: string[] = [''];
  age: number[] = [undefined];
  gender: any[] = ['-- gender --'];
  preference: any[] = ['-- preference --'];
  food: any[] = ['-- food --'];

  passengers = [1];

  constructor(
    private trainService: TrainService,
    private router: Router,
    private trainSummaryService: TrainSummaryService
  ) { }

  ngOnInit(): void {
    this.trainObj = this.trainSummaryService.getSummary().train;
    this.bookingClass = this.trainSummaryService.getSummary().bookingClass;
    this.journeyDate = this.trainSummaryService.getSummary().journeyDate;

    this.preferenceList = this.trainService.preferenceList;
    this.genderList = this.trainService.genderList;
    this.foodList = this.trainService.foodList;

    // this.trainObj = new Train(11223, 'Shaktipunj Express', 'Hyderabad', 'Bangalore',
    //   [{ id: 2, className: 'Sleeper (SL)' }], [{ id: 0, dayValue: 'SUN' }], '04:00', '10:45', 45, [750]);
    // this.bookingClass = { id: 2, className: 'Sleeper (SL)' };
    // this.journeyDate = new Date();
  }

  addPassenger() {
    this.pname.push('');
    this.age.push(undefined);
    this.gender.push('-- gender --');
    this.preference.push('-- preference --');
    this.food.push('-- food --');
    this.passengers.push(this.passengers.length);
  }

  deletePassenger(pas: number) {
    this.pname.splice(pas, 1);
    this.age.splice(pas, 1);
    this.gender.splice(pas, 1);
    this.preference.splice(pas, 1);
    this.food.splice(pas, 1);
    this.passengers.pop();
  }

  submitPassengerDetails() {
    // this.dataService.setStorage({ pname: this.pname, age: this.age, gender: this.gender, preference: this.preference, food: this.food });
    this.router.navigate(['ticketsummary']);
  }

}
