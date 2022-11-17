'use strict'

var d = document.getElementById("dibujo");        
var cuadro = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;

/*
while(l < lineas){

	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("darkBlue", 1, yi, xf, 300);
	console.log("Linea " + l);
	l++;
}
*/

for(l = 0;l < lineas; l++){
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("darkBlue", 1, yi, xf, 299);
	console.log("Linea " + l);

	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("darkBlue", 299, yi, xf, 1);
	console.log("Linea " + l);

		yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("darkBlue", 1, yi, xf, 299);
	console.log("Linea " + l);

	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("darkBlue", 299, yi, xf, 1);
	console.log("Linea " + l);

	xi = 10 * l;
	yf = 10 * (l + 1);
	dibujarLinea("darkBlue", xi, 299, 1, yf);
	console.log("Linea " + l);

	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("darkBlue", xi, 1, 299, yf);
	console.log("Linea " + l);


}




	//dibujarLinea("darkGrey", 1, 1, 1, 300);

/*
cuadro.beginPath();   //inicia el dibujo
cuadro.strokeStyle = "red";  						
cuadro.moveTo(150, 150);
cuadro.lineTo(200, 200);						 //FUNCIÓN DE DIBUJO DE LINEA CUALQUIERA EN CANVAS
cuadro.stroke();
cuadro.closePath();   //cierra el dibujo
 */

/*
dibujarLinea("darkBlue", 0, 0, 10, 300);		//Ejemplo de dibujo de malla 3d con movimientos de lineas matemáticas
dibujarLinea("darkBlue", 0, 10, 20, 300);
dibujarLinea("darkBlue", 0, 20, 30, 300);
dibujarLinea("darkBlue", 0, 30, 40, 300);

//dibujarLinea("yellow", 310, 10, 10, 220);
*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

	cuadro.beginPath();   
	cuadro.strokeStyle = color;   
	cuadro.moveTo(xinicial, yinicial);
	cuadro.lineTo(xfinal, yfinal);
	cuadro.stroke();
	cuadro.closePath(); 
}