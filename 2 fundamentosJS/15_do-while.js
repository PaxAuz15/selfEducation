var contador = 0 

const siLlueve = () => Math.random() < 0.25

do {
    contador ++
} while(!siLlueve())

if(contador === 1){
    console.log(`Fui a ver si llovía ${contador} vez`)
} else {
    console.log(`Fui a ver si llovía ${contador} veces`)
}

