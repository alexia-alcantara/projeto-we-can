import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-avaliations-received',
  templateUrl: './avaliations-received.component.html',
  styleUrls: ['./avaliations-received.component.css']
})
export class AvaliationsReceivedComponent implements OnInit {
  val3: number = 5;

  public form: FormGroup;
  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  constructor(private fb: FormBuilder) {
    setTheme('bs5');

  }


  ngOnInit(): void {
  }

}
