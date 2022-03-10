import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  viewMode: string;

  constructor() { }
  ngOnInit(): void {
    this.viewMode = "tab1";
    console.log(this.viewMode);
  }

}
