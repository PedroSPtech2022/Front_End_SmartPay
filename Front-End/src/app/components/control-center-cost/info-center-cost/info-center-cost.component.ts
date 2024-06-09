import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-center-cost',
  templateUrl: './info-center-cost.component.html',
  styleUrl: './info-center-cost.component.css'
})
export class InfoCenterCostComponent {

  displayInfo: boolean = false;
  messageInfo: string = "";

  constructor(private router: Router) { }

  openModal(){
    this.displayInfo = true;
    this.messageInfo="O centro de custos está equilibrado, podendo ter somente um futuro ponto de atenção nos custos variáveis"
  }

}
