fetchPokeData();
async function fetchPokeData(){
    try{
        const pokename = document.getElementById("txt").value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        if(!res.ok){
            throw new Error("Couldn't fetch resource");
        }
        const data = await res.json();
        const pokemonsprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonsprite");
        imgElement.src = pokemonsprite;
        imgElement.style.display = "block"; 
    }
    catch(error){
        console.error(error);
    }
}
