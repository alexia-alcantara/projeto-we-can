import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  val2: number = 5;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    setTheme('bs5');

  }

  ngOnInit(): void {
  }

}
