console.clear();

// const keysArray = ["a", "s", "d", "f", "g", "h", "j"];
const WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j"];
const BLACK_KEYS = ["w", "e", "t", "y", "u"];
const keys = document.querySelectorAll(".key");

const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
});


document.addEventListener("keydown", (e) => {
    if(e.repeat) return;
    const key = e.key;

    // let audio;
    // both method work fine , for some reason i comment out that
    // switch (key) {
    //     case WHITE_KEYS [0]:
    //         audio = new Audio("sounds/A.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case WHITE_KEYS [1]:
    //         audio = new Audio("sounds/S.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case WHITE_KEYS [2]:
    //         audio = new Audio("sounds/D.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case WHITE_KEYS [3]:
    //         audio = new Audio("sounds/F.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case WHITE_KEYS [4]:
    //         audio = new Audio("sounds/G.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case WHITE_KEYS [5]:
    //         audio = new Audio("sounds/H.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case WHITE_KEYS [6]:
    //         audio = new Audio("sounds/J.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case BLACK_KEYS [0]:
    //         audio = new Audio("sounds/W.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case BLACK_KEYS [1]:
    //         audio = new Audio("sounds/E.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case BLACK_KEYS [2]:
    //         audio = new Audio("sounds/T.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case BLACK_KEYS [3]:
    //         audio = new Audio("sounds/Y.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     case BLACK_KEYS [4]:
    //         audio = new Audio("sounds/U.mp3");
    //         audio.currentTime = 0;
    //         audio.play();
    //         break;
    //     default:
    // }

    // This method was smarter, but unfortunately Task did not accept it 😄
    const whiteKeysIndex = WHITE_KEYS.indexOf(key);
    const blackKeysIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeysIndex > -1) playNote(whiteKeys[whiteKeysIndex]);
    if(blackKeysIndex > -1) playNote(blackKeys[blackKeysIndex]);
});


function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");

    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });
}
