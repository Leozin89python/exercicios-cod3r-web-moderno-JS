
const express = require('express')
const app = express()

app.get( '/prod', (req,res) =>  {
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
})
app.get('/pessoa', (req,res) =>   {
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
})
app.get('/endereco', (req,res) =>   {
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
app.listen(3000, () =>    {
    console.log('listening')
})