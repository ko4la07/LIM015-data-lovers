// estas funciones son de ejemplo

// import data from "./data/pokemon/pokemon";

// export const example = () => {
//   return 'example';
// };

//--------Mostrar pokemon -------

export const allPokemon = (data) => {
    let imagenPokemon=""; 
    for (let i = 0; i < data.pokemon.length; i++) {
        imagenPokemon += "<div><span id='pokemon_"+data.pokemon[i].num+"'>" + data.pokemon[i].name +"</span>"
        imagenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
    }
    return imagenPokemon;
};
//-------Filtrar por tipo ----------

export const filterType = (data,type) => {
    let imagenPokemon=""; 
    for (let i = 0; i < data.pokemon.length; i++) {
        if(data.pokemon[i].type == type || data.pokemon[i].type[0] == type || data.pokemon[i].type[1] == type){
            imagenPokemon += "<div><span id='pokemon_"+data.pokemon[i].num + "'>" + data.pokemon[i].name +"</span>"
            imagenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
        }
    }
    return imagenPokemon;
};
 
//-----------Mostrar imagenes por tipo---------
export const displayType= (data, id, type) => {
    if (id =='pokemon') {
        document.getElementById('pokemon').style.display='flex';
        document.getElementById('pokemon_type').style.display='none';
    } else if (id =='pokemon_type') {
        let filter= filterType(data,type);
        document.getElementById('pokemon_type').innerHTML=filter;
        document.getElementById('pokemon').style.display='none';
        document.getElementById('pokemon_type').style.display='flex';
    }
}

// ---------------------Top ten -----------------
export const topTen =(data) => {
    let array=[];
    for (let i = 0; i < data.pokemon.length; i++) {
        let topTenPokemon = parseInt(data.pokemon[i]["spawn-chance"]); 
        array.push(topTenPokemon);
        array.sort(function(a,b) { 
            return b-a
        });
    }
    
    for (let item in  array.slice(0,10)) {
        let tenPokemon=""; 
        for (let i = 0; i < data.pokemon.length; i++) {
            if(item == data.pokemon[i]["spawn-chance"]){
                tenPokemon += "<div><span>" + data.pokemon[i].name + " " + data.pokemon[i]["spawn-chance"] +"</span>"
                tenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
            } 
        }
        return tenPokemon;
    }

    console.log(array.slice(0,10));
    console.log(array);
    
}


