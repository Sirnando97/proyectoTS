let pelicula: string = "Mision Imposible"
let serie: string = 'Hannibal'
let poema: string = `
testasdjhasd lakjsdlajsdj
klasdlasjd asdkjaskdj
lkasjdklasd alsdjlasjdklasjd

`

// operaciones 

let programas: string = "Mis programas favoritos son:" + pelicula + " y " + serie
console.log(programas)

// template string

let programas2: string = `

    Mis programas favoritos son: ${pelicula} y ${serie}
`
console.log(programas2)

let edad_actual: number = 23;
let edad_futura: string = `

El siguiente mes mi edad sera: ${edad_actual + 1}

`
console.log(edad_futura)

//metodos

console.log(programas.charAt(0))
console.log(programas.toUpperCase())