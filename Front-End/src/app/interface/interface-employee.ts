export interface Employee {
  name?: string,
  email?: string,
  job_title?: string,
  salary?: number,
  position?: string,
  fk_cost_center?: number | null 
}

export interface EmployeeUser {
  name?: string,
  email?: string
}