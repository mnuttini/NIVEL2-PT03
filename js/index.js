do { var valorUno = parseInt(prompt('ingresa un número'));
}while (isNaN(valorUno))
do { var valorDos = parseInt(prompt('ingresa otro número'));
}while (isNaN(valorDos))

do { var operacionElegida = prompt('elige una operación: sumar, restar, multiplicar o dividir').toLowerCase();
}while (operacionElegida != "sumar" && operacionElegida != "restar" && operacionElegida != "multiplicar" &&
		operacionElegida != "dividir")

function operador (){
	if (operacionElegida == "sumar"){
		res = valorUno+valorDos;
		console.log('el resutlado es igual a ' +res);
	return res;
	}
	else if (operacionElegida == "restar"){
		res = valorUno-valorDos;
		console.log('el resutlado es igual a ' +res);
	return res;
	}
	else if (operacionElegida == "multiplicar"){
		res = valorUno*valorDos;
		console.log('el resutlado es igual a ' +res);
	return res;

	}
	else (operacionElegida == "dividir")
		res = valorUno/valorDos;
		console.log('el resutlado es igual a ' +res);
		return res;
	}
operador();