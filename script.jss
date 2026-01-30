console.log("welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('song/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"I Wanna Be Yours - AM", filePath:"song/1.mp3",coverPath:"song/60.jpg"},
    {songName:"Azul - Guru Randhawa", filePath:"song/2.mp3",coverPath:"song/20.jpg"},
    {songName:"Lover- Taylor Swift Dezire", filePath:"song/4.mp3",coverPath:"song/30.jpg"},
    {songName:"Wildest Dreams- Taylor Swift Dezire", filePath:"song/3.mp3",coverPath:"song/40.jpg"},
    {songName:"Blank Space- Taylor Swift Dezire", filePath:"song/1.mp3",coverPath:"song/50.jpg"},
    {songName:"22-Taylor Swift Dezire", filePath:"song/2.mp3",coverPath:"song/10.jpg"},
    {songName:"August-Taylor Swift Dezire", filePath:"song/5.mp3",coverPath:"song/30.jpg"},
    {songName:"All too well- Taylor Swift Dezire", filePath:"song/4.mp3",coverPath:"song/80.jpg"},
]
songItems.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seeekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value= progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause');
     element.classList.add('fa-play');
     });

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src= songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
     audioElement.src= songs[songIndex].filePath;
     masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
     audioElement.src= songs[songIndex].filePath;
     masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

