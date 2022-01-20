const player_box = document.querySelector(".player_box"),
musicartist = player_box.querySelector(".player_box_name .artist"),
mainaudio = player_box.querySelector("#main_audio"),
musictitle = player_box.querySelector(".player_box_title .title"),
playbtn = player_box.querySelector(".plays"),
prevbtn = player_box.querySelector(".return"),
nextbtn = player_box.querySelector(".next"),
playicon = player_box.querySelector(".plays i"),
indicator = player_box.querySelector(".indicator"),
information = player_box.querySelector(".player_box_information"),
progress_bar = player_box.querySelector(".indicator_progress"),
playtime = player_box.querySelector(".timer span");
const musicimg = document.querySelector(".img_block");
let musicindex = 1;
let allMusic = [
    {
        title:"灰色の絵の具で描くなら",
        artist:"蒲鉾さちこ",
        img:"music_img1",
        src:"audio1"
    },
    {
        title:"おきらくシュガー",
        artist:"まんぼう二等兵",
        img:"music_img2",
        src:"audio2"
    },
    {
        title:"Quest",
        artist:"roku",
        img:"music_img3",
        src:"audio3"
    },
    {
        title:"魔法の薬、あります",
        artist:"キュス",
        img:"music_img4",
        src:"audio4"
    },
    {
        title:"消えた絵画",
        artist:"MATSU",
        img:"music_img5",
        src:"audio5"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    totaltimedata();
    loadmusic(musicindex);
})

function loadmusic (indexnumber) {
    musicartist.innerHTML = allMusic[indexnumber - 1].artist;
    musictitle.innerHTML = allMusic[indexnumber - 1].title;
    musicimg.src = `../img/${allMusic[indexnumber - 1].img}.png`;
    mainaudio.src = `../audio/${allMusic[indexnumber - 1].src}.mp3`;
}

function timedata(){
    mainaudio.addEventListener("timeupdate", (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        let progressWidth = (currentTime / duration) * 100;
        progress_bar.style.width = `${progressWidth}%`;
    
        let curerentMin = Math.floor(currentTime / 60);
        let curerentSec = Math.floor(currentTime % 60);
        if(curerentSec < 10){
            curerentSec = `0${curerentSec}`;
        }
        playtime.textContent = `${curerentMin}:${curerentSec}`;
    });
}

function totaltimedata (){
    mainaudio.addEventListener("durationchange" , () => {
        let audioDuration = mainaudio.duration;
        let totalMis = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        playtime.textContent = `${totalMis}:${totalSec}`;
    });
}

function playMusic() {
    if(musicimg.classList.contains("roseReset")){
        musicimg.classList.remove("roseReset");
    }
    player_box.classList.add("paused");
    playicon.setAttribute("class","fas fa-pause");
    musicimg.classList.remove("rosestop");
    musicimg.classList.add("rote");
    mainaudio.play();
    timedata();
};

function pausedMusic() {
    if(musicimg.classList.contains("roseReset")){
        musicimg.classList.remove("roseReset");
    }
    player_box.classList.remove("paused");
    information.classList.remove("leftActive","rightActive");
    playicon.setAttribute("class","fas fa-play");
    musicimg.classList.remove("rote");
    musicimg.classList.add("rosestop");
    mainaudio.pause();
};

function nextMusic() {
    musicindex++;
    musicindex > allMusic.length ? musicindex = 1 : musicindex = musicindex;
    loadmusic(musicindex);
    progress_bar.style.width = "100%";
    player_box.classList.remove("paused");
    musicimg.classList.remove("rote");
    musicimg.classList.remove("rosestop");
    musicimg.classList.add("roseReset");
    playicon.setAttribute("class","fas fa-play");
}

function prevMusic() {
    musicindex--;
    musicindex < 1 ? musicindex = allMusic.length: musicindex = musicindex;
    loadmusic(musicindex);
    progress_bar.style.width = "100%";
    player_box.classList.remove("paused");
    musicimg.classList.remove("rote");
    musicimg.classList.remove("rosestop");
    musicimg.classList.add("roseReset");
    playicon.setAttribute("class","fas fa-play");
}

playbtn.addEventListener("click", () => {
    let musicpaused = player_box.classList.contains("paused");
    musicpaused ? pausedMusic() : playMusic();
});

prevbtn.addEventListener("click", () => {
    prevMusic();
});

nextbtn.addEventListener("click", () => {
    nextMusic();
});

indicator.addEventListener("click", (e) => {
    let progressWidthval = indicator.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainaudio.duration;
    mainaudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
});

mainaudio.addEventListener("ended", () => {
    musicindex++;
    musicindex > allMusic.length ? musicindex = 1 : musicindex = musicindex;
    loadmusic(musicindex);
    mainaudio.play();
});

import portfolio_partsList from "./portfolio_parts.js";
portfolio_partsList();