import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [];

  constructor(private fb: FormBuilder) {
    setTheme('bs5');
  }

  ngOnInit(): void {
  }

}
