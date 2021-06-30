/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
import pokemon from './data/pokemon/pokemon.js';
// import pokemon from './data/pokemon/pokemon.js';
// console.log(pokemon);



// const pokemonData=JSON.parse(pokemon);
// console.log(pokemonData);

// console.log(data);


// import data from './data/rickandmorty/rickandmorty.js';

import pokemonData from './data/pokemon/pokemon.js';
import {allPokemon, displayType, highDefense, topTen, weaknessFilter} from './data.js'

// const pokemonData=JSON.parse(JSON.stringify(data));
// console.log(pokemonData);

// -------------------------All pokemon--------------------------------------

let imagesPokemon=allPokemon(pokemonData)
document.getElementById('pokemon').innerHTML=imagesPokemon;
// console.log(imagesPokemon);

// -------------------------Filter Type--------------------------------------

let typeLinks = document.querySelectorAll('.type_container a');

document.getElementById('pokedex').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon','loquequieras');
});

document.getElementById('type_normal').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_normal').classList.add('linkActivoType');
      displayType(pokemonData,'pokemon_type', 'normal');
});

document.getElementById('type_fighting').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fighting').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'fighting');
});

document.getElementById('type_flying').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_flying').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'flying');
});

document.getElementById('type_poison').addEventListener('click', function() {
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_poison').classList.add('linkActivoType'); 
    displayType(pokemonData,'pokemon_type', 'poison');
});

document.getElementById('type_ground').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ground').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'ground');
});

document.getElementById('type_rock').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_rock').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'rock');
});

document.getElementById('type_bug').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_bug').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'bug');
});

document.getElementById('type_ghost').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ghost').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'ghost');
});

document.getElementById('type_steel').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_steel').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'steel');
});

document.getElementById('type_fire').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fire').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'fire');
});

document.getElementById('type_water').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_water').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'water');
});

document.getElementById('type_grass').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_grass').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'grass');
});

document.getElementById('type_electric').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_electric').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'electric');
});

document.getElementById('type_psychic').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_psychic').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'psychic');
});

document.getElementById('type_ice').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_ice').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'ice');
});

document.getElementById('type_dragon').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_dragon').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'dragon');
});

document.getElementById('type_fairy').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_fairy').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'fairy');
});

document.getElementById('type_dark').addEventListener('click', function() { 
    for(let link of typeLinks){
        link.classList.remove('linkActivoType');
      }
      
      document.getElementById('type_dark').classList.add('linkActivoType');
    displayType(pokemonData,'pokemon_type', 'dark');
});

// --------------------------

let navLinks = document.querySelectorAll('.header_container li');

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
        document.getElementById('pokemon_information_bar').style.display = 'none';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokedex') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'block';
        document.getElementById('pokemon_information_bar').style.display = 'none';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'guide'){
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'none';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'block';
    } 
}

// -------------------------Dispaly Filtros--------------------------------

// document.getElementById('pokemon').addEventListener('click', function() { 
//     pokemonInformationDisplay('pokemon');
// });
document.getElementById('pokemon_001').addEventListener('click', function() { 
    pokemonInformationDisplay('pokemon_about');
    pokemonInfo('001',pokemonData);
});
document.getElementById('pokemon_251').addEventListener('click', function() { 
  pokemonInformationDisplay('pokemon_about');
  pokemonInfo('251',pokemonData);
});
document.getElementById('pokemon_016').addEventListener('click', function() { 
  pokemonInformationDisplay('pokemon_about');
  pokemonInfo('016',pokemonData);
});
document.getElementById('pokemon_about').addEventListener('click', function() { 
  pokemonInformationDisplay('pokemon_about');
});
document.getElementById('pokemon_features').addEventListener('click', function() { 
    pokemonInformationDisplay('pokemon_features');
});
document.getElementById('pokemon_attacks').addEventListener('click', function() { 
    pokemonInformationDisplay('pokemon_attacks');
});


const pokemonInformationDisplay = (id) => {
    // if (id=='pokemon') {
    //     document.getElementById('interface_home').style.display= 'none';
    //     document.getElementById('interface_pokedex').style.display = 'none';
    //     document.getElementById('pokemon_information_bar').style.display = 'block';
    //     document.getElementById('interface_about').style.display= 'block';
    //     document.getElementById('interface_features').style.display= 'none';
    //     document.getElementById('interface_attacks').style.display= 'none';
    //     document.getElementById('interface_guide').style.display= 'none';
    // } else 
    if (id == 'pokemon_about') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'block';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokemon_features') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'block';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokemon_attacks') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'none';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'block';
        document.getElementById('interface_guide').style.display= 'none';
    } 
}



// ----------------Top Ten-------------
let top=topTen(pokemonData);

top.map(divPokemon => {
  document.getElementById('top_ten').innerHTML += divPokemon;
});

// console.log(top);

// ----------------Filter Weakness-------------

document.getElementById('more_weaknesses').addEventListener('click', function() {
    allFilter('moreWeaknesses');
});

document.getElementById('high_defense').addEventListener('click', function() {
    allFilter('highDefense');
});

const allFilter= (id) => {
    
    if (id === 'moreWeaknesses') {
        
        let more=weaknessFilter(pokemonData);
        let  algo='';
        more.map(divPokemon => {
              
             algo += divPokemon;
              });
    

        document.getElementById("pokemon").style.display = "none";
        document.getElementById("pokemon_type").style.display = "flex";
        document.getElementById("pokemon_type").innerHTML = algo;
      } else if(id === 'highDefense'){
        let high=highDefense(pokemonData);
        let  algo='';
        high.map(divPokemon => {
              
             algo += divPokemon;
              });
    

        document.getElementById("pokemon").style.display = "none";
        document.getElementById("pokemon_type").style.display = "flex";
        document.getElementById("pokemon_type").innerHTML = algo;
      }
    
};

