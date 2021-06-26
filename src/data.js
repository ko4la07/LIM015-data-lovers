// estas funciones son de ejemplo

// import data from "./data/pokemon/pokemon";

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };




export const topTen = (data) => {
  let arrayEmpty= [];
    for (let i = 0; i < data.pokemon.length; i++) {
      let topTenPokemon= data.pokemon[i]["spawn-chance"];
      let stringToNumber= parseInt(topTenPokemon);
  // let arrayOfNumbers= Array.from(stringToNumber);
      arrayEmpty.push(stringToNumber);
      arrayEmpty.sort(function(a,b){return b-a});
      // arrayEmpty.slice(0,9);
  // console.log(arrayVacio);
      
      // console.log(typeof(arrayEmpty));
    }
    let newArray= arrayEmpty.slice(0,10);
    console.log(newArray);
}
  
  
 
 
  
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
