function sayHello(){
    console.log("Hello..")
}

/**
*---Another way to create a function & use it inside setTimeout function
const sayHello2 = ()=>{
    console.log("Hello..")
}*/

setTimeout(sayHello,10000)

// Call back function in an asynchronous way

const loadPokemon = (id,cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data=>{
            cb(data)
        })
}

loadPokemon(56,(pokemon)=>{
    console.log(pokemon )
})
