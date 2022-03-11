import { Component, OnInit } from '@angular/core';
import { Extrato } from 'src/app/components/model/extrato';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  viewMode: string;
  val1: string;
  val3: string;
  val4: string;
  itens: Extrato[];
  colunas: any[];

  constructor() { }

  ngOnInit(): void {
    this.viewMode = "tab1";
    console.log(this.viewMode);

    this.setColuns();
    this.listarItens();
  }

  private listarItens() {
    this.itens = [
      {
        action: "Troca",
        howDays: "3",
        period: "DD/MM/AAAA A DD/MM/AAAA",
        idImmobile: "CÓDIGO DO IMÓVEL",
        keys: " 3",
      },
      {
        action: "Troca",
        howDays: "3",
        period: "DD/MM/AAAA A DD/MM/AAAA",
        idImmobile: "CÓDIGO DO IMÓVEL",
        keys: " 3",
      },
      {
        action: "Troca",
        howDays: "3",
        period: "DD/MM/AAAA A DD/MM/AAAA",
        idImmobile: "CÓDIGO DO IMÓVEL",
        keys: " 3",
      }
    ]
  }

  private setColuns() {
    this.colunas = [
      {
        header: "Ação",
        field: "troca"
      },
      {
        header: "Qtos Dias",
        field: "number"
      },
      {
        header: "Período",
        field: "date"
      },
      {
        header: "Imóvel",
        field: "codigo"
      },
      {
        header: "Chaves",
        field: "number"
      },
    ]
  }

}
