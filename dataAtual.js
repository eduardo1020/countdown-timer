function retornaDataAtual() {
    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDate()

    switch (month) {
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'March'
            break
        case 3:
            month = 'April'
            break
        case 4:
            month = 'May'
            break
        case 5:
            month = 'June'
            break
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
    }

    let dateCurrently = (`${month} ${day}, ${year}`)

    let date = document.getElementById("date").innerHTML = dateCurrently

    return date
}

retornaDataAtual()