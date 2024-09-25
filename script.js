setInterval(timer, 1000)

function timer(){
    const time = new Date();
    document.getElementById("phTime").innerHTML = time.toLocaleTimeString();
}
