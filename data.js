
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
  const DATA = JSON.parse(JSON.stringify(data));
  let sortedArray = DATA.pokemon;
  sortedArray.sort((a, b) => b["spawn-chance"] - a["spawn-chance"]);

  return sortedArray.slice(0,10);
};

// -----------------------FILTRO MORE WEAKNESSES-------------------------

export const moreWeaknesses = (data) => {
  let sortedArray = data;
  sortedArray.sort((a,b) => b['weaknesses'].length - a['weaknesses'].length );

return sortedArray;
  
};
// -----------------------FILTRO LESS WEAKNESSES-------------------------

export const lessWeaknesses = (data) => {
  let sortedArray = data;
  sortedArray.sort((a,b) => a['weaknesses'].length - b['weaknesses'].length );

return sortedArray;
  
};
// -----------------------FILTRO HIGH ATTACK-----------------------------
export const highAttack = (data) => {
  let sortedArray = data;
  sortedArray.sort((a,b) => b.stats['base-attack'] - a.stats['base-attack'] );

return sortedArray;
  
};
// -----------------------FILTRO SMALL ATTACK----------------------------

export const smallAttack = (data) => {
  let sortedArray = data;
  sortedArray.sort((a,b) => a.stats['base-attack'] - b.stats['base-attack'] );

return sortedArray;
  
};

// // ----------------------SEARCH FILTER-----------------------
const d= document;
export const searchFilter=(input, selector) => {
  d.addEventListener("keyup", (e) => {
  if(e.target.matches(input)) {
    // console.log(e.target.value);
    d.querySelectorAll(selector).forEach((element) => element.textContent.toLowerCase().includes(e.target.value) 
    ? element.classList.remove("busqueda") 
    : element.classList.add("busqueda")
    );
  }
  });
}

// -----------------------FILTRO HIGH DEFENSE----------------------------
export const highDefense = (data) => {
  let sortedArray = data;
  sortedArray.sort((a,b) => b.stats["base-defense"] - a.stats["base-defense"]);
  return sortedArray;
};

// -----------------------FILTRO SMALL DEFENSE----------------------------
export const smallDefense = (data) =>{
  let sortedArray = data;
  sortedArray.sort((a,b) => a.stats["base-defense"] - b.stats["base-defense"]);
  return sortedArray;
};
// -----------------------FILTRO HIGH ESCAPE----------------------------
export const highEscape = (data) =>{
  let sortedArray = data;
  sortedArray.sort((a,b) => b.encounter["base-flee-rate"] - a.encounter["base-flee-rate"]);
  return sortedArray;
};
// -----------------------FILTRO HIGH STAMINA----------------------------
export const highStamina = (data) =>{
  let sortedArray = data;
  sortedArray.sort((a,b) => b.stats["base-stamina"] - a.stats["base-stamina"]);
  return sortedArray;
};

// -----------------------FILTRO HIGH CP----------------------------
export const highCp = (data) =>{
  let sortedArray = data;
  sortedArray.sort((a,b) => b.stats["max-cp"] - a.stats["max-cp"]);
  return sortedArray;
};
// -----------------------FILTRO HIGH HP----------------------------
export const highHp = (data) =>{
  let sortedArray = data;
  sortedArray.sort((a,b) => b.stats["max-hp"] - a.stats["max-hp"]);
  return sortedArray;
};

// --------------------------STATISTICS-----------------------------

// -----------------------Average Attack------------------------------
export const averageAttack = (data) => {
  let myArray = [];
  for (let i=0; i < data.length; i++){
    let attackItem = data[i].stats['base-attack'];
    myArray.push(parseInt(attackItem));
  }
  let sum = myArray.reduce(
        (prev, item) => prev + item,
    0,
    );
  return sum/data.length;
  };
// -----------------------Average Stamina------------------------------
export const averageStamina = (data) => {
  let myArray = [];
  for (let i=0; i < data.length; i++){
    let attackItem = data[i].stats['base-stamina'];
    myArray.push(parseInt(attackItem));
  }
  let sum = myArray.reduce(
        (prev, item) => prev + item,
    0,
    );
  return sum/data.length;
  };