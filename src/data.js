// estas funciones son de ejemplo




// export const example = () => {
//   return 'example';
// };

  
//   let html="";
//   data.map(x => {
//   html +="<img src='"+x.img+"'></img>";
//       // for(let propiedad of Object.keys(x)){    
//   return html; 
//   })
//   // return html;

  

// for(let propiedad of Object.keys(mascota)){
// html+="<li>"+propiedad+": "+mascota.especie+"</li>"
// return namePokemon;
  // var html="";
  // html += "<h1>Mascotas</h1>"
  // datos.map(mascota => {
  //   html +="<img src='"+mascota.img+"'></img>";
  //   // for(let propiedad of Object.keys(mascota)){
  //   //   html+="<li>"+propiedad+": "+mascota.especie+"</li>"
      
  //   // }
  //   html += "<hr/>"
  // })
  // document.getElementById("resultado").innerHTML= html;


//--------Mostrar pokemon -------

export const allPokemon = (data) => {
  let imagenPokemon = "";
  for (let i = 0; i < data.pokemon.length; i++) {
    imagenPokemon +=
      "<div><span id='pokemon_" +
      data.pokemon[i].num +
      "'>" +
      data.pokemon[i].name +
      "</span>";
    imagenPokemon +=
      "<img width='120' height='120' src='" +
      data.pokemon[i].img +
      "'></img></div>";
  }
  return imagenPokemon;
};
//-------Filtrar por tipo ----------

export const filterType = (data,type) => {
    let imagenPokemon="";
    for (let i = 0; i < data.pokemon.length; i++) {
        if(data.pokemon[i].type[0] == type || data.pokemon[i].type[1] == type){
            imagenPokemon += "<div><span id='pokemon_"+ data.pokemon[i].num + "'>" + data.pokemon[i].name +"</span>"
            imagenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
        }
    }
    return imagenPokemon;
};

//-------Filtrar por tipo Segunda Forma----------
// export const filterType = (data, type) => {
//   // let imagenPokemon="";

//   let poke = data.pokemon.map( pokemon => {
//     if ((pokemon.type).includes(type)) {
//       return `<div><span>${pokemon.name} ${pokemon.num}</span>
//               <img width="120" height="120" src=${pokemon.img} /></div>`;
//     }
//   });

//   return poke;
// };

//-----------Mostrar imagenes por tipo---------
export const displayType = (data, id, type) => {
  if (id == "pokemon") {
    document.getElementById("pokemon").style.display = "flex";
    document.getElementById("pokemon_type").style.display = "none";
  } else if (id == "pokemon_type") {
    let filter = filterType(data, type);
    // filter.map(pokemon => {
    //     document.getElementById("pokemon_type").innerHTML += pokemon;
    // });
    document.getElementById("pokemon_type").innerHTML = filter;
    document.getElementById("pokemon").style.display = "none";
    document.getElementById("pokemon_type").style.display = "flex";
  }
};

// ---------------------Top ten -----------------
export const topTen = (data) => {
  // let Array= Object.assign({} , data);
  // let sortedArray=Array

  let objArray = JSON.parse(JSON.stringify(data))
  let sortedArray = objArray.pokemon;
  // let sortedArray = data.pokemon;
  sortedArray.sort((a, b) => b["spawn-chance"] - a["spawn-chance"]);

  let tenPokemon = sortedArray.slice(0, 10).map((pokemon) => {
    return `<div><span id='pokemon_${pokemon.num}'>${pokemon.name} ${pokemon["spawn-chance"]}</span>
              <img width="80" height="80" src=${pokemon.img} /></div>`;
  });

  return tenPokemon;
  // console.log(sortedArray);
};

// ----------------------------------------
export const weaknessFilter = (data) => {
  let sortedArray = data.pokemon;
  sortedArray.sort((a,b) => b['weaknesses'].length - a['weaknesses'].length );

  let weakPokemon = sortedArray.map ( (pokemon) => {
  return `<div><span>${pokemon.name} ${pokemon.weaknesses.length} </span>
  <img width="120" height="120" src=${pokemon.img} /></div>`;
});

return weakPokemon;
  
};


// -----------------------------
export const highDefense = (data) => {
  let sortedArray = data.pokemon;
  sortedArray.sort((a,b) => b['stats']['base-defense'] - a['stats']['base-defense']);

    
}


  let high = sortedArray.map ( (pokemon) => {
  return `<div><span id='pokemon_${pokemon.num}'>${pokemon.name} ${pokemon.stats['base-defense']} </span>
  <img width="120" height="120" src=${pokemon.img} /></div>`;
});

return high;
  
};


// ----------------Info pokemon----------------------

