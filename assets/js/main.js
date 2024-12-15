const screen = window.innerWidth
const pokeList = document.querySelector("#pokeList")
const loadM = document.querySelector("#loadMore")
let limit
let offset = 0
const maxRecord = 151
   
if (screen<=320) {
    limit = 5
}else if (screen<=576) {
    limit = 8
}else if (screen<=992) {
    limit = 9
}else{
    limit = 12
}

function loadPokemons(offset, limit) {
    pokeapi.getPokemons(offset,limit).then((pokemonList)=>{
        const listPoke = pokemonList.map((pokemon)=>  `
            <a href="pokemon.html" onclick="sessionStorage.setItem('nume',${pokemon.numero})"><li class="pokemon ${pokemon.types[0]}">
                <span class="number">#${pokemon.numero}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">
                            ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                        </li>
                        
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li></a>
        `).join("")

        pokeList.innerHTML += listPoke
    })
    
}

loadPokemons(offset,limit)

function linkar(){
    debugger
    
    const linkones = document.querySelectorAll("a")

    linkones.forEach((pokemones)=>{
        pokemones.addEventListener('click', ()=>{

            sessionStorage.setItem("nume",pokemones.getAttribute(`data-pok`))
        })
    })
}


loadM.addEventListener('click', ()=>{
    offset += limit

    const qtdRecords = offset + limit

    if (qtdRecords >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemons(offset,newLimit)
        loadM.parentElement.removeChild(loadM)
        return
    }else{
        loadPokemons(offset,limit)
    }
    
})