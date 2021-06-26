/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
/* import data from './data/pokemon/pokemon.js'; */
// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/pokemon/pokemon.js';
import {allPokemon, displayType, topTen} from './data.js'

const pokemonData=JSON.parse(JSON.stringify(data));
// console.log(pokemonData);

let imagesPokemon=allPokemon(pokemonData)
document.getElementById('pokemon').innerHTML=imagesPokemon;
// console.log(imagesPokemon);

// ------------

document.getElementById('pokedex').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon','pokedex');
});

document.getElementById('type_normal').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'normal');
});

document.getElementById('type_fighting').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'fighting');
});

document.getElementById('type_flying').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'flying');
});

document.getElementById('type_poison').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'poison');
});

document.getElementById('type_ground').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'ground');
});

document.getElementById('type_rock').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'rock');
});

document.getElementById('type_bug').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'bug');
});

document.getElementById('type_ghost').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'ghost');
});

document.getElementById('type_steel').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'steel');
});

document.getElementById('type_fire').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'fire');
});

document.getElementById('type_water').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'water');
});

document.getElementById('type_grass').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'grass');
});

document.getElementById('type_electric').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'electric');
});

document.getElementById('type_psychic').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'psychic');
});

document.getElementById('type_ice').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'ice');
});

document.getElementById('type_dragon').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'dragon');
});

document.getElementById('type_fairy').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'fairy');
});

document.getElementById('type_dark').addEventListener('click', function() { 
    displayType(pokemonData,'pokemon_type', 'dark');
});

// --------------------------

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


// ----------------Top Ten-------------
let res=topTen(pokemonData);
document.getElementById('top_ten').innerHTML=res;
console.log(res);
