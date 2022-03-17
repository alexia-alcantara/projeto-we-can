import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-avaliations-received',
  templateUrl: './avaliations-received.component.html',
  styleUrls: ['./avaliations-received.component.css']
})
export class AvaliationsReceivedComponent implements OnInit {
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


  ngOnInit(): void {
  }

}
