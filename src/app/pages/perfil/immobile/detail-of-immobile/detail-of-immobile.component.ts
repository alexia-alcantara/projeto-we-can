import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-of-immobile',
  templateUrl: './detail-of-immobile.component.html',
  styleUrls: ['./detail-of-immobile.component.css']
})
export class DetailOfImmobileComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  selectedCities: string[] = [];

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit(): void {
  }

}
