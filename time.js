function lbToKg() {
    let lb = Number(document.querySelector("#input").value);
    let kg = lb / 2.2046;
    document.querySelector("#result").innerHTML = kg.toFixed(4) + "kg";
    document.querySelector("#input").value = "";

}


function kgToLb() {
    let kg = Number(document.querySelector("#input").value);
    let lb = kg / 0.454;
    document.querySelector("#result").innerHTML = lb.toFixed(5) + "lb";
    document.querySelector("#input").value = "";
}