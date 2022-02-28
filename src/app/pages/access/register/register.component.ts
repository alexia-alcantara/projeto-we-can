import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cities: City[];
  selectedCity1: City;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Roma', code: 'RM' }
    ]
  }

  ngOnInit(): void {
  }

}
