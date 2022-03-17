import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  rating3: number;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rating3 = 0;
    setTheme('bs5');

  }

  ngOnInit(): void {
  }

}
