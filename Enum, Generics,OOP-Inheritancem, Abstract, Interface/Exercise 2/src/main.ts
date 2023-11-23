import Drum from "./drum.js";
import GrandPiano from "./grandPiano.js";
import Guitar from "./guitar.js";
import Piano from "./piano.js";


const guitar = new Guitar("G35", "China", "Brown", 6);
guitar.display();
guitar.makeSound();
guitar.test();
guitar.tune();

console.log("---------------------------------");

const drum = new Drum("Miriam Drum", "Aztrick", "Black", 9);
drum.display();
drum.makeSound();
drum.test();
drum.tune();
console.log("---------------------------------");

const piano = new Piano("M65", "Japan", "White", 45);
piano.display();
piano.makeSound();
piano.test();
piano.tune();
console.log("---------------------------------");

const grandPiano = new GrandPiano("Pesanter Kanaf", "Parlament", "Black", 65, 30);
grandPiano.display();
grandPiano.makeSound();
