let saldo = 1000;

function cajeroSwitch(opcion, monto){

 switch(opcion){

    case "Consultar":
        console.log("Saldo actual: $", saldo);
        break;
    case "Depositar":
        if(monto > 0){

            saldo += monto;
            console.log("Deposito exitoso. Nuevo saldo:", saldo);
        }else{
            console.log("Monto invalido");
        }
        break;
    case "Retirar":
        if(monto > 0 && monto <= saldo){
            saldo -= monto;
        console.log("Tu monto es de:");
        }
 }

}
cajero("Consultar");
cajero("Depositar", 500);
cajero("retirar");