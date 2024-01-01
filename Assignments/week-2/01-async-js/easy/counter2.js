function counter(){
    i++;
    console.log(i);
    setTimeout(counter,1000);
}

let i = 0;
counter();