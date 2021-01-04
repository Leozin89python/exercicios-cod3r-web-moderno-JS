const servidor = require('express')
const app = servidor()

app.get('/',    (req,res,next)  =>{
    res.send({
        'nome': 'Leonardo Moura Leitão',
        'cargo':'instrutor de programação ',
        'status_ensino':'100%',
        'aprendizado':'90%'
    })
})

app.listen(3000, (req,res,next) =>{
    backend()
})

backend = () =>{

    app.get('/site-leo',    (req,res,next)  =>{

        res.send([{
            'nome': 'Leonardo',
            'idade':33
        },{
            'nome': 'Leone',
            'idade':27
        },{
            'nome': 'Elen',
            'idade':65
        }])
    })
    
}
