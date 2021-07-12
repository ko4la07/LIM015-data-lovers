
import pokemonData from './data/pokemon/pokemon.js';

import { filterType, topTen, moreWeaknesses, searchFilter, lessWeaknesses, highAttack, smallAttack, highDefense, smallDefense, highEscape, highStamina, highCp, highHp, averageAttack,averageStamina} from './data.js'


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
document.getElementById('statistics').addEventListener('click', function() { 

  for(let link of navLinks){
      link.classList.remove('linkActivo');
    }
    
    document.getElementById('statistics').classList.add('linkActivo');
    displayMain('statistics');
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
      document.getElementById('interface_statistics').style.display= 'none';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'pokedex') {
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'block';
      document.getElementById('interface_about').style.display = 'none';
      document.getElementById('interface_statistics').style.display= 'none';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'about'){
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'none';
      document.getElementById('interface_about').style.display = 'block';
      document.getElementById('interface_statistics').style.display= 'none';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'statistics'){
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'none';
      document.getElementById('interface_about').style.display = 'none';
      document.getElementById('interface_statistics').style.display= 'block';
      document.getElementById('interface_guide').style.display= 'none';
    } else if (id == 'guide'){
      document.getElementById('interface_home').style.display= 'none';
      document.getElementById('interface_pokedex').style.display = 'none';
      document.getElementById('interface_about').style.display = 'none';
      document.getElementById('interface_statistics').style.display= 'none';
      document.getElementById('interface_guide').style.display= 'block';
    }  
};

// ----------------------TOP TEN--------------------------

const ten=topTen(pokemonData);

ten.forEach((pokemon) => {
  const tenPokemonContainer = document.createElement('div');
  const spanPokemon = document.createElement('span');
  spanPokemon.className =`pokemon_${pokemon.num} pokemon_top`;
  // spanPokemon.setAttribute("id", `pokemon_${pokemon.num}`);
  spanPokemon.textContent = `${pokemon.name}`;
  const imgPokemon = document.createElement('img');
  imgPokemon.src = `${pokemon.img}`;
  tenPokemonContainer.appendChild(imgPokemon);
  tenPokemonContainer.appendChild(spanPokemon);

  document.getElementById('top_ten').appendChild(tenPokemonContainer);
});

// -------------------------Imprimimos la información de cada objeto------------------------

const printInformation =(obj, divi)=>{
  for(let property in obj){
    const contenido = document.createElement('div');
    const contenido_1 = document.createElement('b');
    contenido_1.textContent = `${property}:`;
    const span_1 =document.createElement('span');
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
    const pokemonContainer = document.createElement('div');
    pokemonContainer.className =`pokemon_search`;
    const spanPokemon = document.createElement('span');
    spanPokemon.textContent = `${pokemon.name} ${pokemon.num}`;
    const imgPokemon = document.createElement('img');
    imgPokemon.src = `${pokemon.img}`;
    const btnOpen =document.createElement('button');
    btnOpen.innerHTML='Information';
    btnOpen.className =`btnOpen_${pokemon.num}`;
    btnOpen.setAttribute("id", `btnOpen_${pokemon.num}`);
    
    const divInformacion = document.createElement('div');
    divInformacion.className =`information_pokemon`;
    divInformacion.setAttribute("id", `information_pokemon_${pokemon.num}`);
    divInformacion.style.display='none';
    const IMGCONTAINER = document.createElement('div');
    IMGCONTAINER.className='itemInfo container_img';
    const INFOCONTAINER = document.createElement('div');
    INFOCONTAINER.className='itemInfo container_info';
    const btnClose =document.createElement('button');
    btnClose.innerHTML='volver';
    btnClose.className =`btnClose`;
    btnClose.setAttribute("id", `btnClose_${pokemon.num}`);
    
    const imgInfoCONTAINER=document.createElement('div');
    imgInfoCONTAINER.className ='imagenINFO';
    const btnCloseCONTAINER = document.createElement('div');
    btnCloseCONTAINER.className = 'btnINFO';
    const nameNumeCONTAINER = document.createElement('div');
    nameNumeCONTAINER.className = 'nameNumINFO';

    const imgInfo = document.createElement('img');
    imgInfo.src = `${pokemon.img}`;
    const namePokemon=document.createElement('div')
    namePokemon.textContent=`${pokemon.name}`;
    const numPokemon=document.createElement('div')
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

const CONTAINER = document.createElement('div');
  CONTAINER.style.display='none';
  CONTAINER.className = `filter`;
  CONTAINER.setAttribute("id", `filter_${type}`);
for (let i = 0; i < data.length; i++) {

  const pokemonContainer = document.createElement('div');
  pokemonContainer.className =`pokemon_search`;
  const spanPokemon = document.createElement('span');
  spanPokemon.textContent = `${data[i].name} ${data[i].num}`;
  const imgPokemon = document.createElement('img');
  imgPokemon.src = `${data[i].img}`;
  const btnOpen =document.createElement('button');
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
const POKEMONDATA = JSON.parse(JSON.stringify(pokemonData));

const setTypes = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','fairy','dark'];

const printTypeFilter = (array) =>{
  for(let type of array ){
    let  typeData = filterType(POKEMONDATA,type);
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

// -------------------------TODOS LOS FILTROS----------------------------

document.querySelectorAll(".type").forEach(el => {
  el.addEventListener("click", e => {
    const filtroTipoDefault = e.target.getAttribute("id");
    
    const dataFilterType = filterType(pokemonData,filtroTipoDefault);

    let initialData = JSON.parse(JSON.stringify(pokemonData));

    const eve = document.getElementById("pokemon_type_filter"),
    deleted = [];
    Array.from(eve.childNodes).forEach( child => {eve.removeChild(child); deleted.push(child.tagName);});

    document.querySelectorAll(".dropdown").forEach(el => {
      el.addEventListener("click", e => {
        const filtro = e.target.getAttribute("id");

        const eve = document.getElementById("pokemon_type_filter"),
        deleted = [];
        Array.from(eve.childNodes).forEach( child => {eve.removeChild(child); deleted.push(child.tagName);});

        if(filtro == 'more_weaknesses'){
          initialData = moreWeaknesses(dataFilterType);
        } else if(filtro == 'less_weaknesses'){
          initialData = lessWeaknesses(dataFilterType);
        } else if(filtro == 'high_attack'){
          initialData = highAttack(dataFilterType);
        } else if(filtro == 'small_attack'){
          initialData = smallAttack(dataFilterType);
        } else if(filtro == 'high_defense'){
          initialData = highDefense(dataFilterType);
        } else if(filtro == 'small_defense'){
          initialData = smallDefense(dataFilterType);
        } else if(filtro == 'high_escape'){
          initialData = highEscape(dataFilterType);
        } else if(filtro == 'high_stamina'){
          initialData = highStamina(dataFilterType);
        } else if(filtro == 'high_cp'){
          initialData = highCp(dataFilterType);
        } else if(filtro == 'high_hp'){
          initialData = highHp(dataFilterType);
        }

        const CONTAINER = document.createElement('div');
          // CONTAINER.style.display='none';
          CONTAINER.className = `filter`;
          CONTAINER.setAttribute("id", `filter_${filtroTipoDefault}`);
        for (let i = 0; i < initialData.length; i++) {
        
          const pokemonContainer = document.createElement('div');
          pokemonContainer.className =`pokemon_search`;
          const spanPokemon = document.createElement('span');
          spanPokemon.textContent = `${initialData[i].name} ${initialData[i].num}`;
          const imgPokemon = document.createElement('img');
          imgPokemon.src = `${initialData[i].img}`;
          const btnOpen =document.createElement('button');
          btnOpen.innerHTML='Information';
          btnOpen.className =`filter_btnOpen_${initialData[i].num}`;
          btnOpen.setAttribute("id", `filter_btnOpen_${initialData[i].num}`);
        
          
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
            document.getElementById(`information_pokemon_${initialData[i].num}`).classList.add('Active');
          };
          
        }
        document.getElementById('pokemon_type_filter').appendChild(CONTAINER);
          // ----------------------------------
        document.getElementById('pokemon_type_filter').style.display = 'flex';
        document.getElementById('pokemon').style.display = 'none';
        document.getElementById('pokemon_type').style.display = 'none';
        });
      });
    });
});    

// -----------------Filtro de busqueda ---------------------------------

searchFilter(".search", ".pokemon_search");

// ----------------------Statistics-----------------------------

// ------------------------Average Attack-------------------------
const pokemonChartData = JSON.parse(JSON.stringify(pokemonData));

let avrgAttack =[];
for(let type of setTypes){
  let dataFilter = filterType(pokemonChartData,type);
  let avrg = averageAttack(dataFilter);
  avrgAttack.push(avrg.toFixed(0));
}

const dataAttack = {
  labels: setTypes,
  datasets: [{
    label: "Average attack for type",
    backgroundColor:[
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(94,69,44,0.2)",
      "rgba(161,148,135,0.2)",
      "rgba(202,234,114,0.2)",
      "rgba(130,123,116,0.2)",
      "rgba(60,49,38,0.2)",
      "rgba(255, 87, 51,0.2)",
      "rgba(9, 121, 182,0.2)",
      "rgba(88, 214, 141,0.2)",
      "rgba(231,222,38,0.2)",
      "rgba(223, 38, 231,0.2)",
      "rgba(103, 242, 243,0.2)",
      "rgba(122, 243, 103,0.2)",
      "rgba(218, 247, 166,0.2)",
      "rgba(104, 54, 137,0.2)",
    ],
    borderColor:[
      "rgb(255, 159, 64)",
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(94,69,44)",
      "rgb(161,148,135)",
      "rgb(202,234,114)",
      "rgb(130,123,116)",
      "rgb(60,49,38)",
      "rgb(255, 87, 51)",
      "rgb(9, 121, 182)",
      "rgb(88, 214, 141)",
      "rgb(231,222,38)",
      "rgb(223, 38, 231)",
      "rgb(103, 242, 243)",
      "rgb(122, 243, 103)",
      "rgb(218, 247, 166)",
      "rgb(104, 54, 137)",
    ],
    borderWidth: 2,
    hoverBackgroundColor: "rgba(52,130,164,0.6)",
    hoverBorderColor: "rgba(8,34,78,1)",
    data: avrgAttack,
  }]
};

const optionsAttack = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

// eslint-disable-next-line
Chart.Bar('chartAttack', {
  options: optionsAttack,
  data: dataAttack
});
// ----------------------------Average Stamina----------------------

let avrgStamina =[];
for(let type of setTypes){
  let dataFilter = filterType(pokemonChartData,type);
  let avrg = averageStamina(dataFilter);
  avrgStamina.push(avrg.toFixed(0));
}

const dataStamina = {
  labels: setTypes,
  datasets: [{
    label: "Average attack for type",
    backgroundColor:[
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(94,69,44,0.2)",
      "rgba(161,148,135,0.2)",
      "rgba(202,234,114,0.2)",
      "rgba(130,123,116,0.2)",
      "rgba(60,49,38,0.2)",
      "rgba(255, 87, 51,0.2)",
      "rgba(9, 121, 182,0.2)",
      "rgba(88, 214, 141,0.2)",
      "rgba(231,222,38,0.2)",
      "rgba(223, 38, 231,0.2)",
      "rgba(103, 242, 243,0.2)",
      "rgba(122, 243, 103,0.2)",
      "rgba(218, 247, 166,0.2)",
      "rgba(104, 54, 137,0.2)",
    ],
    borderColor:[
      "rgb(255, 159, 64)",
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(94,69,44)",
      "rgb(161,148,135)",
      "rgb(202,234,114)",
      "rgb(130,123,116)",
      "rgb(60,49,38)",
      "rgb(255, 87, 51)",
      "rgb(9, 121, 182)",
      "rgb(88, 214, 141)",
      "rgb(231,222,38)",
      "rgb(223, 38, 231)",
      "rgb(103, 242, 243)",
      "rgb(122, 243, 103)",
      "rgb(218, 247, 166)",
      "rgb(104, 54, 137)",
    ],
    borderWidth: 2,
    hoverBackgroundColor: "rgba(52,130,164,0.6)",
    hoverBorderColor: "rgba(8,34,78,1)",
    data: avrgStamina,
  }]
};

const optionsStamina = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};
// eslint-disable-next-line
Chart.Bar('chartStamina', {
  options: optionsStamina,
  data: dataStamina
});

// ----------------------------Percent Types---------------------------

let percentTypes =[];
for(let type of setTypes){
  let dataFilter = filterType(pokemonChartData,type);
  let percent = (dataFilter.length/pokemonChartData.pokemon.length)*100;
  percentTypes.push(percent.toFixed(0));
}

const dataPercent = {
  labels: setTypes,
  datasets: [{
    label: "Pokémon Percentage for Type",
    backgroundColor:[
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(94,69,44,0.2)",
      "rgba(161,148,135,0.2)",
      "rgba(202,234,114,0.2)",
      "rgba(130,123,116,0.2)",
      "rgba(60,49,38,0.2)",
      "rgba(255, 87, 51,0.2)",
      "rgba(9, 121, 182,0.2)",
      "rgba(88, 214, 141,0.2)",
      "rgba(231,222,38,0.2)",
      "rgba(223, 38, 231,0.2)",
      "rgba(103, 242, 243,0.2)",
      "rgba(122, 243, 103,0.2)",
      "rgba(218, 247, 166,0.2)",
      "rgba(104, 54, 137,0.2)",
    ],
    borderColor:[
      "rgb(255, 159, 64)",
      "rgb(255, 99, 132)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(94,69,44)",
      "rgb(161,148,135)",
      "rgb(202,234,114)",
      "rgb(130,123,116)",
      "rgb(60,49,38)",
      "rgb(255, 87, 51)",
      "rgb(9, 121, 182)",
      "rgb(88, 214, 141)",
      "rgb(231,222,38)",
      "rgb(223, 38, 231)",
      "rgb(103, 242, 243)",
      "rgb(122, 243, 103)",
      "rgb(218, 247, 166)",
      "rgb(104, 54, 137)",
    ],
    borderWidth: 2,
    hoverBackgroundColor: "rgba(52,130,164,0.6)",
    hoverBorderColor: "rgba(8,34,78,1)",
    data: percentTypes,
  }]
};

const optionsPercent = {
  maintainAspectRatio: false,
};
// eslint-disable-next-line
Chart.Doughnut('chartPercent', {
  options: optionsPercent,
  data: dataPercent
});
