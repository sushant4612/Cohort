setInterval(clock,1000)

function clock(){
    console.clear();
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    let second = date.getSeconds();
    if(second < 10){
        second = '0' + second;
    }
    console.log(`${hour}:${minute}:${second}`)
}