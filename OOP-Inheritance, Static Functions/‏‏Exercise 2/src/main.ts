import Speaker from "./speaker.js";

const speaker1 = new Speaker("Black", 100);
speaker1.play();
speaker1.pause();
speaker1.sound();
speaker1.display();

console.log("----------------------------------");


const speaker2 = new Speaker("White", 75);
speaker2.play();
speaker2.pause();
speaker2.sound();
speaker2.display();
