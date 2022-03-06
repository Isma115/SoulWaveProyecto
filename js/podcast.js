window.onload = function() {
    setId();
    setImages();
};

function setId(){
    var podc = document.querySelectorAll(".podlink");
    for(var i = 0;i<podc.length;i++){
        podc[i].id = "podc" + i;
    }
}

function setImages(){
    var podc = document.querySelectorAll(".podlink");
    for(var i = 0;i<podc.length;i++){
        document.getElementById("podc" + i).style.backgroundImage = "url('images/podcast/" + i + ".jpg')";
    }
    
}