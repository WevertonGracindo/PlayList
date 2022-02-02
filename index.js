let audio = document.getElementById("songs")
let button = document.getElementById("play")
let images = document.getElementById("images")
let play = document.getElementById("play")
let nameSong = document.getElementById("namesong")
let nameSinger = document.getElementById("namesinger")
let loading = document.getElementById("loading")
let volume = document.getElementById("volume")
let lastButton = document.getElementById("lastbutton")

var music = [" i don't care", "feel it still", "sunflower", "little talks",
    "crazy", "seven nation army", "smooth criminal", "jump around", "nuthin' but a g thang",
    "a lot"
]

var group = ["ed sheeran & justin bieber", "portugal. the man", "post malone & swae lee",
    "of monsters and men", "gnarls barkley", "the white stripes", "alien ant farm",
    "house of pain", "dr. dre & snoop dogg", "21 savage"
]

var files = ["./ogg/edSheeran.ogg", "./ogg/portugal.ogg",
    "./ogg/postMalone.ogg", "./ogg/ofMonsters.ogg", "./ogg/gnarls.ogg",
    "./ogg/theWhiteStripes.ogg", "./ogg/alienAntFarm.ogg",
    "./ogg/houseOfPain.ogg", "./ogg/snoopDogg.ogg", "./ogg/21Savage.ogg"
];

var posters = ["./img/edSheeran.jpg", "./img/portugal.jpg", "./img/postMalone.jpg",
    "./img/ofMonsters.jpg", "./img/gnarls.jpg", "./img/theWhiteStripes.jpg",
    "./img/alienAntFarm.jpg", "./img/houseOfPain.jpg", "./img/snoopDogg.jpg",
    "./img/21Savage.jpg",
]



// TEMPO DO AUDIO
function formatTime(time) {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`
    }

    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`
}
setInterval(() => {
    loading.value = audio.currentTime;
    atualTime.innerHTML = formatTime(audio.currentTime);
    if (Math.floor(audio.currentTime) == Math.floor(loading.max)) {
        forward();
    }
}, 500);

audio.onloadedmetadata = function () {
    setTimeout(() => {
        loading.max = audio.duration
        songTime.innerHTML = formatTime(audio.duration)
    }, 300);
}

loading.addEventListener("change", () => {
    audio.currentTime = loading.value;
});
//FIM TEMPO DO AUDIO


//FUNÇAO DOS BOTOES 
let i = 0;

function pause() {
    if (audio.paused) {
        audio.play();
        lastButton.src = "./img/play-button-pngrepo-com.png";

    } else {
        audio.pause();
        lastButton.src = "./img/pause-button-pngrepo-com.png";

    }
}

function back() {
    if (i === 0) {
        i = 9
    } else {
        i--
    }
    audio.src = files[i];
    images.src = posters[i];
    nameSong.innerHTML = music[i];
    nameSinger.innerHTML = group[i];
    lastButton.src = "./img/play-button-pngrepo-com.png";

}

function forward() {
    if (i === files.length - 1) {
        i = 0
    } else {
        i++
    }
    audio.src = files[i];
    images.src = posters[i];
    nameSong.innerHTML = music[i];
    nameSinger.innerHTML = group[i];
    lastButton.src = "./img/play-button-pngrepo-com.png";
}
//FIM FUNÇÃO DOS BOTOES 


// VOLUME 
function mute() {
    if (audio.volume == 0.0 ){
    audio.volume = 0.3;
    } else {audio.volume = 0.0 }
}

volume.addEventListener('change', function (e) {
    audio.volume = e.currentTarget.value / 100;
})
//FIM VOLUME

//PROGRESSO DO AUDIO
document.onclick = () => range.max = audio.duration
range.onchange = () => audio.currentTime = range.value
audio.ontimeupdate = () => range.value = audio.currentTime