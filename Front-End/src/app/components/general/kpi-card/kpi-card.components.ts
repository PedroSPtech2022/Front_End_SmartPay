import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-kpi-card',
    standalone: true,
    imports: [CommonModule, CardModule],
    template: `
        <p-card [style]="{ width: '100%', marginBottom: '0.5rem', borderRadius: '8px' }">
            <div class="flex flex-column align-items-center p-2">
                <div class="text-sm font-semibold mb-1">{{ title }}</div>
                <div class="text-xl font-bold text-primary">
                    {{ value | currency:'BRL' }}
                </div>
                <div *ngIf="percentage !== undefined" 
                     class="text-xs mt-1"
                     [ngStyle]="{'color': percentage >= 80 ? 'var(--red-500)' : 'var(--green-500)'}">
                    {{ percentage }}% utilizado
                </div>
            </div>
        </p-card>
    `,
    styles: [`
        :host ::ng-deep .p-card {
            background: var(--surface-card);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        :host ::ng-deep .p-card .p-card-content {
            padding: 0.5rem;
        }
    `]
})
export class KpiCardComponent {
    @Input() title: string = '';
    @Input() value: number = 0;
    @Input() percentage?: number;
}