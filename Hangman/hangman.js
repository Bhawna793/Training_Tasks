
const wordList = [
    {
        word: "guitar",
        hint: "Hint: A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "Hint: A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "Hint: A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "Hint: An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "Hint: The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "Hint: A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "Hint: A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "Hint: An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "Hint: The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "Hint: A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "Hint: A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "Hint: A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "Hint: A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "Hint: An exciting or daring experience."
    },
    {
        word: "science",
        hint: "Hint: The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "Hint: A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "Hint: The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "Hint: A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "Hint: A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "Hint: A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "Hint: A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "Hint: A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "Hint: A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "Hint: A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "Hint: A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "Hint: The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "Hint: A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "Hint: A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "Hint: A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "Hint: The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "Hint: A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "Hint: All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "Hint: A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "Hint: A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "Hint: A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "Hint: A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "Hint: A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "Hint: A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "Hint: A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "Hint: A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "Hint: A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "Hint: An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "Hint: A gentle wind."
    },
    {
        word: "oasis",
        hint: "Hint: A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "Hint: The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "Hint: An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "Hint: A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "Hint: A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Hint: Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Hint: Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Hint: Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "Hint: A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "Hint: A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "Hint: To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "Hint: A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Hint: Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "Hint: A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Hint: Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "Hint: To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "Hint: To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "Hint: A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "Hint: The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Hint: Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "Hint: A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Hint: Exceptionally clever, talented, or impressive."
    },
];

let img=document.getElementById('imgg');
let fillwords=document.getElementById("hh");
let hint=document.getElementById("pp");
let playgame=document.getElementById("playgame");
let icg=document.getElementById("icg");
let ic=0;
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
const alpha=document.querySelectorAll(".a");
console.log(alpha)
let start=document.getElementById("pgtext");

let modalimg=document.getElementById("modalimg");
let modalcontent=document.getElementById("modalcontent");

var myAudio = document.createElement('audio');
myAudio.setAttribute('src', 'click.wav');

var Winaudio = document.createElement('audio');
Winaudio.setAttribute('src', 'win.wav');

var Lostaudio = document.createElement('audio');
Lostaudio.setAttribute('src', 'lost.wav');



function pg(){
    word=create_buttons();
}



function create_buttons(){
     imgno=1;
            ic=0;
            img.src="hangman-0.svg";
            icg.innerText='0';
    alpha.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "rgb(127, 29, 219)"; 
    });
   start.innerText="RESET";
    fillwords.innerText='';
    let temp=Math.floor(Math.random()*wordList.length);
   var word=wordList[temp].word.toUpperCase();
   
    let t=wordList[temp].word.length;

    for(let i=0;i<t;i++){
        let but1=document.createElement("button");
  but1.classList.add("b");
 but1.setAttribute("id",`a${i}`);
 
    fillwords.append(but1);
    
    }
     beta=document.querySelectorAll(".b");
console.log(beta);
    hint.classList.remove("hide");
    hint.innerText=wordList[temp].hint;
    return word;
}



let imgno=1;

function Click(alphabet){
    myAudio.play();

    document.getElementById(alphabet).disabled=true;

      const arr=word.split("");
    
      let count=0;

     for(let i=0;i<arr.length;i++){
        if(arr[i]==alphabet){
            count++;
            document.getElementById(`a${i}`).innerText=alphabet;
            document.getElementById(`a${i}`).style.color="green"
        }
        
     }

     if(count>0){
        document.getElementById(alphabet).style.backgroundColor="green"
        let allFilled = true; 
beta.forEach(button => {
    
    if (button.innerText == "") {
        allFilled = false;
    }
});



if (allFilled) { 
 imgno=1;
   img.src="hangman-0.svg";
            ic=0;
            icg.innerText='0';
    alpha.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "rgb(127, 29, 219)"; 
    });
    Winaudio.play();
    modalimg.src = "victory.gif";      
    modalcontent.innerText = "YOU WIN"; 
    modal.style.display = "block";      
}
    }


    else{
        if(imgno==6){
           
            img.src=`hangman-${imgno}.svg`;
            Lostaudio.play();
            modalimg.src="lost.gif";
            modalcontent.innerHTML=`YOU LOST<br><span style="font-size:16px;">Answer:- ${word}</span>`;
             modal.style.display = "block";
            imgno=1;
            ic=0;
            icg.innerText='0';
            img.src="hangman-0.svg";
             alpha.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "rgb(127, 29, 219)"; 
    });
            return;
        }

        ic++;
        icg.innerText=ic;
        document.getElementById(alphabet).style.backgroundColor="red"
        img.src=`hangman-${imgno}.svg`;
        imgno++;
       

    }
      
}


function closemodal() {
  modal.style.display = "none";
}




