import { Component, OnInit } from '@angular/core';

interface CategoryImmobile {
  name: string
}

interface TypeImmobile {
  name: string;
}

interface Country {
  name: string;
}

interface Experience {
  name: string;
}

interface Quartos {
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

  country: Country[];
  selectedCountry: Country;

  experience: Experience[];
  selectedExperience: Experience;

  qntQuarto: Quartos[];
  selectedQuarto: Quartos;

  selectedCategories: any[] = ['Technology', 'Sports'];
  categories: any[] = [{ name: 'Bonde' }, { name: 'Churrasqueira' },
  { name: 'Condomínio fechado' }, { name: 'Fire place' },
  { name: 'Home Theater I (televisor / caixa de som / subwoofer / receiver)' },
  { name: 'Home Theater II (televisor / caixa de som)' },
  { name: 'Internet' },
  { name: 'Jacuzzi' },
  { name: 'Lareira' },
  { name: 'Metrô' },
  { name: 'Piscina comum' },
  { name: 'Piscina aquecida' },
  { name: 'Sauna' },
  { name: 'Vista espetacular' },

  ];

  constructor() {
    this.category = [
      { name: 'Categoria 1' },
      { name: 'Categoria' }
    ];
    this.immobile = [
      { name: 'Tipo 1' },
      { name: 'Tipo 2' }
    ];
    this.country = [
      { name: 'EUA' },
      { name: 'França' }
    ];
    this.experience = [
      { name: 'Tipo de experiência' }
    ];
    this.qntQuarto = [
      { name: '1 quarto' },
      { name: '2 quartos' }
    ]
  }

  ngOnInit(): void {
  }

}
