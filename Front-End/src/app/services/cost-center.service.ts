import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TechnologyMetrics } from '../components/general/models/cost-center-models';

@Injectable({
    providedIn: 'root'
})
export class CostCenterService {
    getMockData(): Observable<TechnologyMetrics> {
        const mockData: TechnologyMetrics = {
            totalBudget: 1000000,
            totalSpent: 750000,
            remainingBudget: 250000,
            costCenters: [
                {
                    id: 1,
                    name: 'Infraestrutura',
                    totalCost: 300000,
                    budget: 400000,
                    spentPercentage: 75
                },
                {
                    id: 2,
                    name: 'Desenvolvimento',
                    totalCost: 250000,
                    budget: 300000,
                    spentPercentage: 83
                },
                {
                    id: 3,
                    name: 'Segurança',
                    totalCost: 200000,
                    budget: 300000,
                    spentPercentage: 67
                }
            ]
        };
        return of(mockData);
    }
}