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
  value = [
    { label: 'Custos Fixos', color: '#34d399', value: 50, icon: 'pi pi-thumbtack' },
    { label: 'Certificados  ', color: '#383838', value: 17, icon: ' pi pi-id-card' },
    { label: 'Transporte', color: 'orange', value: 8, icon: 'pi pi-truck' },
    { label: 'Outros', color: '#c084fc', value: 5, icon: 'pi pi-question-circle' }
  ];
   valuePKONB = 80;

  constructor(private router: Router) { }

 

  openModal(){
    this.displayInfo = true;
    this.messageInfo="O centro de custos está equilibrado, podendo ter somente um futuro ponto de atenção nos custos variáveis"
  }

}
