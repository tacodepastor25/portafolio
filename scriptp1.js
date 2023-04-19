function suma(){
    //parseInt(); convierte los valores a enteros
    //parseFloat(); convierte los valores a flotantes
    var num1, resultado;
    num1=prompt("Escribe un numero", "");
    var num2=prompt("Escribe otro numero", "");
    resultado=parseInt(num1) + parseInt(num2);
    alert("La suma es "+resultado);
}

function resta(){
  
    var num1, resultado;
    num1=prompt("Escribe un numero", "");
    var num2=prompt("Escribe otro numero", "");
    resultado=parseInt(num1) - parseInt(num2);
    alert("La resta es "+resultado);
}

function multiplica(){
  
    var num1, resultado;
    num1=prompt("Escribe un numero", "");
    var num2=prompt("Escribe otro numero", "");
    resultado=parseInt(num1) * parseInt(num2);
    alert("La multiplicacion es "+resultado);
}
function dividir(){
  
    var num1, resultado;
    num1=prompt("Escribe un numero", "");
    var num2=prompt("Escribe otro numero", "");
    resultado=parseFloat(num1) / parseFloat(num2);
    alert("La division es "+resultado);
}
function pon(){
  
    var num1, resultado;
    num1=prompt("Escribe un numero", "");
    
    if(parseInt(num1)>=0){
        alert( "Es positivo");
    }else{
        alert("Negativo" );
    }
    
}