function suma(){
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    resul=parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML=resul;
}
function resta(){
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    resul=parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML=resul;
}
function multiplica(){
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    resul=parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML=resul;
}
function dividir(){
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    resul=parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML=resul;
}