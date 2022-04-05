import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Component, OnInit } from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);
@Component({
  selector: 'app-detail-of-immobile',
  templateUrl: './detail-of-immobile.component.html',
  styleUrls: ['./detail-of-immobile.component.css']
})
export class DetailOfImmobileComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  selectedServices: string[] = [];

  constructor(localeService: BsLocaleService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    localeService.use('pt-br')
  }

  ngOnInit(): void {
  }

}
