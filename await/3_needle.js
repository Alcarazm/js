const needle = require ('needle')
const colors = require ('colors')

const endpoint = "https://pokeapi.co/api/v2/type"



const f = async () =>{
    try {
        const response = await needle('get',endpoint)
        exito(response.body)
    } catch (error) {
        fallo(error)
    }
}

const exito = (response)=>{
    const tipos = response.results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('---------------------------'.bgBlue)        
    });
}
const fallo = (status)=>{
    console.log(status)
}
f()
