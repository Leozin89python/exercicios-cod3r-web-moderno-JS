$(document).ready(function(){
    var buton   = $('.buton2')
    var dropDown = $('.sublinha1')
        buton.on('click', function(e){
            dropDown.stop(true,true).slideToggle()
            e.stopPropagation() 
     })
})
$(document).ready(function(){
    var buton  = $('.buton3')
    var dropDown = $('.sublinha2')
        buton.on('click',function(e){
            dropDown.stop(true,true).slideToggle()
            e.stopPropagation()
        })
})
$(document).ready(function(){
    var buton = $('.buton4')
    var dropDown = $('.sublinha3')
        buton.on('click', function(e){
            dropDown.stop(true,true).slideToggle()
            e.stopPropagation()
        })
})