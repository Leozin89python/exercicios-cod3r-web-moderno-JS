//38)
fimInicio = (i,f) => {
    for(let val = i; val <= f; val++){
        if(val%2 != 0){
            let cont = val
            console.log(cont)
        }
    }
}   //falta um elemento a ser atendido,  exercicio 38)
fimInicio(1,3)
//28)
this.int = [1,4,5,8,7,5,77,9]
array = () =>{
    for(let e=1; e<=this.int.length; e++){
       // console.log(this.int[e])
         if(e%2 == 0){
          console.log('par'+ e)
        }else{
          console.log('impar:'+ e)
        }
    }
}//falta um elemento a ser atendido,  exercicio 28)
array()
//21)
console.log('================')
console.log('|   bem vindo  |')
console.log('|      ao      |')
console.log('|    sistema   |')
console.log('| Nutri-Médica |')
console.log('================')
console.log()
console.log('============================')
console.log('|      escolha uma das     |')
console.log('|       opções abaixo:     |')
console.log('|1-idade abaixo de 10 anos |')
console.log('|2-idade entre 10 e 30 anos|')
console.log('|3-idade entre 30 e 60 anos|')
console.log('|4-idade acima de 60 anos  |')
console.log('============================')

convenio = paciente => {
   console.log()
    
    switch(paciente){
        case 1:
            return 'valor a ser pago: ' + (100 + 80) + 'R$'
            break 
        case 2:
            return 'valor a ser pago: ' + (100 + 50) + 'R$'
            break
        case 3:
            return 'valor a ser pago: ' + (100 + 95) + 'R$'
            break
        case 4:
            return 'valor a ser pago: ' + (100 + 130) + 'R$'
            break
        default:
            return('erro de entrada!')
    }
}
console.log('============================')
console.log('|     relatório de dados:   |')
console.log('============================')
console.log(         convenio(1)     )
console.log()
console.log('=============================')
console.log('|                           |')
console.log('|Agradecemos a preferência  |')
console.log('|                           |')
console.log('|      volte sempre!  ;)    |')
console.log('|                           |')
console.log('=============================')
//29)
this.entre = [1,5,7,8,9,3,7,25,100]
const percorre = () =>{

    let array = this.entre
    let soma = 0
    let cont = 0
    for(let i=0; i < array.length; i++){
        if(array[i]>=1 && array[i]<20){
            soma += array[i]
            console.log('soma=' + soma)
        } 
         
        for(let i = 0; i<array.length; i++){
            if(array[i]>=1 && array[i]<20){
                cont = i
               // console.log(cont)
                console.log(i)
            } if(array[i]>20){
                console.log('')
            }
        }
    }
}//todo atrapalhado

console.log()
percorre()
//22)
console.log()
console.log('=================')
console.log('|   bem vindo   |')
console.log('|      ao       |')
console.log('|    sistema    |')
console.log('|    Bradesco   |')
console.log('=================')
console.log()
console.log('============================')
console.log('|      escolha uma das     |')
console.log('|       opções abaixo:     |')
console.log('|                          |')
console.log('|1-janeiro                 |')
console.log('|2-fevereiro               |')
console.log('|3-março                   |')
console.log('|4-abril                   |')
console.log('|5-maio                    |')
console.log('|6-junho                   |')
console.log('|7-julho                   |')
console.log('|8-agosto                  |')
console.log('|9-setembro                |')
console.log('|10-outubro                |')
console.log('|11-novembro               |')
console.log('|12-dezembro               |')
console.log('============================')
let anuidade = function(anuidade, p){
        console.log()
        
         //janeiro
        let tx = 0/100
        let m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosJaneiro = m
        //fevereiro
        tx = 5/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosFevereiro = m
        //março
        tx = 10/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosMarco = m
        //abril
        tx = 15/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosAbril = m
        //maio
        tx = 20/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosMaio = m
        //junho
        tx = 25/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosJunho = m
        //julho
        tx = 30/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosJulho = m
        //agosto
        tx = 35/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosAgosto = m
        //setembro
        tx = 40/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosSetembro = m
        //outubro
        tx = 45/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosOutubro = m
        //novembro
        tx = 50/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosNovembro = m
        //dezembro
        tx = 55/100
        m = anuidade * Math.pow((1 + (tx/100)),p).toFixed(3)
        let jurosDezembro = m

        
          
    try{

        switch(p){
       
            case 1:
                return ` [anuidade-janeiro] - valor a ser pago:   ${jurosJaneiro}R$`
                break
            case 2:
                return ` [anuidade-fevereiro] - valor a ser pago:   ${jurosFevereiro}R$`
                break
            case 3:
                return ` [anuidade-março] - valor a ser pago:   ${jurosMarco}R$`
                break
            case 4:
                return ` [anuidade-abril] - valor a ser pago:   ${jurosAbril  }R$`
                break
            case 5:
                return ` [anuidade-maio] - valor a ser pago:   ${jurosMaio}R$`
                break
            case 6:
                return ` [anuidade-junho] - valor a ser pago:   ${jurosJunho}R$`
                break
            case 7:
                return ` [anuidade-julho] - valor a ser pago:   ${jurosJulho}R$`
                break
            case 8:
                return ` [anuidade-agosto] - valor a ser pago:   ${jurosAgosto}R$`
                break
            case 9:
                return ` [anuidade-setembro] - valor a ser pago:   ${jurosSetembro}R$`
                break
            case 10:
                return ` [anuidade-outubro ]- valor a ser pago:   ${jurosOutubro }R$`
                 break
            case 11:
                return ` [anuidade-novembro] - valor a ser pago:   ${jurosNovembro }R$`
                  break
            case 12:
                return ` [anuidade-dezembro] - valor a ser pago:   ${jurosDezembro }R$`
                  break
            default:
                return 'erro: 404!'
             
        } 

    }catch(msg){
        return  msg
    }
}
console.log('=============================')
console.log('|    relatório de dados:    |')
console.log('=============================')
console.log(         anuidade(10000,11)    )
console.log()
console.log('=============================')
console.log('|                           |')
console.log('|Agradecemos a preferência  |')
console.log('|                           |')
console.log('|      volte sempre!  ;)    |')
console.log('|                           |')
console.log('=============================')
//1)
calculadora = (a,b) =>{
    console.log()
    let soma = a + b
    let sub  = a - b
    let mut  = a * b
    let div  = a /b  
    return {soma, sub,mut,div}
}
console.log(calculadora(4,2))
//6)
let hp12cCassiu = (c,tx,t) =>   {
        console.log()
        let montante = c * Math.pow((1 + tx),t).toFixed(3)
        let composto = montante
        return  {composto}
}

let hp12cChina = (c,tx,t) =>  {
        console.log()
        let simples = (c * tx * t).toFixed(3)
        return  {simples}
}
console.log(hp12cCassiu(10000,0.05,18))
console.log(hp12cChina(10000,0.05,18))
//8)
console.log()
this.pontos = []

this.pontos.push('10')
this.pontos.push('50')
this.pontos.push('100')
this.pontos.push('50')
this.pontos.splice(0,1)
this.pontos.push('30')
this.pontos.push('9')
/*let mapea = this.pontos.map(e   =>{
    return parseInt(e)
})*/
console.log(this.pontos)

let game = pontos =>{
    pontos = this.pontos
    maior = -999
    menor = 999
    mapea = this.pontos.map(e   =>{
        return parseInt(e)
    })
    
    return 0
    }
console.log(game())
//terminarei depois







/*

LINK EXTERNO

console.log()
let carros = [];

carros[0] = { modelo: 'Ka', preco: 5000 };
carros[1] = { modelo: 'Corsa', preco: 10000 };
carros[2] = { modelo: 'Palio', preco: 15000 };

// Aqui realiza a soma dos preços dos carros acessando a propriedade "preco" dentro do objeto
let total = carros.reduce((total, valor) => total + valor.preco, 0);

// Resultado da soma dos preços dos carros deve ser igual a 30000
console.log( total );


LINK EXTERNO
*/





