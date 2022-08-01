// Events Module
// Node.js hasa a built-in module , called "Events", 
// where you can create , fire and listen for your own events.

//Example 1- Registering for the event to be fired only one time using once.

// Example 2- create an event emitter instance and register a couple of callbacks 

// Example 3- Registering for the event with callback parameters

const EventEmitter = require('events');
const event = new EventEmitter();

event.on('SayMyName', () =>{
    console.log('Your name is Sachin');
})

event.on('SayMyName', () =>
{
    console.log("Your name is Jarves");
})

event.on('checkpage',(sc, msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`);
})
event.emit("checkpage",200, 'ok');