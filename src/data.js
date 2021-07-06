
//--------------FILTRAR POR TIPO----------------------

export const filterType= (data,type) => {
  const POKEMON = JSON.parse(JSON.stringify(data.pokemon));
  const predicate = (item) => {
    return item.type[0] == type || item.type[1] == type;
  }
  
  return POKEMON.filter(predicate);
};

// ---------------------TOP TEN -----------------
export const topTen = (data) => {
  const DATA = JSON.parse(JSON.stringify(data))
  let sortedArray = DATA.pokemon;
  sortedArray.sort((a, b) => b["spawn-chance"] - a["spawn-chance"]);

  return sortedArray.slice(0,10);
};

// ----------------------------------------

// export const weaknessFilter = (data) => {
//   let sortedArray = data.pokemon;
//   sortedArray.sort((a,b) => b['weaknesses'].length - a['weaknesses'].length );

//   let weakPokemon = sortedArray.map ( (pokemon) => {
//   return `<div><span>${pokemon.name} ${pokemon.weaknesses.length} </span>
//   <img width="120" height="120" src=${pokemon.img} /></div>`;
// });

// return weakPokemon;
  
// };
// -----------------------FILTRO MORE WEAKNESSES-------------------------

export const moreWeaknesses = (data) => {
  let sortedArray = data;
  sortedArray.sort((a,b) => b['weaknesses'].length - a['weaknesses'].length );

return sortedArray;
  
};
// -----------------------------
export const highDefense = (data) => {
  let sortedArray = data.pokemon;
  sortedArray.sort((a,b) => b['stats']['base-defense'] - a['stats']['base-defense']);

  let high = sortedArray.map ( (pokemon) => {
  return `<div><span id='pokemon_${pokemon.num}'>${pokemon.name} ${pokemon.stats['base-defense']} </span>
  <img width="120" height="120" src=${pokemon.img} /></div>`;
});

return high;
  
};
// -----------------------------
export const highDefense_2 = (data) => {
  let sortedArray = data.pokemon;
  sortedArray.sort((a,b) => b['stats']['base-defense'] - a['stats']['base-defense']);

  let high = sortedArray.map ( (pokemon) => {
  return `<div><span id='pokemon_${pokemon.num}'>${pokemon.name} ${pokemon.stats['base-defense']} </span>
  <img width="120" height="120" src=${pokemon.img} /></div>`;
});

return high;
  
};

// -----------------------------------------------
// document.querySelectorAll(".type").forEach(el => {
//   el.addEventListener("click", e => {
//     const id = e.target.getAttribute("id");
//     console.log("Se ha clickeado el id "+id);
//   });
// });

// --------------------------------------------
// let typePOKE='';
// document.querySelectorAll(".type").forEach(el => {
//   el.addEventListener("click", e => {
//       const typePokemon = e.target.getAttribute("id");
//       // return typePokemon;
//       // sessionStorage.setItem("typePokemon", typePokemon);
//       // console.log("Se ha clickeado el id "+typePokemon);
//     });
//   });

  // const typePOKE = sessionStorage.getItem("typePokemon")
// console.log(typePOKE);

// export const weaknessFilter = (data) => {
//   // const DATA =[];
//   document.querySelectorAll(".type").forEach(el => {
//     let sortedArray =[];
//     el.addEventListener("click", e => {
//         const typePokemon = e.target.getAttribute("id");
//        sortedArray = filterType (data,typePokemon);

//         // return typePokemon;
//         // sessionStorage.setItem("typePokemon", typePokemon);
//         // console.log("Se ha clickeado el id "+typePokemon);
//       });
//     });
//   // const typePOKE = sessionStorage.getItem("typePokemon");
//   // const DATA = filterType (data,typePokemon);
//   // let sortedArray = DATA;
//   sortedArray.sort((a,b) => b['weaknesses'].length - a['weaknesses'].length );

// return sortedArray;
  
// };

