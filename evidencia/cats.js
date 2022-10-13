const needle = require ('needle')
const colors = require ('colors')

const endpoint = "https://cat-fact.herokuapp.com/facts"



const f = async () =>{
    try {
        const response = await needle('get',endpoint)
        response.body.forEach(cat =>{
            console.log(cat.text)
            console.log('-------------------')
        })
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
