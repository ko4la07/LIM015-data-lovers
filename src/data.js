// estas funciones son de ejemplo

// import data from "./data/pokemon/pokemon";

// export const example = () => {
//   return 'example';
// };

//--------Mostrar pokemon -------

export const allPokemon = (data) => {
    let imagenPokemon=""; 
    for (let i = 0; i < 251; i++) {
        imagenPokemon += "<div><span id='pokemon_"+data.pokemon[i].num+"'>" + data.pokemon[i].name +"</span>"
        imagenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
    }
    return imagenPokemon;
};
//-------Filtrar por tipo ----------

export const filterType = (data,type) => {
    let imagenPokemon=""; 
    for (let i = 0; i < 251; i++) {
        if(data.pokemon[i].type == type || data.pokemon[i].type[0] == type || data.pokemon[i].type[1] == type){
            imagenPokemon += "<span id='pokemon_"+data.pokemon[i].num+"'>" + data.pokemon[i].name +"</span>"
            imagenPokemon += "<img src='" + data.pokemon[i].img + "'></img>";
        }
    }
    return imagenPokemon;
};
 
//----------------





