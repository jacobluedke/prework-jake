
document.getElementById("growBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "Blue";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = ".5";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "Orange";
    document.getElementById("box").style.opacity = "1";

});

document.getElementById("shrinkBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "75px";
    document.getElementById("box").style.width = "75px";

});

document.getElementById("magicBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0";

});