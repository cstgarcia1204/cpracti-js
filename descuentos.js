
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPriceButtonDiscount(){
    document.getElementById("resultDiscount").style.display = "block";
    document.getElementById("imgLula").style.display = "block";
    const valueOriginPrice = parseFloat(document.getElementById("inputPrice").value);
    const valueDiscount = parseFloat(document.getElementById("inputDiscount").value);
    const priceWithDiscount= calcularPrecioConDescuento(valueOriginPrice, valueDiscount);
    
    if(valueOriginPrice > 0 && valueDiscount > 0){
        console.log({
            valueOriginPrice,
            valueDiscount,
            priceWithDiscount
        });
        let writeResult = document.getElementById("resultDiscount").innerHTML =
        `El precio a pagar es de : $${priceWithDiscount.toFixed(2)} pesitos mx`;
        return writeResult;
    }else {
        let writeOtherREsult = document.getElementById("resultDiscount").innerHTML =
        `Los valores que proporcionaste no son válidos. 
        <br>Recuerda que solo admite números positivos`;
        return writeOtherREsult;
    }
}
