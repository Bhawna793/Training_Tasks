const imgarr=['rock.png','paper.png','scissors.png'];
const score=[0,0]

const st=document.getElementById('startt');
const but=document.querySelector('.buttons');


var myAudio = document.createElement('audio');
myAudio.setAttribute('src', 'click.wav');


let userscore=document.getElementById('us');
let compscore=document.getElementById('cs');
let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');

let usrimg=document.getElementById('usrimg');
let compimg=document.getElementById('compimg');

let result=document.getElementById('resultt');
result.innerHTML='';


img1.addEventListener('click',()=>{
    usrimg.src="rock.png";
    resultfun(0);
    myAudio.play()
})

img2.addEventListener('click',()=>{
    usrimg.src="paper.png";
    resultfun(1);
    myAudio.play()
})
img3.addEventListener('click',()=>{
    usrimg.src="scissors.png";
    resultfun(2);
    myAudio.play()
})

function compchange(){
   const temp=Math.floor(Math.random()*imgarr.length);
    compimg.src=imgarr[temp];
    return temp;
}

function resultfun(index1){
    const index2=compchange();

      if(index1==index2){
          result.innerText="DRAW!";
      }
      else if(index1==0 && index2==1){
          result.innerText="COMPUTER WIN!";
        score[0]++;
      }
      else if(index1==0 && index2==2){
        result.innerText="YOU WIN!";
    score[1]++;
      }
      else if(index1==1 && index2==0){
        result.innerText="YOU WIN!";
    score[1]++;
      }
      else if(index1==2 && index2==0){
        result.innerText="COMPUTER WIN!";
    score[0]++;
      }
      else if(index1==1 && index2==2){
        result.innerText="COMPUTER WIN!";
    score[0]++;
      }
      else if(index1==2 && index2==1){
        result.innerText="YOU WIN";
        score[1]++;
      }

      compscore.innerText=score[0];
      userscore.innerText=score[1];
}

function reset(){
    score[0]=0;
    score[1]=0;
    compscore.innerText=0;
    userscore.innerText=0;
}