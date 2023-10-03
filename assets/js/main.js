
function convertPokemon(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">x'x''
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`)}
            </ol>
            <img src="${pokemon.name}" alt="${pokemon.name}">
        </div>
    </li>
`
}

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemon).join('')
        pokemonList.innerHTML  = newHtml
    
    })


