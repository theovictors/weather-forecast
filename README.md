# ⛅ Weather Forecast 
> Desafio de front-end


## O que é isso?

É uma aplicação feita utilizando Angular 1 de apresentação de previsão do tempo para determinada cidade brasileira.


## Pré-requisitos

Para desenvolver, você precisará apenas do Node.js instalado no seu ambiente.

### Node

O [Node](http://nodejs.org/) é bem fácil de instalar e já vem com o gerenciador de pacotes [npm](https://npmjs.org/) incluso.


## Build & desenvolvimento

### Baixar projeto

Execute os comandos abaixo para baixar o repositório no seu ambiente:

    $ git clone https://github.com/theovictors/weather-forecast.git
    $ cd weather-forecast
    
### Baixar dependências

Execute os comandos abaixo para baixar as dependências:

    $ npm install
    $ bower install
    
### Rodar o projeto

O app tem um servidor estático com livereload para facilitar o desenvolvimento.
Então cada vez que você inicia o aplicativo, automaticamente é replicada a alteração no navegador sempre que você atualizar o arquivo.

Utilize o comando `gulp serve` para rodar o projeto no navegador.


## Funcionalidades

- Mostra, em formato de cards, a previsão do tempo da semana, contando a partir do dia de hoje;
- Possibilita escolher um estado e cidade brasileira;
- Apresenta temperatura máxima e mínima.

## Melhorias

- Modificar background do card conforme previsão do dia (sol, nublado, chuvoso...);
- Salvar uma cidade como favorita;
- Apresentar variação de temperatura;
- Possibilidade de escolher idioma e apresentar sugestões do que fazer com base na temperatura.

## Referências

  SN Tempo https://github.com/thiagobitencourt/sn-tempo
  
  API simpleWeather https://github.com/monkeecreate/jquery.simpleWeather
