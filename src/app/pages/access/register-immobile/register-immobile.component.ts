import { Component, OnInit } from '@angular/core';

interface CategoryImmobile {
  name: string
}

interface TypeImmobile {
  name: string;
}

@Component({
  selector: 'app-register-immobile',
  templateUrl: './register-immobile.component.html',
  styleUrls: ['./register-immobile.component.css']
})
export class RegisterImmobileComponent implements OnInit {
  val3: string;
  val4: string;

  category: CategoryImmobile[];
  selectedCategory: CategoryImmobile;

  immobile: TypeImmobile[];
  selectedImmobile: TypeImmobile;

  constructor() {
    this.category = [
      { name: 'Categoria 1' },
      { name: 'Categoria' }
    ];
    this.immobile = [
      { name: 'Tipo 1' },
      { name: 'Tipo 2' }
    ]
  }

  ngOnInit(): void {
  }

}
