let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open = false;

 let order = (time, work) => {
    return new Promise( (resolve, reject) => {
        if(is_shop_open){
            setTimeout( () => {
                resolve(work());
            },time);
        }else {
            reject(console.log("our shop is closed"))
        }
    });
 };

 order( 2000, () => console.log(`${stocks.Fruits[0]} was selected`))
 .then( () => {
    return order(0, () => console.log("Production has started"));
 })
 .then( () => {
    return order(2000, () => console.log("Fruits where chooped"));
 })
 .then( () => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)) ;
 })
 .then( () => {
    return order(1000, () => console.log("Machine was started"));
 })
 .then( () => {
    return order(2000, () => console.log(`${stocks.holder[0]} was slected`));
 })
 .then( () => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added at the top`));
 })
 .then( () => {
    return order(2000, () => console.log('Serve the tasty ice cream'));
 })
 .catch( () =>{
    console.log("Customer left");
 })