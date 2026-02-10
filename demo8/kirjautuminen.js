document.addEventListener("DOMContentLoaded", onkoKirjautunut);
function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none"
        document.getElementById("kirjaudu_ulos_nappi")
    }
    else{
        document.getElementById("kirjaudu_ulos_nappi").style.display ="none"
    }

}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut", "kylla")
}
function kirjauduUlos(){
    localStorage.clear("kirjautunut", "kylla")
    localStorage.clear("nimi", document.getElementById("nimi").value)
}