function temperature(){
    var c= document.getElementById("c").value;
    var f=(c*9/5)+32;
    document.getElementById("f").value=f
}

function weight(){
    var kg= document.getElementById("k").value;
    var p=kg*2.2
    document.getElementById("p").value=p
}

function distance(){
    var km=document.getElementById("km").value;
    var m=km*0.62137
    document.getElementById("mi").value=m
}


function welcome(){
    var name=prompt("Enter your name")
    if(name==="ann" || "Ann" || "ann maria sunny"){
        alert("If there was a chance, i still miss you")
    }
    else{
        alert("Welcome "+name)
    }
}
