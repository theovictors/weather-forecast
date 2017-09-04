# ⛅ Weather Forecast 


## O que é isso?

Aplicação de previsão do tempo focada nas cidades brasileiras, desenvolvida em AngularJS.


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
- [x] Mostra um gráfico 
- [x] Sugere o que fazer aos domingos;
- [x] Apresenta temperatura máxima e mínima de cada dia;
- [ ] Modificar background do card conforme previsão do dia (sol, nublado, chuvoso...);
- [x] Salvar uma cidade como favorita;
- [x] Mostra Blumenau, SC como cidade padrão;
- [x] Apresentar variação de temperatura;
- [ ] Possibilidade de escolher idioma e apresentar sugestões do que fazer com base na temperatura.

## Referências

  SN Tempo https://github.com/thiagobitencourt/sn-tempo
  
  API simpleWeather https://github.com/monkeecreate/jquery.simpleWeather
