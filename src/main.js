
import pokemonData from './data/pokemon/pokemon.js';

import { filterType, highDefense,topTen, weaknessFilter, searchFilter} from './data.js'


// ------------------- BARRA DE NAVEGACIÓN---------------------

const navLinks = document.querySelectorAll('.header_container li');

document.getElementById('home').addEventListener('click', function() { 
    
    for(let link of navLinks){
        link.classList.remove('linkActivo');
      }
      
      document.getElementById('home').classList.add('linkActivo');
      displayMain('home');
});
document.getElementById('pokedex').addEventListener('click', function() { 

    for(let link of navLinks){
        link.classList.remove('linkActivo');
      }
      
      document.getElementById('pokedex').classList.add('linkActivo');
      displayMain('pokedex');
        
      });
document.getElementById('guide').addEventListener('click', function() { 
    for(let link of navLinks){
        link.classList.remove('linkActivo');
      }
      
      document.getElementById('guide').classList.add('linkActivo');
    displayMain('guide');
});

const displayMain = (id) => {
    if (id=='home') {
      document.getElementById('interface_home').style.display= 'block';
      document.getElementById('interface_pokedex').style.display = 'none';
      document.getElementById('interface_about').style.display = 'none';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokedex') {
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'block';
      document.getElementById('interface_about').style.display = 'none';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'about'){
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'none';
      document.getElementById('interface_about').style.display = 'block';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'guide'){
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'none';
      document.getElementById('interface_about').style.display = 'none';
      document.getElementById('interface_guide').style.display= 'block';
  }  
};

// ----------------------TOP TEN--------------------------

const ten=topTen(pokemonData);

ten.forEach((pokemon) => {
  let tenPokemonContainer = document.createElement('div');
  let spanPokemon = document.createElement('span');
  spanPokemon.className =`pokemon_${pokemon.num}`;
  // spanPokemon.setAttribute("id", `pokemon_${pokemon.num}`);
  spanPokemon.textContent = `${pokemon.name} ${pokemon["spawn-chance"]}`;
  let imgPokemon = document.createElement('img');
  imgPokemon.src = `${pokemon.img}`;
  tenPokemonContainer.appendChild(spanPokemon);
  tenPokemonContainer.appendChild(imgPokemon);

  document.getElementById('top_ten').appendChild(tenPokemonContainer);
});

// -------------------------Imprimimos la información de cada objeto------------------------

const printInformation =(obj, divi)=>{
  for(let property in obj){
    let contenido = document.createElement('div');
    let contenido_1 = document.createElement('b');
    contenido_1.textContent = `${property}:`;
    let span_1 =document.createElement('span');
    span_1.textContent=`${obj[property]}`;
    contenido.appendChild(contenido_1);
    contenido.appendChild(span_1);
    divi.appendChild(contenido);
  }
  };

// -------------------Mostramos todos los pokemon con su información-------------------------------

const mostrarPokemon = (data) => {
  const DATA = data.pokemon;

  DATA.forEach((pokemon) => {
    let pokemonContainer = document.createElement('div');
    pokemonContainer.className =`pokemon_search`;
    let spanPokemon = document.createElement('span');
    spanPokemon.textContent = `${pokemon.name} ${pokemon.num}`;
    let imgPokemon = document.createElement('img');
    imgPokemon.src = `${pokemon.img}`;
    let btnOpen =document.createElement('button');
    btnOpen.innerHTML='Information';
    btnOpen.className =`btnOpen_${pokemon.num}`;
    btnOpen.setAttribute("id", `btnOpen_${pokemon.num}`);
    
    let divInformacion = document.createElement('div');
    divInformacion.className =`information_pokemon`;
    divInformacion.setAttribute("id", `information_pokemon_${pokemon.num}`);
    divInformacion.style.display='none';
    let IMGCONTAINER = document.createElement('div');
    IMGCONTAINER.className='itemInfo container_img';
    let INFOCONTAINER = document.createElement('div');
    INFOCONTAINER.className='itemInfo container_info';
    let btnClose =document.createElement('button');
    btnClose.innerHTML='volver';
    btnClose.className =`btnClose`;
    btnClose.setAttribute("id", `btnClose_${pokemon.num}`);
    
    let imgInfoCONTAINER=document.createElement('div');
    imgInfoCONTAINER.className ='imagenINFO';
    let btnCloseCONTAINER = document.createElement('div');
    btnCloseCONTAINER.className = 'btnINFO';
    let nameNumeCONTAINER = document.createElement('div');
    nameNumeCONTAINER.className = 'nameNumINFO';

    let imgInfo = document.createElement('img');
    imgInfo.src = `${pokemon.img}`;
    let namePokemon=document.createElement('div')
    namePokemon.textContent=`${pokemon.name}`;
    let numPokemon=document.createElement('div')
    numPokemon.textContent=`${pokemon.num}`;
// --------------
    const objectInfo = { Generation: pokemon.generation.name, Height: pokemon.size.height, Weight: pokemon.size.weight, Rarity: pokemon['pokemon-rarity'], Type: pokemon.type, Encounter : pokemon['spawn-chance'], Attack: pokemon.stats['base-attack'], Defense: pokemon.stats['base-defense'], Resistance: pokemon.stats['base-stamina'], Cp: pokemon.stats['max-cp'], Hp: pokemon.stats['max-hp'], Resistant: pokemon.resistant, Weaknesses: pokemon.weaknesses };
// ---------------
    btnCloseCONTAINER.appendChild(btnClose);
    IMGCONTAINER.appendChild(btnCloseCONTAINER);
    nameNumeCONTAINER.appendChild(namePokemon);
    nameNumeCONTAINER.appendChild(numPokemon);
    IMGCONTAINER.appendChild(nameNumeCONTAINER);
    
    imgInfoCONTAINER.appendChild(imgInfo);
    IMGCONTAINER.appendChild(imgInfoCONTAINER);
    divInformacion.appendChild(IMGCONTAINER);
    printInformation(objectInfo,INFOCONTAINER);
    divInformacion.appendChild(INFOCONTAINER);

    pokemonContainer.appendChild(imgPokemon);
    pokemonContainer.appendChild(spanPokemon);
    pokemonContainer.appendChild(btnOpen);

    document.getElementById("pokemon").appendChild(pokemonContainer);

    document.getElementById("imagen_pokemon").appendChild(divInformacion);

    
    btnOpen.onclick = function() {
      displayMain('about');

      const Links = document.querySelectorAll('.information_pokemon');
      for(let link of Links){
        link.classList.remove('Active');
      }
      document.getElementById(`information_pokemon_${pokemon.num}`).classList.add('Active');
    };

    btnClose.onclick = function() {
      document.getElementById(`btnClose_${pokemon.num}`).addEventListener('click', function() { 
        displayMain('pokedex');
          });
    };

  })
};

// -------------------Mostramos todos los filtros por tipo-------------------------------

const filtrado = (data,type) => {

let CONTAINER = document.createElement('div');
  CONTAINER.style.display='none';
  CONTAINER.className = `filter`;
  CONTAINER.setAttribute("id", `filter_${type}`);
for (let i = 0; i < data.length; i++) {

  let pokemonContainer = document.createElement('div');
  pokemonContainer.className =`pokemon_search`;
  let spanPokemon = document.createElement('span');
  spanPokemon.textContent = `${data[i].name} ${data[i].num}`;
  let imgPokemon = document.createElement('img');
  imgPokemon.src = `${data[i].img}`;
  let btnOpen =document.createElement('button');
  btnOpen.innerHTML='Information';
  btnOpen.className =`filter_btnOpen_${data[i].num}`;
  btnOpen.setAttribute("id", `filter_btnOpen_${data[i].num}`);

  
  pokemonContainer.appendChild(imgPokemon);
  pokemonContainer.appendChild(spanPokemon);
  pokemonContainer.appendChild(btnOpen);
  CONTAINER.appendChild(pokemonContainer);

  
  btnOpen.onclick = function() {
    displayMain('about');

    const Links = document.querySelectorAll('.information_pokemon');
    for(let link of Links){
      link.classList.remove('Active');
    }
    document.getElementById(`information_pokemon_${data[i].num}`).classList.add('Active');
  };
  
}
document.getElementById('pokemon_type').appendChild(CONTAINER);

};
// ----------------CREANDO EL CONTENIDO DE LOS FILTROS POR TIPO-----------------
const NEWDATA = JSON.parse(JSON.stringify(pokemonData));

const setTypes = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','fairy','dark'];

const printTypeFilter = (array) =>{
  for(let type of array ){
    let  typeData = filterType(NEWDATA,type);
    filtrado(typeData,type);
  }
};

printTypeFilter(setTypes);

// -------------------------DISPLAY DE LOS FILTROS POR TIPO-------------------

const displayType = (id,type) => {
  if (id == "pokemon") {
    document.getElementById("pokemon").style.display = "flex";
    document.getElementById("pokemon_type").style.display = "none";
  } else if (id == "pokemon_type") {
    
      for(let link of setTypes){
        document.getElementById(`filter_${link}`).style.display='none';
      }
    document.getElementById(`filter_${type}`).style.display='flex';
    document.getElementById("pokemon").style.display = "none";
    document.getElementById("pokemon_type").style.display = "flex";

  }
};
// ---------------Acciones al presionar los iconos de filtro por tipo----------------

const typeLinks = document.querySelectorAll('.type_container a');

document.getElementById('pokedex').addEventListener('click', function() { 
  for(let link of typeLinks){
    link.classList.remove('linkActivoType');
  }
    displayType('pokemon','pokemon');
    mostrarPokemon(pokemonData);
});

document.getElementById('type_normal').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_normal').classList.add('linkActivoType');
      displayType('pokemon_type','normal');
});

document.getElementById('type_fighting').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fighting').classList.add('linkActivoType');
    displayType('pokemon_type','fighting');
});

document.getElementById('type_flying').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_flying').classList.add('linkActivoType');
    displayType('pokemon_type', 'flying');
});

document.getElementById('type_poison').addEventListener('click', function() {
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
    document.getElementById('type_poison').classList.add('linkActivoType'); 
    displayType('pokemon_type', 'poison');
});

document.getElementById('type_ground').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ground').classList.add('linkActivoType');
    displayType('pokemon_type', 'ground');
});

document.getElementById('type_rock').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_rock').classList.add('linkActivoType');
    displayType('pokemon_type', 'rock');
});

document.getElementById('type_bug').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_bug').classList.add('linkActivoType');
    displayType('pokemon_type', 'bug');
});

document.getElementById('type_ghost').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ghost').classList.add('linkActivoType');
    displayType('pokemon_type', 'ghost');
});

document.getElementById('type_steel').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_steel').classList.add('linkActivoType');
    displayType('pokemon_type', 'steel');
});

document.getElementById('type_fire').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fire').classList.add('linkActivoType');
    displayType('pokemon_type', 'fire');
});

document.getElementById('type_water').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_water').classList.add('linkActivoType');
    displayType('pokemon_type', 'water');
});

document.getElementById('type_grass').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_grass').classList.add('linkActivoType');
    displayType('pokemon_type', 'grass');
});

document.getElementById('type_electric').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_electric').classList.add('linkActivoType');
    displayType('pokemon_type', 'electric');
});

document.getElementById('type_psychic').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_psychic').classList.add('linkActivoType');
    displayType('pokemon_type', 'psychic');
});

document.getElementById('type_ice').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ice').classList.add('linkActivoType');
    displayType('pokemon_type', 'ice');
});

document.getElementById('type_dragon').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_dragon').classList.add('linkActivoType');
    displayType('pokemon_type', 'dragon');
});

document.getElementById('type_fairy').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fairy').classList.add('linkActivoType');
    displayType('pokemon_type', 'fairy');
});

document.getElementById('type_dark').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_dark').classList.add('linkActivoType');
    displayType('pokemon_type', 'dark');
});

// -------------------------FILTRO WEAKNESSES--------------------------

document.querySelectorAll(".type").forEach(el => {
  el.addEventListener("click", e => {
    const filtroTipoDefault = e.target.getAttribute("id");
    // console.log(filtroTipoDefault);
    const dataFilterType = filterType(pokemonData,filtroTipoDefault);


    const eve = document.getElementById("pokemon_type_filter"),
    deleted = [];
    Array.from(eve.childNodes).forEach( child => {eve.removeChild(child); deleted.push(child.tagName);});

  // console.log(deleted); 

    document.querySelectorAll(".dropdown").forEach(el => {
      el.addEventListener("click", e => {
        const filtro = e.target.getAttribute("id");

        const eve = document.getElementById("pokemon_type_filter"),
        deleted = [];
        Array.from(eve.childNodes).forEach( child => {eve.removeChild(child); deleted.push(child.tagName);});

      // console.log(deleted); 

        if(filtro == 'more_weaknesses'){
          const MOREWEAK = moreWeaknesses(dataFilterType);
      let CONTAINER = document.createElement('div');
      // CONTAINER.style.display='none';
      CONTAINER.className = `filter`;
      CONTAINER.setAttribute("id", `filter_${filtroTipoDefault}`);
    for (let i = 0; i < MOREWEAK.length; i++) {
    
      let pokemonContainer = document.createElement('div');
      let spanPokemon = document.createElement('span');
      spanPokemon.textContent = `${MOREWEAK[i].name} ${MOREWEAK[i].num}`;
      let imgPokemon = document.createElement('img');
      imgPokemon.src = `${MOREWEAK[i].img}`;
      let btnOpen =document.createElement('button');
      btnOpen.innerHTML='Information';
      btnOpen.className =`filter_btnOpen_${MOREWEAK[i].num}`;
      btnOpen.setAttribute("id", `filter_btnOpen_${MOREWEAK[i].num}`);
    
      
      pokemonContainer.appendChild(imgPokemon);
      pokemonContainer.appendChild(spanPokemon);
      pokemonContainer.appendChild(btnOpen);
      CONTAINER.appendChild(pokemonContainer);
    
      
      btnOpen.onclick = function() {
        displayMain('about');
    
        const Links = document.querySelectorAll('.information_pokemon');
        for(let link of Links){
          link.classList.remove('Active');
        }
        document.getElementById(`information_pokemon_${MOREWEAK[i].num}`).classList.add('Active');
      };
      
    }
    document.getElementById('pokemon_type_filter').appendChild(CONTAINER);
      // ----------------------------------
    document.getElementById('pokemon_type_filter').style.display = 'flex';
    document.getElementById('pokemon').style.display = 'none';
    document.getElementById('pokemon_type').style.display = 'none';
    }
  });
});

});
});    

// -----------------Filtro de busqueda ---------------------------------
let searchPokemon = searchFilter(".search", ".pokemon_search")

// -----------------Btn para volver a ver todos los pokemones ----------

