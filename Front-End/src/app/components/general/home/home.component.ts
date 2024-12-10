import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { KpiCardComponent } from '../kpi-card/kpi-card.components';
import { CostCenterService } from '../../../services/cost-center.service';
import { TechnologyMetrics } from '../models/cost-center-models';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CardModule, KpiCardComponent],
    template: `
        <div class="grid p-2">
            <div class="col-12">
                <h1 class="text-xl">Dashboard de Tecnologia - Centro de Custos</h1>
                <p class="text-secondary mb-4">
                    Situação atual da vertical de Aplicação e Modernização: acompanhamento em tempo real 
                    dos investimentos e recursos alocados para transformação digital e modernização tecnológica.
                </p>
            </div>

            <!-- KPIs Principais -->
            <div class="col-12 md:col-6 lg:col-4 xl:col-3">
                <app-kpi-card
                    title="Orçamento Total"
                    [value]="metrics?.totalBudget || 0">
                </app-kpi-card>
            </div>
            <div class="col-12 md:col-6 lg:col-4 xl:col-3">
                <app-kpi-card
                    title="Total Gasto"
                    [value]="metrics?.totalSpent || 0">
                </app-kpi-card>
            </div>
            <div class="col-12 md:col-6 lg:col-4 xl:col-3">
                <app-kpi-card
                    title="Saldo Disponível"
                    [value]="metrics?.remainingBudget || 0">
                </app-kpi-card>
            </div>

            <!-- Cards de Centro de Custos -->
            <div class="col-12">
                <h2 class="text-lg mt-3 mb-2">Centros de Custos</h2>
            </div>
            <div *ngFor="let center of metrics?.costCenters" 
                 class="col-12 md:col-6 lg:col-4 xl:col-3">
                <app-kpi-card
                    [title]="center.name"
                    [value]="center.totalCost"
                    [percentage]="center.spentPercentage">
                </app-kpi-card>
            </div>
        </div>
    `,
    styles: [`
        :host {
            display: block;
            background-color: var(--surface-ground);
        }
        h1 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        h2 {
            color: var(--text-color);
        }
        .text-secondary {
            color: var(--text-color-secondary);
            font-size: 0.875rem;
            line-height: 1.5;
        }
    `]
})
export class HomeComponent implements OnInit {
    metrics?: TechnologyMetrics;

    constructor(private costCenterService: CostCenterService) {}

    ngOnInit() {
        this.costCenterService.getMockData().subscribe(data => {
            this.metrics = data;
        });
    }
}