// Events library imported and Created an object.
import EventsEmitter from "events";

// myEmitter object created with EventsEmitter class.
const myEmitter = new EventsEmitter();

// In on method we write event and callback funtion for a particular event.
myEmitter.on("event", () => {console.log("Event happened")});
myEmitter.on("Waterfall", () => {console.log("Waterfall Event happened")});

// Emits event when event passed
myEmitter.emit("event");
myEmitter.emit("Waterfall");