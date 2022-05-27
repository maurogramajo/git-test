/*
 * Programa de ordenamiento por burbujeo
 */

var lista = [];

//Funcion que retorna una lista de numeros random de longitud length pasada como parametro
function getRandList(length) {
	var lista = [];

	for(var i = 0; i < length; i++) {
		lista[i] = Math.round( Math.random()*100);
	}

	return lista;
}

function ordenarLista(lista) {
	for(var i = 0; i < lista.length; i++) {
		for(var j = i; j < lista.length; j++) {
			var aux;
			if(lista[i] > lista[j]) {
				aux = lista[i];
				lista[i] = lista[j];
				lista[j] = aux;
			}
		}
	}
}

//Algoritmo de prueba de funcion ordenarLista
lista = getRandList(10);
console.info('La lista a ordenar es: ',lista);
ordenarLista(lista);
console.info('La lista ordenada es: ', lista);
