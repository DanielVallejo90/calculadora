window.addEventListener('load', ()=>{     //Escuchamos cunando se carga el documento
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons)
    keypadButtonsArray.forEach((button) =>{

        // A cada boton le agregamos un listener
        button.addEventListener('click', ()=>{
            calculadora(button, display);
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break;
        case '=':
            calcular(display)
            break;
    
        default:
            actualizar(display, button)
            break;
    }
}
function calcular(display) {
    display.innerHTML = eval(display.innerHTML) // Coge el string y lo resuelve
}
function actualizar(display, button){
    if(display.innerHTML == 0 ){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}
function borrar(display) {
    display.innerHTML = 0;
}