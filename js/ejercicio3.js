let mayores, menores;
let edad;

alert('Ejercicio 3 - Mayores y menores de edad ');

mayores=0;
menores=0;

for (let i=1; i<=20; i++){

    edad = Number(prompt('Ingrese la edad de la persona: ' + i));

    if(edad >=18){

        mayores ++;

    }else {
        
        menores ++;

    }

}

document.getElementById('cantidadMayores').innerHTML='La cantidad de personas mayores es: ' + mayores;
document.getElementById('cantidadMenores').innerHTML='La cantidad de personas menores es: ' + menores;