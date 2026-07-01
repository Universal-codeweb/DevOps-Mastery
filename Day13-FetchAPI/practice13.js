/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => console.log(response))
.catch(e => console.log(e));*/
/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(data=> console.log(data.name))
.catch(e => console.log(e));*/
async function fetchPokeData(){
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        if(!res.ok){
            throw new Error("Couldn't fetch resource");
        }
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
fetchPokeData();