document.getElementById("addJSON").addEventListener("click", AtacarFichero);

function AtacarFichero() {
  const url = "https://picsum.photos/list";

  fetch(url)
    .then((response) => response.text())
    .then(mostrarObjetosConsola)
    .catch(console.log);
}

function mostrarObjetosConsola(texto) {
  let listaImagenes = JSON.parse(texto);
  let salida = "";
  salida+="<ul>";
  for(let i = 0; i<listaImagenes.length;i++)
  {
    salida+="<li><a href='"+listaImagenes[i].post_url+"' >"+listaImagenes[i].post_url+"->"+listaImagenes[i].author+"</a></li>";
    
  }
  salida+="</ul>";
  document.getElementById("salida").innerHTML=salida;
}
