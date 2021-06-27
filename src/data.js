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
    let imagenPokemon=""; 
    for (let i = 0; i < data.pokemon.length; i++) {
        imagenPokemon += "<div><span id='pokemon_"+data.pokemon[i].num+"'>" + data.pokemon[i].name +"</span>"
        imagenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
    }
    return imagenPokemon;
};
//-------Filtrar por tipo ----------

export const filterType = (data,type) => {
    let imagenPokemon=""; 
    for (let i = 0; i < data.pokemon.length; i++) {
        if(data.pokemon[i].type == type || data.pokemon[i].type[0] == type || data.pokemon[i].type[1] == type){
            imagenPokemon += "<div><span id='pokemon_"+data.pokemon[i].num + "'>" + data.pokemon[i].name +"</span>"
            imagenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
        }
    }
    return imagenPokemon;
};
 
//-----------Mostrar imagenes por tipo---------
export const displayType= (data, id, type) => {
    if (id =='pokemon') {
        document.getElementById('pokemon').style.display='flex';
        document.getElementById('pokemon_type').style.display='none';
    } else if (id =='pokemon_type') {
        let filter= filterType(data,type);
        document.getElementById('pokemon_type').innerHTML=filter;
        document.getElementById('pokemon').style.display='none';
        document.getElementById('pokemon_type').style.display='flex';
    }
}

// ---------------------Top ten -----------------
export const topTen =(data) => {
    let array=[];
    for (let i = 0; i < data.pokemon.length; i++) {
        let topTenPokemon = parseInt(data.pokemon[i]["spawn-chance"]); 
        array.push(topTenPokemon);
        array.sort(function(a,b) { 
            return b-a
        });
    }
    
    for (let item in  array.slice(0,10)) {
        let tenPokemon=""; 
        for (let i = 0; i < data.pokemon.length; i++) {
            if(item == data.pokemon[i]["spawn-chance"]){
                tenPokemon += "<div><span>" + data.pokemon[i].name + " " + data.pokemon[i]["spawn-chance"] +"</span>"
                tenPokemon += "<img width='120' height='120' src='" + data.pokemon[i].img + "'></img></div>";
            } 
        }
        return tenPokemon;
    }

    
}


