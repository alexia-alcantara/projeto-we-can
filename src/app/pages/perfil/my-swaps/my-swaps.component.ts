import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils';

interface TypeStatus {
  name: string;
}
@Component({
  selector: 'app-my-swaps',
  templateUrl: './my-swaps.component.html',
  styleUrls: ['./my-swaps.component.css']
})
export class MySwapsComponent implements OnInit {
  val2: number = 5;

  public form: FormGroup;

  status: TypeStatus[];
  selectedTypeStatus: TypeStatus;

  constructor(private fb: FormBuilder) {
    setTheme('bs5');

    this.status = [
      { name: 'aprovado' },
      { name: 'aguardando aprovação' }
    ]
  }

  ngOnInit(): void {
  }

}
