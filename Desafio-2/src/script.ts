// Resposta 1:
enum Profissao{
    Atriz,
    Padeiro,
    Desenvolvedor
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

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


// Resposta 2:
interface IHumano {
    nome: string,
    idade: number,
    cargo: 'Padeiro' | 'Atriz' | 'Desenvolvedor',
}

let humano1: IHumano = {
    nome: 'maria',
    idade: 29,
    cargo: 'Atriz' 
};

let humano2: IHumano = {
    nome: 'roberto',
    idade: 19,
    cargo: 'Desenvolvedor'
};

let humano3: IHumano = {
    nome: 'laura',
    idade: 32,
    cargo: 'Atriz'
};

let humano4: IHumano = {
    nome: "carlos",
    idade: 19,
    cargo: 'Padeiro'
}