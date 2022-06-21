# TypeScript Project Challenge 
## ## Desafio 1

```typescript
 // Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
```

Resposta:
- Para poder rodar esse arquivo em um código TS, devemos lembrar que é necessário fazer a tipagem. 
- Por exemplo, para o <employee.code> deveríamos fazer a tipagem para o tipo number.


```typescript
// Uma das formas de resolver esse desafio seria: 
const EMPLOYEE: {code:number, name:string} = {
    code: 10,
    name: 'John',
}
// Dessa maneira, a tipagem está sendo feita previamente, dentro das chaves {}
```

```typescript
// Outro jeito de resolver: 
interface IEmployee {
    code: number,
    name: string,
}

const EMPLOYEE_OBJ: IEmployee = {
    code: 10,
    name: 'John',
}
// Dessa forma, a tipagem está sendo feita previamente, na interface.
```

```typescript
// Também é possível fazer a tipagem por inferência
const EMPLOYEE = {
    code: 10,
    name: 'John'
};
```



