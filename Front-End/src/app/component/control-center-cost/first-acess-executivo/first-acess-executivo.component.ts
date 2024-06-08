import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-acess-executivo',
  templateUrl: './first-acess-executivo.component.html',
  styleUrl: './first-acess-executivo.component.css'
})
export class FirstAcessExecutivoComponent implements OnInit{
  active: number | undefined = 0;

  name: string | undefined ;

  email: string | undefined ;

  password: string | undefined ;

  cost_center_name: string | undefined;
  quarterly_budget: string | undefined;
  
  producao: any[] | undefined;

  selectedTypeProducao: any = {};

  ngOnInit() {
      this.producao = [
          { tipo: 'Produtivo', value: 'Produtivo' },
          { tipo: 'Não Produtivo', value: 'Não Produtivo' }
      ];
  }
}