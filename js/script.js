
window.onload = function() {
    setId();
    hidePlayList();
};

//TODOS LOS ENLACES SEGUN CATEGORIA DE MUSICA


var enlaces = [["https://www.youtube.com/embed/videoseries?list=PLs1Uc0mySIqtTr80fTKcTnFBXjvt9_Fl0",
                "https://www.youtube.com/embed/videoseries?list=PLLhhxsRukq-xD1cSEZUOdD0QdYT1NkD8X",
                "https://www.youtube.com/embed/videoseries?list=PLmFZGmfIVU7pdL_4UlYUVm5XdzE2o4eqn",
                "https://www.youtube.com/embed/videoseries?list=PLyk_83ej8BFG12afX2-Q4w_pZCd87Kz5Y"

               ],
               
               ["https://www.youtube.com/embed/videoseries?list=PLNxOe-buLm6cz8UQ-hyG1nm3RTNBUBv3K",
                "https://www.youtube.com/embed/videoseries?list=PLZN_exA7d4RVmCQrG5VlWIjMOkMFZVVOc",
                "https://www.youtube.com/embed/videoseries?list=PL1tiBqitg38_Rsqb2qiTvm3hKX2Y2qUgg",
                "https://www.youtube.com/embed/videoseries?list=PLUhqFX6g_9Ne8uW-0_WhTJgCKq17Fej72"
                ],
                
                ["https://www.youtube.com/embed/videoseries?list=PLcUqPeI0P9OzuKXazgJ-uaL1P8M5U030-",
                "https://www.youtube.com/embed/videoseries?list=PLw-VjHDlEOguFTtIGaVGb3q7WarCyqcru",
                "https://www.youtube.com/embed/videoseries?list=PLvu8wCghVq07gsEYsQ_tIVxh-X_eUqdhE",
                "https://www.youtube.com/embed/videoseries?list=PL7zsB-C3aNu3Q8XYfgWjQJg7C-nXnCO6x"
                ],
                ["https://www.youtube.com/embed/videoseries?list=PLT7CSYcEdUOuXM9IHXgLnXRc06zxaHAc4",
                "https://www.youtube.com/embed/videoseries?list=PLJd2Uv17VZz9w3r1fwoAMPjAhtLTpPiUa",
                "https://www.youtube.com/embed/videoseries?list=PLvu8wCghVq07gsEYsQ_tIVxh-X_eUqdhE",
                "https://www.youtube.com/embed/videoseries?list=PLPv5gjTm58tX6dvMRyicGSBQoYlKHVsX4"
                ],

                ["https://www.youtube.com/embed/videoseries?list=PL00277C3B32679850",
                 "https://www.youtube.com/embed/videoseries?list=PLxGj5zdsQ1WsMkV1qvReTiexVAgTisXew",
                 "https://www.youtube.com/embed/videoseries?list=PLWUrfWlhYCuijyGwyy1aqYM6y-e6cL3IQ",
                 "https://www.youtube.com/embed/videoseries?list=PLw-VjHDlEOgtXbKj7FraJQ4PRKTd8VAWX"]];


//PARRAFOS PARA CADA PLAYLIST
var tiposP = [["Lithuania HQ", "Clásicos electrónica", "Música Dance, Deep House", "Electrónica Indie"],
             ["Mix Rock", "Lo mejor del Rock clásico", "Pink Floyd", "The Beatles"], 
            ["Lo más nuevo Pop Latin", "Pop & Reggaeton", "Latin hits", "Top 40 Latin Songs"],
            ["Lo más escuchado de 2022", "Popular Trap", "Trap Latino", "Top Latin Trap Music 2021"],
            ["Techno Dubstep Party", "Best Dubstep mix", "Dubstep, Trap, EDM", "Best 2022 Dubstep"]];

//1 O 0 DEPENDE DE SI DIMOS LIKE A CADA PLAYLIST
var likes = [[0, 0, 0, 0], 
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]];

var tipoActual = "";


function mostrarLikes(tipo){

    for(var i = 0;i<likes[tipo].length;i++){
        if(likes[tipo][i] == 0){
            document.getElementById("corid" + i).src = "images/heart.png";
        }else{
            document.getElementById("corid" + i).src = "images/likedHeart.png";
        }
    }
}
function like (index){
    switch(tipoActual){
        case "electro": seleccion = 0;break;
        case "rock": seleccion = 1;break;
        case "lat": seleccion = 2;break;
        case "trap": seleccion = 3;break;
        case "dubstep": seleccion = 4;break;
    }
    if(likes[seleccion][index] == 1){
        likes[seleccion][index] = 0;
        document.getElementById("corid" + index).src = "images/heart.png";
    }else{
        likes[seleccion][index] = 1;
        document.getElementById("corid" + index).src = "images/likedHeart.png";
    }

}

function setId(){
    //ESTABLECER LOS ID PARA QUE FUNCIONEN DINAMICAMENTE
    var playlists = document.querySelectorAll(".play");
    var playlistsP = document.querySelectorAll(".parrafo");
    var portadas = document.querySelectorAll(".disportada");
    var likesc = document.querySelectorAll(".cori");
    

    for(var i = 0;i<playlists.length;i++){
        playlists[i].id = "play" + i;
        playlistsP[i].id = "playP" + i;
        likesc[i].id = "corid" + i;
    }
    for(var i = 0;i<portadas.length;i++){
        portadas[i].getElementsByClassName("boton")[0].id = "boton" + i;
        portadas[i].getElementsByClassName("parrafoport")[0].id = "parrafo" + i;
        portadas[i].getElementsByClassName("icono")[0].id = "icono" + i;

    }
    document.getElementById("displaylistid").style.width = "0";
    document.getElementById("botonAtras").style.display = "none";

}
function setPlayList(tipo){
    tipoActual = tipo;
    var playlists = document.querySelectorAll(".play");
    var playlistsP = document.querySelectorAll(".parrafo");

    var seleccion = -1;
    switch(tipo){
        case "electro": seleccion = 0;break;
        case "rock": seleccion = 1;break;
        case "lat": seleccion = 2;break;
        case "trap": seleccion = 3;break;
        case "dubstep": seleccion = 4;break;
    }

    for(var i = 0;i<playlists.length;i++){
        playlists[i].src = enlaces[seleccion][i];
        playlistsP[i].innerHTML = tiposP[seleccion][i];
        document.getElementById("play" + i).style.display = "block";
        document.getElementById("corid" + i).style.display = "block";
        
        
    }

    document.getElementById("botonAtras").style.display = "block";
    document.getElementById("displaylistid").style.width = "100%";
    hidePortadas();
    mostrarLikes(seleccion);
    
}
function hidePlayList(){
     
    var playlists = document.querySelectorAll(".play");
    var playlistsP = document.querySelectorAll(".parrafo");
    var likesclass = document.querySelectorAll(".corazon");

    for(var i = 0;i<playlists.length;i++){
        playlistsP[i].innerHTML = "";
        document.getElementById("play" + i).style.display = "none";
        document.getElementById("corid" + i).style.display = "none";
        
    }
    document.getElementById("botonAtras").style.display = "none";
    showPortadas();
    
}
function hidePortadas(){
    var portadas = document.querySelectorAll(".disportada");

    for(var i = 0;i<portadas.length;i++){
        document.getElementById("boton" + i).style.display = "none";
        document.getElementById("parrafo" + i).style.display = "none";
        document.getElementById("icono" + i).style.display = "none";
    }
}
function showPortadas(){
    var portadas = document.querySelectorAll(".disportada");

    for(var i = 0;i<portadas.length;i++){
        document.getElementById("boton" + i).style.display = "block";
        document.getElementById("parrafo" + i).style.display = "block";
        document.getElementById("icono" + i).style.display = "block";
    }
    document.getElementById("displaylistid").style.width = 0;
}
/*
function recomendar(){
    var electro = document.getElementsByClassName("electro").value;
    alert("electro");
}


function show(){
    var ifr = document.getElementById("")
    ifr.style.display = "none"
    
}*/