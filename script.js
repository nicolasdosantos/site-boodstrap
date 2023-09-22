var combo = document.getElementById('mini-banner2');
var lanche = document.getElementById("mini-banner")
var containeLanche = document.getElementById("container-lanche")

lanche.addEventListener("click", function(){ 
    var containerCombo  = document.getElementById("container-combo")

    if(containerCombo.style.display === "none"){
        containerCombo.style.display = "flex";
    }
    else {
        containerCombo.style.display = "none";
    }
});



combo.addEventListener("click", function(){ 
    var containerLanche = document.getElementById("container-lanche-1")
    var containerLanche2 = document.getElementById("container-lanche-2")

    if(containerLanche.style.display === "none"){
        containerLanche.style.display = "flex";
        containerLanche2.style.display = "flex";
    }
    else {
        containerLanche.style.display = "none";
        containerLanche2.style.display = "none";
    }
});