<h1 align="center"> Pluga Challenge </h1>

![pluga-capa4](https://github.com/JoaoAndradee/pluga-challenge/assets/79893247/ec7f1bba-777d-4e8d-a08f-9c0b666d8ec9)

<p align="center">
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" />
  <img src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red" />
</p>

<br><br>
Este projeto tem como objetivo desenvolver uma página que faz consulta a uma api da [PLUGA](https://pluga.co/). Nele é rendeizado cards com informações sobre os apps com os quais ela faz integrações através de webhooks. A api retorna um JSON com essas informações contendo dados como id, nome, imagem e um link para a página da mesma.

<h1 align="center">:hammer: O que foi desenvolvido</h1>

- `Cards`: Renderização dos cards com base no retorno da api.
- `Filtro`: Filtro de pesquisa no SearchBar.
- `Navegação`: Navegação entre as páginas, limitando a 12 apps por página.
- `Modal`: Desenvolvimento do modal
- `Apps visitados`: Capturar os últimos apps visualizados pelo usuário.
- `Testes`: Tests Unitários para todos os components utilizando jest e react testing library.

  <br><br>
![pluga-gif](https://github.com/JoaoAndradee/pluga-challenge/assets/79893247/bc595439-d23e-49df-9ac4-813cbc0bd54f)


## Pré requisitos
:warning: [Node](https://nodejs.org/en/download/)

## Como rodar a aplicação :arrow_forward:
No terminal, clone o projeto:

```
git clone https://github.com/JoaoAndradee/pluga-challenge
```

Agora instale as dependências

```
npm install
```

Inicie o projeto
```
npm start
```

## Como rodar os testes

O testes foram desenvolvidos utilizando o jest e o react testing library.

Para executar todos os test.

```
$ npm run test
```

Para executar um test especifico. Por exemplo:

```
$ npm run test Modal
```

## Tarefas em aberto

:memo: Corrigir erro onde ao clicar no card, ele entra como último card visualizado.

:memo: Corrigir erro que para rodar todos os tests é necessario usar a flag -a.

## Licença.

The [MIT License]() (MIT)

Copyright :copyright: 2023 - Pluga Challenge
