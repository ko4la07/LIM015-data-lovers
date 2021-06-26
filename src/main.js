/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
/* import data from './data/pokemon/pokemon.js'; */
// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/pokemon/pokemon.js';
import {allPokemon, filterType} from './data.js'

const pokemonData=JSON.parse(JSON.stringify(data));
// console.log(pokemonData);

let imagesPokemon=allPokemon(pokemonData)
document.getElementById('pokemon').innerHTML=imagesPokemon;
// console.log(imagesPokemon);

let filtergrass= filterType(pokemonData,'fire');
document.getElementById('pokemon_type').innerHTML=filtergrass;
//console.log(filtergrass);

document.getElementById('type_fire').addEventListener('click', function() { 
    displayType('pokemon_type');
});
document.getElementById('pokedex').addEventListener('click', function() { 
    displayType('pokemon');
});

const displayType= (id) => {
    if (id =='pokemon') {
        document.getElementById('pokemon').style.display='block';
        document.getElementById('pokemon_type').style.display='none';
    } else if (id =='pokemon_type') {
        document.getElementById('pokemon').style.display='none';
        document.getElementById('pokemon_type').style.display='block';
    }
}



document.getElementById('home').addEventListener('click', function() { 
    displayMain('home');
});
document.getElementById('pokedex').addEventListener('click', function() { 
    displayMain('pokedex');
});
document.getElementById('guide').addEventListener('click', function() { 
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

document.getElementById('pokemon').addEventListener('click', function() { 
    pokemonInformationDisplay('pokemon');
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
    if (id=='pokemon') {
        document.getElementById('interface_home').style.display= 'none';
        document.getElementById('interface_pokedex').style.display = 'none';
        document.getElementById('pokemon_information_bar').style.display = 'block';
        document.getElementById('interface_about').style.display= 'block';
        document.getElementById('interface_features').style.display= 'none';
        document.getElementById('interface_attacks').style.display= 'none';
        document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokemon_about') {
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

