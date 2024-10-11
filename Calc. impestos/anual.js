let cero_P = 0;
let quince_P = 0.15;
let veinte_P = 0.20;
let veinticindo_P = 0.25;
let valor_1 = 416220;
let valor_2 = 624329;
let valor_3 = 867123.01;
let respuesta2 = document.getElementById('resultado2');


function calcular2(monto2){
    var monto2 = parseFloat(document.getElementById('dinero2').value);
    
    if (isNaN(monto2) || monto2 <= 0) {
        alert('Por favor, ingrese un monto válido.');
        respuesta2.innerHTML = '$0.00';
        return;
    }

    let resultT2 = 0;

    if(monto2 <= valor_1){
        let result_1 = valor_1 * cero_P;
        resultT2 = result_1;
    }
    
    else if(monto2 > valor_1 && monto2 <= valor_2){
        let result_2_1 = valor_1 * cero_P;
        let result_2_2 = (valor_2 - monto2) * quince_P;
        resultT2 = result_2_1 + result_2_2;
    }

    else if(monto2 > valor2 && monto2 <= valor3){
        let result_3_1 = valor_1 * cero_P;
        let result_3_2 = (valor_2 - valor_1) * quince_P;
        let result_3_3 = (valor_3 - monto2) * veinte_P;
        resultT2 = result_3_1 + result_3_2 + result_3_3;
    }

    else{
        let result_4_1 = valor_1 * cero_P;
        let result_4_2 = (valor_2 - valor_1) * quince_P;
        let result_4_3 = (valor_3 - valor_2) * veinte_P;
        let result_4_4 = (monto2 - valor_3) * veinticindo_P;
        resultT2 = result_4_1 + result_4_2 + result_4_3 + result_4_4;
    }
    
    const totalPrecioUsd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(resultT2)

    respuesta2.innerHTML = `${totalPrecioUsd}`;
        
}
