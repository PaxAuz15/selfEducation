var edad = 22

// edad = edad + 1 //23

edad += 1 // incremento de mas 1 //23

var pesokg = 75

// pesokg  = pesokg - 2 //73

pesokg -= 2 // disminucion de 2 // 73

var tostada = 2

// pesokg = pesokg + tostada
pesokg += tostada

var jugarFutbol = 3

// pesokg = pesokg - jugarFutbol
pesokg -= jugarFutbol

var precioClub = 1.45

var compra = precioClub * 3

var precioVino = 200.3

var total = precioVino * 3

//FIXME: En ocasiones, las operaciones con decimales no tienen un resultado perfecto en JS. 
//       Se debe solucionar

// var total = precioVino *100 *3 /100

var total = Math.round(precioVino * 100 * 3)/100 //Redondea los decimales para dividir al 100

var totalStr = total.toFixed(2) //Genera la cantidad de decimales que indiquemos. Es un str

var total2 = parseFloat(totalStr) //Se convierte el str anterior a float
