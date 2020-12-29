
const express = require('express')
const app = express()

app.use( (req, res, next) =>  {
    console.log('primeira chamada')
    res.json({
        banco:[{
            item: 'cenoura',
            preçokg: 3.65,
            qntd:31
        },{
            item: 'maratá 200ml',
            preço: 1.65,
            qntd:154
        },{
            item: 'Nescau 200ml',
            preço: 1.45,
            qntd:102
        }]
    })
    next()
})
app.use( (req, res, next ) =>   {
    console.log('segunda chamada')
    res.json({
        banco:[{
            nome:'Ana Laura',
            função:'estoquista'
        },{
            nome:'Patricia Soares',
            função:'assistente de logística'
        },{
            nome:'Bete Silveira',
            função:'gerente de estoque'
        }]
    })
    next()
})
app.get('/prod', (req, res) =>   {
    console.log('terceira chamada')
    res.json({
        banco:[{
            cidade:'Salvador',
            uf:'BA'
        },{
            cidade:'São Paulo',
            uf:'SP'
        },{
            cidade:'Rio de Janeiro',
            uf:'RJ'
        }]
    })
})
app.listen(3001, () =>    {
    console.log('listening')
})