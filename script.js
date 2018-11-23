const getAudio = nr => document.querySelector(`audio[data-key="${nr}"]`);
const getKey = nr => document.querySelector(`.key[data-key="${nr}"]`);


const play = (audio, key) => {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};


const playMusic = event => {
    const code = event.keyCode || event.witch
    console.log(code)
    let audio = undefined;
    let key = undefined;
    switch (code) {
        case 55:
        case 36:
        case 103:
            audio = getAudio(7);
            key = getKey(7);
            play(audio, key);
            break;
        case 56:
        case 38:
        case 104:
            audio = getAudio(8);
            key = getKey(8)
            play(audio, key);
            break;
        case 57:
        case 33:
        case 105:
            audio = getAudio(9);
            key = getKey(9)
            play(audio, key);
            break;
        case 52:
        case 37:
        case 100:
            audio = getAudio(4);
            key = getKey(4);
            play(audio, key);
            break;
        case 53:
        case 12:
        case 101:
            audio = getAudio(5);
            key = getKey(5);
            play(audio, key);
            break;
        case 54:
        case 39:
        case 102:
            audio = getAudio(6);
            key = getKey(6);
            play(audio, key);
            break;
        case 49:
        case 35:
        case 97:
            audio = getAudio(1);
            key = getKey(1);
            play(audio, key);
            break;
        case 50:
        case 40:
        case 98:
            audio = getAudio(2);
            key = getKey(2);
            play(audio, key);
            break;
        case 51:
        case 34:
        case 99:
            audio = getAudio(3);
            key = getKey(3);
            play(audio, key);
            break;
        case 81:
        case 113:
            audio = getAudio('q');
            key = getKey('q');
            play(audio, key);
            break;
        case 87:
        case 119:
        audio = getAudio('w');
        key = getKey('w');
        play(audio, key);
        break;
        case 69:
        audio = getAudio('e');
        key = getKey('e');
        play(audio, key);
        break;
        case 82:
        audio = getAudio('r');
        key = getKey('r');
        play(audio, key);
        break;
        case 65:
        audio = getAudio('a');
        key = getKey('a');
        play(audio, key);
        break;
        case 83:
        audio = getAudio('s');
        key = getKey('s');
        play(audio, key);
        break;
        case 68:
        audio = getAudio('d');
        key = getKey('d');
        play(audio, key);
        break;
        case 70:
        audio = getAudio('f');
        key = getKey('f');
        play(audio, key);
        break;
    }
};

const removeClassPlaying = event => {
    const key = document.querySelector('.playing');
    key.classList.remove('playing');
}

window.addEventListener("keypress", playMusic);
window.addEventListener("keyup", removeClassPlaying)

