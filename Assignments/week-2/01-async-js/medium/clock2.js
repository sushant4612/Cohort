setInterval(clock,1000)

function clock(){
    console.clear();
    const date = new Date();
    let hour = date.getHours();
    const minute = date.getMinutes();
    let second = date.getSeconds();
    let counter =  (hour < 12) ? 'AM' : 'PM';
    hour = (hour % 12);
    hour = (hour < 10) ? '0' + hour : hour;
    second = (second < 10) ? '0' + second : second;
    console.log(`${hour}:${minute}:${second}  ${counter}`)
}