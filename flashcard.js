let wordCount=-1;

async function startTest(){
    document.getElementById("flashcard-content").style.display="grid";
    changeWord();
    document.getElementById("startFlashcardTest").style.display="none";
}

async function changeWord(){
    console.log("inside the fn");
    const card=document.querySelector("#card1");
    const back_card=document.querySelector("#back_card");
    document.getElementById("back_card").style.display="none";
    const t1=new TimelineMax();
    t1.fromTo(card,1,{left: "10%",opacity:"1"},{left:"80%",opacity:"0"});
    let newObj=await word();
    if(newObj===-1){
        return;
    }
    document.getElementById("cardHeader").innerHTML=newObj["queNo"];
    document.getElementById("cardTitle").innerHTML=newObj["word"];
    document.getElementById("cardText").innerHTML=newObj["title"];
    document.getElementById("flashcardOptions").innerHTML=newObj["option"];
    t1.fromTo(card,1,{left: "80%",opacity:"0"},{left:"10%",opacity:"1"})
    fadeout(newObj);
}



async function word(){
    let words=["Happy","Sad","Day"];
    let newObj={};
    wordCount++;
    if(wordCount>=words.length){
        return -1;
    }
    let queNo=document.getElementById("cardHeader").innerHTML;
    let que=document.getElementById("cardText").innerHTML;
    let options=document.getElementById("flashcardOptions").innerHTML;
    console.log(que);
    queNumber=wordCount+1;
    newObj["queNo"]=queNo.substr(0,queNo.length-1)+queNumber;
    newObj["title"]=que;
    newObj["word"]=words[wordCount];
    newObj["option"]=options;
    return newObj;
}

async function fadeout(newObj){
    console.log(newObj);
}

async function flipCard(){
    const t1=new TimelineMax();
    const front_card=document.querySelector("#front_card");
    const card1=document.querySelector("#card1");
    const card2=document.querySelector("#card2");
    const back_card=document.querySelector("#back_card");
    document.getElementById("front_card").style.display="none";
    t1.fromTo(front_card,1,{transition: "transform",transform:"rotateY(0deg)",display:"grid",opacity:1},{transition: "transform",transform:"rotateY(180deg)",display:"none",opacity:0})
    .fromTo(card1,0,{display:"flex",opacity:1},{display:"none",opacity:0})
    .fromTo(card2,0,{display:"none",opacity:0},{display:"flex",opacity:1})
    .fromTo(back_card,1,{display:"none",opacity:0},{display:"grid",opacity:1});
    document.getElementById("card2").style.display="none";
    // document.getElementById("word").innerHTML;
}

async function changeWordBack(){
    const card=document.querySelector("#card1");
    const back_card=document.querySelector("#back_card");
    document.getElementById("back_card").style.display="none";
    document.getElementById("card2").style.display="none";
    document.getElementById("card1").style.display="grid";
    document.getElementById("front_card").style.display="grid";
    document.getElementById("front_card").style.opacity=1;
    document.getElementById("front_card").style.transition="transform";
    document.getElementById("front_card").style.transform="rotateY(0deg)";
    const t1=new TimelineMax();
    t1.fromTo(card,1,{left: "10%",opacity:"1"},{left:"80%",opacity:"0"});
    let newObj=await word();
    if(newObj===-1){
        return;
    }
    document.getElementById("cardTitle").innerHTML=newObj["word"];
    document.getElementById("cardText").innerHTML=newObj["title"];
    document.getElementById("flashcardOptions").innerHTML=newObj["option"];
    t1.fromTo(card,1,{left: "80%",opacity:"0"},{left:"10%",opacity:"1"})
    fadeout(newObj);
    
}