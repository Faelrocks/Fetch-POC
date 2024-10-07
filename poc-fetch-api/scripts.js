async function loadPikachu() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    let response = await fetch(url);
    let pokemon = await response.json();

    /* console.log(pokemon);
    console.log(pokemon.name);
    console.log(pokemon.sprites.front_default);
    console.log(pokemon.types[0].type.name); */

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

async function loadCharmander() {
    const url = "https://pokeapi.co/api/v2/pokemon/charmander";

    let response = await fetch(url);
    let pokemon = await response.json();

    nomePokemon = pokemon.name;
    tipoPokemon = pokemon.types[0].type.name;
    figuraPokemon = pokemon.sprites.front_default;
    
    let nome = document.getElementById("nome2");
    nome.innerHTML = `<p>Nome: ${nomePokemon}</p>`;

    let tipo = document.getElementById("tipo2");
    tipo.innerHTML = `<p>Tipo: ${tipoPokemon}</p>`;

    let img = document.getElementById("img2");
    img.innerHTML = `<img src=${figuraPokemon} width="200px">`;
}

async function loadBulbasaur() {
    const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

    let response = await fetch(url);
    let pokemon = await response.json();

    nomePokemon = pokemon.name;
    tipoPokemon = pokemon.types[0].type.name;
    figuraPokemon = pokemon.sprites.front_default;
    
    let nome = document.getElementById("nome3");
    nome.innerHTML = `<p>Nome: ${nomePokemon}</p>`;

    let tipo = document.getElementById("tipo3");
    tipo.innerHTML = `<p>Tipo: ${tipoPokemon}</p>`;

    let img = document.getElementById("img3");
    img.innerHTML = `<img src=${figuraPokemon} width="200px">`;
}


async function loadSquirtle() {
    const url = "https://pokeapi.co/api/v2/pokemon/squirtle";

    let response = await fetch(url);
    let pokemon = await response.json();

    nomePokemon = pokemon.name;
    tipoPokemon = pokemon.types[0].type.name;
    figuraPokemon = pokemon.sprites.front_default;
    
    let nome = document.getElementById("nome4");
    nome.innerHTML = `<p>Nome: ${nomePokemon}</p>`;

    let tipo = document.getElementById("tipo4");
    tipo.innerHTML = `<p>Tipo: ${tipoPokemon}</p>`;

    let img = document.getElementById("img4");
    img.innerHTML = `<img src=${figuraPokemon} width="200px">`;
}




loadPikachu()
loadBulbasaur()
loadCharmander()
loadSquirtle()