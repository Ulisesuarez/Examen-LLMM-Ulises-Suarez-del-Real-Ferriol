window.onload=function(){
    var img=document.getElementById("imgMain");

    img.onclick = function(){


    var NumeroParrafos=document.getElementsByTagName("P").length;
    var parrafosArray=document.getElementsByTagName("P");
    var nuevoP=document.createElement("p");
    nuevoP.innerHTML="En esta página habían "+NumeroParrafos.toString()+" párrafos y ahora hay "+(NumeroParrafos+1).toString()+" párrafos";
    
    document.getElementById("contenedorParrafos").insertBefore(nuevoP,document.getElementById("ultimo"));

}
}