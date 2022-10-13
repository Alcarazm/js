const axios = require ('axios')
const colors = require ('colors')

const endpoint = "https://pokeapi.co/api/v2/type"

let config= {
    method: 'get',
    url: endpoint

}

const f = async ()=>{
    try{
        let response = await axios(config)
        exito(response.data)
    }catch (error){
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