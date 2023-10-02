
function convertPokemonTypesLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemon(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesLi(pokemon.types).join('')}
                <li class="type">Poison</li>
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
`
}

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getPokemons().then((pokemons = []) => {
        const newList = pokemons.map((pokemon) => convertPokemon(pokemon))
        const newHtml = newList.join('')
        pokemonList.innerHTML += newHtml
    
    })


