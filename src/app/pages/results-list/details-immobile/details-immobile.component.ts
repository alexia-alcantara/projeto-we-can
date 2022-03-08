import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-details-immobile',
  templateUrl: './details-immobile.component.html',
  styleUrls: ['./details-immobile.component.css']
})
export class DetailsImmobileComponent implements OnInit {

  rating3: number;
  public form: FormGroup;
  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  constructor(private fb: FormBuilder) {
    this.rating3 = 0;
    setTheme('bs5');

  }

  ngOnInit(): void { }


}
