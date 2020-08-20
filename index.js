const soap = require('soap')

const url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'


soap.createClient(url, (err, client) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('ok')
        client.consultaCEP({
            cep: '96200279'
        }, (err, res) => {
            if(err) {
                console.log(err)
            }
            else {
                console.log(res)
            }
        })
    }
})


