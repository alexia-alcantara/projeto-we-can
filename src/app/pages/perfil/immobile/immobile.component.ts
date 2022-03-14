import { Component, OnInit } from '@angular/core';

interface TypeStatus {
  name: string;
}
@Component({
  selector: 'app-immobile',
  templateUrl: './immobile.component.html',
  styleUrls: ['./immobile.component.css']
})
export class ImmobileComponent implements OnInit {
  status: TypeStatus[];
  selectedTypeStatus: TypeStatus;

  constructor() {
    this.status = [
      { name: 'aprovado' },
      { name: 'aguardando aprovação' }
    ]
  }

  ngOnInit(): void {
  }

}
