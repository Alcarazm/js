const axios = require ('axios')
const colors = require ('colors')

const endpoint = "http://universities.hipolabs.com/search?country=Colombia"

let config= {
    method: 'get',
    url: endpoint

}

const f = async ()=>{
    try{
        let response = await axios(config)
        response.body.forEach(pais =>{
            console.log(pais.name.common)
        })
    }catch (error){
        fallo(error)
    }
}

const exito = (response)=>{
    const univercidades = response
    univercidades.forEach(element => {
        console.log(`univercidad: ${element.name}`)
        console.log('---------------------------'.bgBlue)        
    });
}
const fallo = (status)=>{
    console.log(status)
}

f()