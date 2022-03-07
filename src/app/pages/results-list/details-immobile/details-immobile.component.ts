import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-details-immobile',
  templateUrl: './details-immobile.component.html',
  styleUrls: ['./details-immobile.component.css']
})
export class DetailsImmobileComponent implements OnInit {

  rating3: number;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rating3 = 0;

  }

  ngOnInit(): void { }


}
