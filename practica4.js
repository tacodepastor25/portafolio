function rfc(){
    var nom=document.getElementById("nombre").value;
    var apellidop=document.getElementById("ap").value;
    var apellidom=document.getElementById("am").value;
    var naca=document.getElementById("year").value;
    var nacm=document.getElementById("mes").value;
    var nacd=document.getElementById("dia").value;
    var rfc1=apellidop.charAt(0)+apellidop.charAt(1)+apellidom.charAt(0)+nom.charAt(0)+naca.charAt(2)+naca.charAt(3)+
    nacm.charAt(0)+nacm.charAt(1)+nacd.charAt(0)+nacd.charAt(1);

    document.getElementById("resultado").value=rfc1;
}