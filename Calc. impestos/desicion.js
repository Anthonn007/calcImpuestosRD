let respuesta2_1 = document.getElementById('resultado');
let respuesta2_2 = document.getElementById('resultado2');

function abrir(){
    document.getElementById('mensual').style.display = 'inline-block';
}

function cerrar(){
    document.getElementById('mensual').style.display = 'none';
    if(document.getElementById('mensual').style.display == 'none'){
        respuesta2_1.innerHTML = '$0.00';
    }
}

function abrir2(){
    document.getElementById('anual').style.display = 'inline-block';
}

function cerrar2(){
    document.getElementById('anual').style.display = 'none';
    if(document.getElementById('anual').style.display == 'none'){
        respuesta2_2.innerHTML = '$0.00';
    }
}

function vaciar(control){
    control.value = '';
}

// function abrirCerrar(){
//     let info = document.getElementById('info');
//     if(info.style.display == 'block'){
//         info.style.display = 'none';
//     }

//     else{
//         info.style.display = 'block';
//     }
// }