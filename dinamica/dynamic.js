this.input = document.querySelector('#put')
this.button = document.getElementById('bt')
this.div = document.querySelector('#resp')
this.body = document.querySelector('body')


let fala = e => {
    this.input = e.target.value
    this.div.innerHTML = this.input
    this.body.appendChild(this.div)
}

let manda = e => {
    this.input = e.target.value
    this.button = alert(this.input)
}
