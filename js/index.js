    let resultado=0;
    let dolar=366.33;
    let euro=273.99;
    let pesoChileno=0.2388;
    let pReal=43.7750;

function convertir(){
    let valore= parseInt(document.getElementById("valor").value);
    // el valor ingresado lo llamamos con document.getElementById
    if(document.getElementById("uno").checked){
        resultado=valore*dolar;
        alert ("EL cambio de peso Argentino a dolar es: $"+resultado.toFixed(2));
    }else if(document.getElementById("dos").checked){
        resultado=valore*euro;
        alert ("El cambio de peso Argentino a euro es: $"+resultado.toFixed(2));
    }else if(document.getElementById("tres").checked){
        resultado=valore*pesoChileno;
        alert ("El cambio de peso Argentino a peso chileno es: $"+resultado.toFixed(2));
    }else if(document.getElementById("cuatro").checked){
        resultado=valore*pReal;
        alert ("El cambio de peso Argentino a Real es: $"+resultado.toFixed(2));
    }
    else{
        alert("Deberas completar los campos que necesites cotizar")
    }
}
