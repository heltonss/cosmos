# Cosmos [![Build Status](https://travis-ci.org/heltonss/cosmos.svg?branch=master)](https://travis-ci.org/heltonss/cosmos)
## Módulo de comunicação para sistema de gestão escolar

## **_Objetivo:_**

Desenvolvimento de um módulo de comunicação para sistema de gestão escolar como trabalho de conclusão de curso _Sistemas para Internet - Fatec São Roque_

O propósito desse projeto é o estudo e desenvolvimento de um módulo de gestão escolar com tecnologias _JavaScript_ usadas no frontend e no backend como _NodeJS_ e _AngularJS_ 


## Tecnologias:
[![NodeJS](https://img.shields.io/badge/NodeJS-v6.5.0-blue.svg?style=flat-square)](nodejs)
[![AngularJS](https://img.shields.io/badge/AngularJS-v1.6.1-blue.svg)](AngularJS)
[![Bower](https://img.shields.io/badge/bower-v3.3.7-yellowgreen.svg)](bower.io)
[![Gulp](https://img.shields.io/badge/Gulp-v1.2.2-yellowgreen.svg)](Gulp)
[![Karma](https://img.shields.io/badge/Karma-v1.0-yellowgreen.svg)](Karma)
[![Protractor](https://img.shields.io/badge/Protractor-v5.0.0-yellowgreen.svg)](Protractor)
[![Jasmine](https://img.shields.io/badge/Jasmine-v2.5.5-yellowgreen.svg)](Jasmine)

## Instalando o projeto:
Para instalar o projeto basta abrir a pasta cosmos que é a pasta do projeto no terminal ou no terminal do NodeJS para windows e executar
```js
npm install
```

## Executando o projeto.
Para executar o projeto em desenvolvimento e acompanhar as alterações em tempo real basta executar no terminal na pasta raiz
```
gulp 
```

>Os testes unitários são executados no mesmo terminal que você executou o projeto com gulp, então se houver algum erro será nesse terminal que será visualizado.

>**atenção:** _o protractor ainda esta dando um erro que não consegui corrigir._ é possível executar ele com o comando
```
gulp test-protractor
```

## gerando arquivos para produção
Após desenvolver e finalizar sua tarefa no ambiente de desenvolvimento você deve enviar para produção, para isso é necessário gerar os arquivos para produção através do comando.
```
gulp build
```

## enviando arquvivos para produção
Após gerar os arquivos de produção envie os arquivos para o GITHUB, quando o projeto é enviado passa por uma ferramenta de integração contínua CI(Continous Integration) chamada [Travis](https://https://travis-ci.org/) que efetua os testes novamente caso ele não passe verifique o que houve na página de teste Travis , se ele passar basta solictar um pull request.
