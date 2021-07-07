
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

// // ------------SEARCH FILTER-----------------------
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
