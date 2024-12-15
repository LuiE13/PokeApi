const pokeapi ={}

function convertDetail(pokeDetail) {
    const pokemon = new Pokemon
    
    pokemon.name = pokeDetail.name
    pokemon.numero = pokeDetail.id
    
    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type1] = types
    pokemon.types = types
    pokemon.type = type1

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    const stats = pokeDetail.stats
    pokemon.hp = stats[0].base_stat
    pokemon.atk = stats[1].base_stat
    pokemon.def = stats[2].base_stat
    pokemon.sAtk = stats[3].base_stat
    pokemon.sDef = stats[4].base_stat
    pokemon.speed = stats[5].base_stat
    return pokemon
}

pokeapi.getOnlyDetails = (poke)=>{
    return fetch(poke).then((response)=>response.json())
        .then(convertDetail)
}

pokeapi.getDetail = (pokemon)=>{
    return fetch(pokemon.url).then((response)=>response.json())
        .then(convertDetail)
}

pokeapi.getPokemons = (ofset, limit)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${ofset}&limit=${limit}`
    return fetch(url)
        .then( (response) => response.json())
        .then((jsonBody)=>jsonBody.results)
        .then((pokemon)=> pokemon.map(pokeapi.getDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails)=>pokemonDetails)
}
