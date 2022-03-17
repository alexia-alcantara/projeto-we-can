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
  rating3: number;
  public form: FormGroup;

  status: TypeStatus[];
  selectedTypeStatus: TypeStatus;

  constructor(private fb: FormBuilder) {
    this.rating3 = 0;
    setTheme('bs5');

    this.status = [
      { name: 'aprovado' },
      { name: 'aguardando aprovação' }
    ]
  }

  ngOnInit(): void {
  }

}
