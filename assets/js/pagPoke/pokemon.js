const corpo = document.body

function addStatus(pokeNum) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNum}`
    pokeapi.getOnlyDetails(url).then((pokemon)=>{
        const statuas = `
        <section class="${pokemon.type}">
        <div><a href="index.html">voltar</a></div>
        <div class="phType">
           <div class="dados">
            <div>
                <div class="name">${pokemon.name}</div>
                <ol>
                    ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}  
                </ol>
            </div>
            <div class="Id">#${pokemon.numero}</div>
           </div>
           <div class="poke">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
           </div>
        </div>
        <div class="status">
            <h2>Status Base</h2>
            <ol>
                <li>
                    <h4>Helph Points</h4>
                    <p>${pokemon.hp}</p>
                    
                </li>
                <li>
                    <h4>Attack</h4>
                    <p>${pokemon.atk}</p>
                    
                </li>
                <li>
                    <h4>Defense</h4>
                    <p>${pokemon.def}</p>
                   
                </li>
                <li>
                    <h4>Special Attack</h4>
                    <p>${pokemon.sAtk}</p>
                    
                </li>
                <li>
                    <h4>Special Defense</h4>
                    <p>${pokemon.sDef}</p>
                    
                </li>
                <li>
                    <h4>Speed</h4>
                    <p>${pokemon.speed}</p>
                    
                </li>
            </ol>
        </div>        
    </section>`

    corpo.innerHTML += statuas
    })

    
}

addStatus(sessionStorage.getItem("nume"))