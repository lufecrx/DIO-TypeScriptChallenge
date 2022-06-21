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



## ## Desafio 2

```typescript
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
```

Resposta:
- Bom, existem diversas formas de melhorar esse código. O que eu faria: 


```typescript
//Primeiramente, crio um enum que vai conter as profissões das pessoas do código:
enum Profissao{
    Atriz,
    Padeiro,
    Desenvolvedor
}

// Depois, uma interface para construir cada pessoa
interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

// E por fim, construo as pessoas.
let pessoa1: IPessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2: IPessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Desenvolvedor
};

let pessoa3: IPessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

//Outra coisa que eu poderia fazer, seria:
interface IPessoa {
    nome: string,
    idade: number,
    profissao: 'Padeiro' | 'Atriz' | 'Desenvolvedor',
}

let pessoa1: IPessoa = {
    nome: 'maria',
    idade: 29,
    profissao: 'Atriz' 
};

let pessoa2: IPessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: 'Desenvolvedor'
};

let pessoa3: IPessoa = {
    nome: 'laura',
    idade: 32,
    profissao: 'Atriz'
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: 'Padeiro'
}
```

## ## Desafio 3

```typescript
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
```

Resposta:

```typescript
/** 
    Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que seu código vai funcionar da melhor forma.
    No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:
        document.getElementById('limpar-saldo')!;
    A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
    Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
*/

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal:number;

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    limparSaldo();
});
```
