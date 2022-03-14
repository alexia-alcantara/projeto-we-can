import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-swap',
  templateUrl: './request-swap.component.html',
  styleUrls: ['./request-swap.component.css']
})
export class RequestSwapComponent implements OnInit {

  stateOptions: any[];
  value1: string = "off";

  constructor() {
    this.stateOptions = [{
      label: 'Não', value: 'off',
    },
    {
      label: 'Sim', value: 'on'
    }];
  }

  ngOnInit(): void {
  }

}
