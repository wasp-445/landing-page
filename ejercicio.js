// Asignar benificios
// Variables: Sueldo, Edad
// Condiciones:
// Si el sueldo es menor a 500000 entonces alerta mensaje "Ud. es elegible para el beneficio"
// Si el sueldo es mayor a 500000 y la edad es mayor a 50 entonces alerta mensaje "Ud. es elegible para el beneficio"
// Si el sueldo es mayor a 500000 y la edad es menor a 50 entonces alerta mensaje "Ud. NO es elegible para el beneficio"
// simbolo <>: 3 > 2.

//primer ejemplo de funcion + constantes

//function calcular_beneficios (){
//    const sueldo= "400000"
//    const edad= 34
//
//    if (sueldo < 500000){
//        alert("Ud. es elegible para el beneficio")
//    }
//    else {
//        if (edad > 50){
//            alert("Ud. es elegible para el beneficio")
//        }
//        else {
//            alert("Ud. NO es elegible para el beneficio")
//        }
//    }
//}
//calcular_beneficios()




//segundo ejemplo de funcion (parametrizar)=es dependiente de la variable de entrada

function mostrar_mensaje (mensaje){
    alert (mensaje)
}
function calcular_beneficios (sueldo, edad){
    if (sueldo < 500000){
        mostrar_mensaje("Ud. es elegible para el beneficio")
    }
    else {
        if (edad > 50){
            mostrar_mensaje("Ud. es elegible para el beneficio")
        }
        else {
            mostrar_mensaje("Ud. NO es elegible para el beneficio")
        }
    }
}


$('form').submit((e) => {
    e.preventDefault()

    const sueldo = $("#sueldo").val()
    const edad = $("#edad").val()

//console.log(sueldo,edad)

calcular_beneficios (sueldo, edad)
})

