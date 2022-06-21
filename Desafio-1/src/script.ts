// DESAFIO: 
// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Resposta 1:
const EMPLOYEE: {code:number, name:string} = {
    code: 10,
    name: 'John',
};

// Resposta 2:
interface Employee {
    code: number,
    name: string,
};

const EMPLOYEE_OBJ: Employee = {
    code: 10,
    name: 'John',
}

// Resposta 3:
const EMPLOYEE_TWO = {
    code: 10,
    name: 'John'
};