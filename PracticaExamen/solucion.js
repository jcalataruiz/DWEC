
let peticion= new XMLHttpRequest();
peticion.open("GET","http://www.omdbapi.com/?apikey=dd54e4e2&s=potter");
peticion.send()
peticion.addEventListener("load", cargada);

function cargada(){
    let datosJason=JSON.parse(peticion.responseText);
    console.log(datosJason);
    let movies=datosJason.Search;
    console.log(movies)
    let pelicula=(movies[0].Title);
    console.log(pelicula)
    for (let i = 0; i < movies.length; i++) {
        let p=document.createElement("p");
        let texto=document.createTextNode(movies[i].Title);
        p.appendChild(texto)
        document.getElementById("zonaResultados").appendChild(p)
        
    }
    
}





  
