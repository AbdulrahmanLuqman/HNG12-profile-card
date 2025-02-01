



// console.log(hours, minutes, seconds)

setInterval(()=> {
    const date = new Date()
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    document.getElementById('hours').innerHTML = hours
    
    if(minutes < 10) {
        document.getElementById('minutes').innerHTML = '0' + minutes
    } else {
        document.getElementById('minutes').innerHTML = minutes
    }

    if(seconds < 10){
        document.getElementById('seconds').innerHTML = '0' + seconds
    }else{
        document.getElementById('seconds').innerHTML = seconds
    }
}, 1000)

// document.getElementById('hours').innerHTML = hours
// document.getElementById('minutes').innerHTML = minutes
// document.getElementById('seconds').innerHTML = seconds

