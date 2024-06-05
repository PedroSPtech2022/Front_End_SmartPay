export interface Cost_Variable{
    type?:string;
    type_variable?: string,
    describe?: string,
    value?:number,
    date?: Date,
    responsible?: string,
    category?: string,
    payment_method?: string,
    obs?: string,
    approval?: true,
    fk_cost_center?: 0
}