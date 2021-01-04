/** algo deu errado! */

cardPeople = (name,lastName,email,height,sex) =>{

    var tb        = document.getElementById('tdPeople')
    var countRows = tb.rows.lenght
    var line = tb.insertRows(countRows)

    var cellCode = line.insertCell(0)
    var cellName = line.insertCell(1)
    var cellLastName = line.insertCell(2)
    var cellEmail = line.insertCell(3)
    var cellHeight = line.insertCell(4)
    var cellSex = line.insertCell(5)

    cellCode .innerHTML     = countRows
    cellName.innerHTML      = name
    cellLastName.innerHTML  = lastName
    cellEmail.innerHTML     = email
    cellHeight.innerHTML    = height
    cellSex.innerHTML       = sex 
}




function callPeople(name,lastName,email,height,sex) {
    
    var tb        = document.getElementById('tdPeople')
    var countRows = tb.rows.lenght
    var line = tb.insertRows(countRows)

    var cellCode = line.insertCell(0)
    var cellName = line.insertCell(1)
    var cellLastName = line.insertCell(2)
    var cellEmail = line.insertCell(3)
    var cellHeight = line.insertCell(4)
    var cellSex = line.insertCell(5)

    cellCode .innerHTML     = countRows
    cellName.innerHTML      = name
    cellLastName.innerHTML  = lastName
    cellEmail.innerHTML     = email
    cellHeight.innerHTML    = height
    cellSex.innerHTML       = sex 

}


/** algo deu errado! */