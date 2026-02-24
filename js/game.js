
let levelIndex = Number(localStorage.getItem("level"))||0;
let q=0,score=0,audio=new Audio();
let level=levels[levelIndex];
document.getElementById("levelTitle").innerText=level.title;
const opt=document.getElementById("options"),scoreSpan=document.getElementById("score");
function load(){
 if(q>=level.questions.length){
  localStorage.setItem("score",score);
  localStorage.setItem("level",levelIndex+1);
  location.href="result.html";return;
 }
 let qu=level.questions[q];
 audio.src=qu.audio; audio.play();
 opt.innerHTML="";
 qu.options.forEach(o=>{
  let b=document.createElement("button");
  b.innerText=o;
  b.onclick=()=>{
   if(o===qu.answer){score++;scoreSpan.innerText=score;q++;load();}
   else audio.play();
  };
  opt.appendChild(b);
 });
}
function playAudio(){audio.play();}
load();
