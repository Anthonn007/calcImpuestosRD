let ceroP = 0;
let quinceP = 0.15;
let veinteP = 0.20;
let veinticindoP = 0.25;
let valor1 = 34685;
let valor2 = 52027.42;
let valor3 = 72260.25;
let respuesta = document.getElementById('resultado');

function calcular(monto){
    var monto = parseFloat(document.getElementById('dinero').value);

    if (isNaN(monto) || monto <= 0) {
        alert('Por favor, ingrese un monto válido.');
        respuesta.innerHTML = '$0.00';
        return;
    }

    let resultT = 0;

    if(monto <= valor1){
        let result1 = valor1 * ceroP;
        resultT = result1;
    }
        
    else if(monto > valor1 && monto <= valor2){
        let result2_1 = valor1 * ceroP;
        let result2_2 = (valor2 - monto) * quinceP;
        resultT = result2_1 + result2_2;
    }
    
    else if(monto > valor2 && monto <= valor3){
        let result3_1 = valor1 * ceroP;
        let result3_2 = (valor2 - valor1) * quinceP;
        let result3_3 = (valor3 - monto) * veinteP;
        resultT = result3_1 + result3_2 + result3_3;
    }
    
    else{
        let result4_1 = valor1 * ceroP;
        let result4_2 = (valor2 - valor1) * quinceP;
        let result4_3 = (valor3 - valor2) * veinteP;
        let result4_4 = (monto - valor3) * veinticindoP;
        resultT = result4_1 + result4_2 + result4_3 + result4_4;
    }
        
    const totalPrecioUsd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(resultT)
    
    respuesta.innerHTML = `${totalPrecioUsd}`;
        
}
