
const EventEmitter = require("node:events")

const emitter = new EventEmitter()

//response
emitter.on("order-pizza",(size,topping)=>{
    console.log("i've heard it",size,"and the topping is ",topping);
})

emitter.on("order-pizza",()=>{
    console.log("i smell no args");
})


//events emitter
emitter.emit("order-pizza","large","mushroom")