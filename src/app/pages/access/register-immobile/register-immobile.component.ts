import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api/messageservice';

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
  isShow: boolean = false;
  selectedValue: string;
  nameLabel: string;
  toggleShow() {
    this.isShow = !this.isShow;
  }

  public file: any;
  urls: any[] = [];
  multiples: any[] = [];


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

  selectedCategories: any[];
  categories: any[] = [
    { name: 'Bonde' }, { name: 'Churrasqueira' },
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

  categoriesServices: any[] = [
    { name: 'Sem Staff' },
    { name: 'Arrumadeira' },
    { name: 'Arrumadeira / Cozinheira' },
    { name: 'Staff completo' },
  ];

  categoriesLazer: any[] = [
    { name: 'Avião' },
    { name: 'Bicicleta' },
    { name: 'Bicicleta elétrica' },
    { name: 'Campo de futebol' },
    { name: 'Campo de golfe' },
    { name: 'Cavalo' },
    { name: 'Embarcação' },
    { name: 'Gastronomia diferenciada' },
    { name: 'Helicóptero' },
    { name: 'Prancha de sup' },
    { name: 'Prancha de surf' },
    { name: 'Quadra de beach tênis' },
    { name: 'Quadriciclo' },


  ]

  constructor(private cf: ChangeDetectorRef) {
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

  onSelectFile(event) {
    this.file = event.target.files && event.target.files.length;
    if (this.file > 0 && this.file < 5) {
      let i: number = 0;
      for (const singlefile of event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(singlefile);
        this.urls.push(singlefile);
        this.cf.detectChanges();
        i++;
        console.log(this.urls);
        reader.onload = (event) => {
          const url = (<FileReader>event.target).result as string;
          this.multiples.push(url);
          this.cf.detectChanges();
        };
        console.log(singlefile);
      }
    }
    // else {
    //   this.toast.error('No More than 4 images', 'Upload Images')
    // }
  }

}
