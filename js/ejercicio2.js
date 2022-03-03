let num ;

alert('Ejercicio 2 - Numeros equivalentes a romanos  ');

num = Number(prompt('Ingrese un numero del 1 al 10'));

switch (num) {

    case 1:

        document.getElementById('caso1').innerHTML='El equivalente a numero romano es: I ';

        break;

     case 2:

        document.getElementById('caso2').innerHTML='El equivalente a numero romano es: II ';

        break;
        
    case 3:

        document.getElementById('caso3').innerHTML='El equivalente a numero romano es: III ';

        break;

    case 4:

        document.getElementById('caso4').innerHTML='El equivalente a numero romano es: IV ';

        break;

    case 5:

        document.getElementById('caso5').innerHTML='El equivalente a numero romano es: V ';

        break;

    case 6:

        document.getElementById('caso6').innerHTML='El equivalente a numero romano es: VI ';

        break;

    case 7:

        document.getElementById('caso7').innerHTML='El equivalente a numero romano es: VII ';

        break;

    case 8:

        document.getElementById('caso8').innerHTML='El equivalente a numero romano es: VIII ';

        break;

    case 9:

        document.getElementById('caso9').innerHTML='El equivalente a numero romano es: IX ';

        break;

    case 10:

        document.getElementById('caso10').innerHTML='El equivalente a numero romano es: X ';

        break;

        default:

        document.getElementById('error').innerHTML='No ha ingresado un numero valido';

}