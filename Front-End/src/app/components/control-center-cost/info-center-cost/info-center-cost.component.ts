import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoCenterCostService } from '../../../services/info-center-cost.service';
import { Center_Cost, Health_Center } from '../../../interface/interface-center-cost';

@Component({
  selector: 'app-info-center-cost',
  templateUrl: './info-center-cost.component.html',
  styleUrl: './info-center-cost.component.css'
})
export class InfoCenterCostComponent {

  displayInfo: boolean = false;
  messageInfo: string = ""; 

  center_cost: Center_Cost = {};
  healths: Health_Center [] =[];
  healthC: Health_Center = {};

  value = [
    { label: 'Custos Fixos', color: '#34d399', value: 60, icon: 'pi pi-thumbtack' },
    { label: 'Certificados  ', color: '#383838', value: 1, icon: ' pi pi-id-card' },
  ];
   valuePKONB = 61;

  constructor(private router: Router, private infoCenterCostService:InfoCenterCostService) { }

  openModal(){
    this.displayInfo = true;
    this.messageInfo="O centro de custos está equilibrado, podendo ter somente um futuro ponto de atenção nos custos variáveis"
  }

  ngOnInit(){
    this.infoCenterCostService.getCenterCost().then(list => this.center_cost = list);
    this.infoCenterCostService.getCenterCostInfosHealth().then(list => this.healthC = list[0])
  }

}
