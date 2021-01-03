//praticing
saySomething = () =>    {
    console.log('something')
}
continueTry = () =>{
    console.log('keep trying')
}

someValue = (e) => {
    saySomething()
    continueTry()
    
}


//continue praticing
let catchSomething = ''
catchSome = () => {
    catchSomething = document.getElementById('name').value
    document.getElementById('digited').innerHTML = catchSomething 
}