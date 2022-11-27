var pelicula = "Mision Imposible";
var serie = 'Hannibal';
var poema = "\ntestasdjhasd lakjsdlajsdj\nklasdlasjd asdkjaskdj\nlkasjdklasd alsdjlasjdklasjd\n\n";
// operaciones 
var programas = "Mis programas favoritos son:" + pelicula + " y " + serie;
console.log(programas);
// template string
var programas2 = "\n\n    Mis programas favoritos son: ".concat(pelicula, " y ").concat(serie, "\n");
console.log(programas2);
var edad_actual = 23;
var edad_futura = "\n\nEl siguiente mes mi edad sera: ".concat(edad_actual + 1, "\n\n");
console.log(edad_futura);
//metodos
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
