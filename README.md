# Fetch-POC

<img src="https://hermes.dio.me/articles/cover/219ebdb2-de46-45c3-b829-3a5ae90793a2.jpg" width="600px" >

## O projeto a seguir tem por objetivo demostrar o funcionamento do Fetch.

### para demonstrar sua funcionalidade utilizamos a API "https://pokeapi.co/" que retorna um arquivo JSON com um objeto do pokemon requisitado.
Para cada pokemon fizemos uma função da seguinte maneira:

```javascript
async function loadPikachu() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    let response = await fetch(url);
    let pokemon = await response.json();

    nomePokemon = pokemon.name;
    tipoPokemon = pokemon.types[0].type.name;
    figuraPokemon = pokemon.sprites.front_default;
    
    let nome = document.getElementById("nome1");
    nome.innerHTML = `<p>Nome: ${nomePokemon}</p>`;

    let tipo = document.getElementById("tipo1");
    tipo.innerHTML = `<p>Tipo: ${tipoPokemon}</p>`;

    let img = document.getElementById("img1");
    img.innerHTML = `<img src=${figuraPokemon} width="200px">`;
}
```

### Agora vamos destrinchar este codigo em alguns pedaços

Primeiro damos o perfixo async para a function loadPikachu,
```javascript
async function loadPikachu(){
...
}
```
Este prefixo tem por objetivo determinar que a função ira trabalhar de forma assicnrona com o andamento do código.

Proximo passo vamos utilizar o metodo fetch() que ter o objetivo de iniciar o processo de buscar um recurso por meio de uma URL, este metodo retorna um arquivo JSON que pode ser interptetado pelo metodo json():

```javascript
async function loadPikachu() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    let response = await fetch(url);
    let pokemon = await response.json();
...
}
```

Nas duas variaveis (response e pokemon) utilizamos o await que tem por função forçar o codigo a esperar o retorno do atributo, ou seja, a variavel pokemon apenas sera determinada após a resposta do await fetch(url).
Após o processamento a variavel pokemon tera como valor o objeto que a API devolveu.

É importante lembrar que para a utilização do await é obrigatorio a delcaração de uma função assincrona!

Para finalizar o codigo em JS apenas acessamos os atributos do objetos já definidos pela propria API.

```javascript
async function loadPikachu() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    let response = await fetch(url);
    let pokemon = await response.json();

    nomePokemon = pokemon.name;
    tipoPokemon = pokemon.types[0].type.name;
    figuraPokemon = pokemon.sprites.front_default;
    
    let nome = document.getElementById("nome1");
    nome.innerHTML = `<p>Nome: ${nomePokemon}</p>`;

    let tipo = document.getElementById("tipo1");
    tipo.innerHTML = `<p>Tipo: ${tipoPokemon}</p>`;

    let img = document.getElementById("img1");
    img.innerHTML = `<img src=${figuraPokemon} width="200px">`;
}
```






