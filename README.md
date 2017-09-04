# ⛅ Weather Forecast 


## O que é isso?

Aplicação de previsão do tempo focada nas cidades brasileiras, desenvolvida em AngularJS.

Você pode acessar uma prévia do aplicativo sem a necessidade de clonar o repositório clicando [aqui](https://theovictors.github.io/weather-forecast/).


## Pré-requisitos

Para desenvolver, você precisará apenas do [Node.js](http://nodejs.org/) instalado no seu ambiente.

Caso não tenha o bower instalado globalmente, execute o comando abaixo:

    $ npm install -g bower


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

- [x] Apresenta a previsão do tempo para os próximos 7 dias;
- [x] Possibilita escolher um estado e cidade brasileira;
- [x] Sugere o que fazer aos domingos;
- [x] Apresenta temperatura máxima e mínima de cada dia;
- [ ] Modifica background do card conforme previsão do dia (sol, nublado, chuvoso...);
- [x] Salvar uma cidade como favorita;
- [x] Mostra Blumenau, SC como cidade padrão;
- [x] Apresenta gráfico com variação de temperatura;
- [ ] Possibilidade de alterar idioma (Português, inglês).

## Referências

  SN Tempo https://github.com/thiagobitencourt/sn-tempo
  
  API simpleWeather https://github.com/monkeecreate/jquery.simpleWeather
