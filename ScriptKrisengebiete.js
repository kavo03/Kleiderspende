window.onload = function(){
    const Daten = new URLSearchParams(window.location.search);
    const region = Daten.get("region");

    if (region === "1"){
        document.getElementById("Region1").style.display = "block";
    }else if(region === "2"){
        document.getElementById("Region2").style.display = "block";
    }else if(region === "3"){
        document.getElementById("Region3").style.display = "block";
    }
}