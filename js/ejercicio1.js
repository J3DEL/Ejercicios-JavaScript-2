let articulo;
let cantidad, precio, descuento, subtotal, total=Number;

alert("Ejercicio 1- Descuentos según la cantidad")

articulo = prompt('Ingrese el articulo');
cantidad = prompt('Ingrese la cantidad');
precio = prompt('Ingrese el precio unitario');

subtotal = precio*cantidad;

if(cantidad>1 && cantidad<= 100){

    descuento = (subtotal*2)/100;
    document.getElementById('descuento').innerHTML="Su descuento es del 2%"

}else if (cantidad>100.01 && cantidad<= 250){

     descuento = (subtotal*5)/100;
    document.getElementById('descuento').innerHTML="Su descuento es del 5%"

}else if  (cantidad>250.01 && cantidad<= 800){

    descuento = (subtotal*8)/100;
    document.getElementById('descuento').innerHTML="Su descuento es del 8%"

}else if(cantidad>800.01 && cantidad<= 10000){

    descuento = (subtotal*12)/100;
    document.getElementById('descuento').innerHTML="Su descuento es del 12%"

}

total = subtotal - descuento;

document.getElementById('articulo').innerHTML="El producto es: " + articulo;
document.getElementById('cantidad').innerHTML="La cantidad es: " + cantidad;
document.getElementById('subtotal').innerHTML="El subtotal es: " + subtotal + " $";
document.getElementById('descuentos').innerHTML="El descuento es equivalente a: " + descuento + " $";
document.getElementById('total').innerHTML="El total a pagar es: " + total + " $";

