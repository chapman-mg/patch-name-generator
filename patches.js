let artist = [
    'Tangerine Dream',
    'Kraftwerk',
    'Vangelis',

]
let instrument = [
    'vocoder',
    'blues',
    'horns',
    'swell',
    'vox',
    'voices',
    'strings',
    'octaves',
    'fifth',
    'orchestra',
    'pad',
    'pulse',
    'saw',
    'space',
    'piano',
    'harpsichord',
    'clav',
    'bell',
    'organ',
    'guitar',
    'brass',
    'soundtrack',
    'drums',
    'noise',
    'sitar',
    'horn',
    'split',
    'stack',
    'lead',
    'rhythm',
    'arpeggiator',
    'transients',
    'layers',
    'sync',
    'vowels',
    'rhodes',
    'e-piano',
    'wurli',
    'flute',
    'glide',
    'legato',
    'dreams',

]

let suffix = [
    'layers',
    'stack',
    'split',
    'drone',
    'bass',
    'pad',
    'lead',
    'delay',
    'blips',
    'sequence',
    
]

let genre = [
    'atmospheric',
    'acid',
    'techno',
    'alien',
    'industrial',
    'house',
    'trance',
    'psy',
    'drone',
    'ambient',
    'synthwave',
    'glitch',
    'electro',
    'folk',
    'christmas',
    'Kraftwerk',
    'Vangelis',
    'EDM',
    'S&H',
    'Carpenter',
    'tron',
    'funk',
    'Moroder',

]
let adjective = [
    'ambient',
    'aggro',
    'modern',
    'sad',
    'big',
    'chorused',
    'interstellar',
    'cheesy',
    'haunting',
    'mellow',
    'thick',
    'reedy',
    'bouncy',
    'delayed',
    'CS-80',
    'oberheim',
    'prophet',
    'modular',
    'moog',
    'roland',
    'juno',
    'jupiter',
    'fat',
    'soaring',
    'tearing',
    'ripping',
    '80s',
    '70s',
    '90s',
    'analog',
    'digital',
    'FM',
    'sync',
    'metallic',
    'chaotic',
    'bowed',
    'plucked',
    'electric',
    'staccato',
    'muted',
    'long',
    'short',
    'detuned',
    'clean',
    'glitchy',
    'mysterious',
    'forlorn',
    'ethereal',
    'noise',
    'jet',
    '101',
    'moog',
    'power',
    'atmosphere',
    'majestic',
    'vintage',
    'slow',
    'brass',
    'phat',
    'warm',
    'fuzzy',
    'rezo',
    'hybrid',
    'dark',
    'vox',
    'glass',
    'velo',
    'vocal',
    'synth',
    'bright',
    'deep',
    'sonic',
    'phased',
    'pulse',
    'pop',
    'glassy',
    'shiny',
    'chime',
    'pure',
    'tortured',
    'poly',
    'alternative',
    'rocker',
    'jazz',
    'crunch',
    'running',
    'flying',
    'steel',
    'groovy',


]

//generate random patch name
function randomPatch() {
    firstPart = adjective[Math.floor(Math.random() * adjective.length)];
    secondPart = instrument[Math.floor(Math.random() * instrument.length)];
    suffixPart = suffix[Math.floor(Math.random() * suffix.length)];
    genrePart = genre[Math.floor(Math.random() * genre.length)];

    //titlecase
    firstPartTitleCase = firstPart.slice(0, 1).toUpperCase() + firstPart.slice(1);
    secondPartTitleCase = secondPart.slice(0, 1).toUpperCase() + secondPart.slice(1);
    suffixPartTitleCase = suffixPart.slice(0, 1).toUpperCase() + suffixPart.slice(1);
    genrePartTitleCase = genrePart.slice(0, 1).toUpperCase() + genrePart.slice(1);



    //chance of adding layers
    let chance = (Math.random());
    if (chance >= 0.75) {
        return `${firstPartTitleCase} ${secondPartTitleCase} ${suffixPartTitleCase}`
    } else if (chance >= 0.5) {
        return `${firstPartTitleCase} ${genrePartTitleCase} ${secondPartTitleCase}`
    }

    else {
        return `${firstPartTitleCase} ${secondPartTitleCase}`
    }
}

function randomNumber() {
    let num = Math.floor((Math.random() * 99));
    if (num < 10) {
        num = '0' + num;
    } return num;
}

const randomButton = document.getElementById('randomize');

function updatePatch(newName) {
    const patchName = document.querySelector('.patchtext');
    patchName.textContent = newName
}
function updateNumber(newNumber) {
    const patchNum = document.querySelector('.patchnum');
    
    patchNum.textContent = newNumber
}


//set inital patch upon loading page
updatePatch(randomPatch());
updateNumber(randomNumber());


//give random patch on clicking button
randomButton.addEventListener('click', function () {
    randomButton.classList.add('playing');
    updatePatch(randomPatch());
    updateNumber(randomNumber());
});

function removeTransition(e) {
    if (e.propertyName !== 'box-shadow') return;
    e.target.classList.remove('playing');
  }
randomButton.addEventListener('transitionend', removeTransition);
