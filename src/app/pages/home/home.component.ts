import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [];
  isCollapsed = true;
  constructor(private fb: FormBuilder,
    localeService: BsLocaleService) {
    setTheme('bs5');
    localeService.use('pt-br')
  }

  ngOnInit(): void {
  }

}
