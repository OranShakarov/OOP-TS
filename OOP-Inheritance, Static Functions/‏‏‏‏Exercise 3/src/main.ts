import Flashlight from "./flashlight.js";

const flashlight1 = new Flashlight("Black", 0.5,10, 4);
flashlight1.display();
flashlight1.on();
flashlight1.off();
flashlight1.changeBatteries();

console.log("------------------------------");


const flashlight2 = new Flashlight("White", 0.2,7, 2);
flashlight2.display();
flashlight2.on();
flashlight2.off();
flashlight2.changeBatteries();
