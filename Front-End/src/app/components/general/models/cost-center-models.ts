export interface CostCenter {
    id: number;
    name: string;
    totalCost: number;
    budget: number;
    spentPercentage: number;
}

export interface TechnologyMetrics {
    totalBudget: number;
    totalSpent: number;
    remainingBudget: number;
    costCenters: CostCenter[];
}