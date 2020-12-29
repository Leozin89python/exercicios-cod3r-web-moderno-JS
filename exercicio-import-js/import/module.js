
copia = new Promise(    function(e){
    e([1,2,3,5,4,7])
})
copia.then(a => a.filter(i => (i >= 3 && i < 7  ) ))
     .then(resp => resp + "||"+ "cópia:" +"["+ resp + "]" )
     .then(valor => console.log(valor))



 treinaPromise = new Promise(   function(e){
     e([1,2,3,4,5,6,4,5,6])
 }) 
 treinaPromise.then(d => d.map(i => i * 2))
              .then(k => k.filter(i => i >=5 && i <10))
              .then(f => f.reduce(i => i))
              .then(resp => console.log(resp))   


binario = new Promise(  function(e){
    e([0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0])
})
binario.then(bin => bin.map(i => i))
       .then(ins => ins.push(0,1,0))
       .then(resp => console.log(resp))
       

module.exports = {copia, treinaPromise, binario}