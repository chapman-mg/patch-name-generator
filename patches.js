//detect page height
const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener('resize', documentHeight);
   documentHeight();

// let artist = [
//     'Tangerine Dream',
//     'Kraftwerk',
//     'Vangelis',

// ]
// let instrument = [
//     '303',
//     'violin',
//     'choir',
//     'vocoder',
//     'blues',
//     'horns',
//     'swell',
//     'vox',
//     'voices',
//     'strings',
//     'octaves',
//     'fifth',
//     'orchestra',
//     'pad',
//     'pulse',
//     'saw',
//     'space',
//     'piano',
//     'harpsichord',
//     'clav',
//     'bell',
//     'organ',
//     'guitar',
//     'brass',
//     'soundtrack',
//     'drums',
//     'noise',
//     'sitar',
//     'horn',
//     'split',
//     'stack',
//     'lead',
//     'rhythm',
//     'arpeggiator',
//     'transients',
//     'layers',
//     'sync',
//     'vowels',
//     'rhodes',
//     'e-piano',
//     'wurli',
//     'flute',
//     'glide',
//     'legato',
//     'dreams',
//     'shakuhachi',
//     'panpipes',
//     'square',
//     'birds',
//     'percussion',
//     'marimba',

// ]

// let suffix = [
//     'solo',
//     'layers',
//     'sweep',
//     'stack',
//     'split',
//     'drone',
//     'bass',
//     'pad',
//     'lead',
//     'delay',
//     'blips',
//     'sequence',
//     'bleeps',
//     'bloops',
//     'stab',
    
// ]

// let genre = [
//     'filtered',
//     'Berlin School',
//     'atmospheric',
//     'acid',
//     'techno',
//     'alien',
//     'industrial',
//     'house',
//     'trance',
//     'psy',
//     'drone',
//     'ambient',
//     'synthwave',
//     'glitch',
//     'electro',
//     'folk',
//     'christmas',
//     'Kraftwerk',
//     'Vangelis',
//     'EDM',
//     'S&H',
//     'Carpenter',
//     'tron',
//     'funk',
//     'Moroder',
//     'tube',
//     'rave',
//     'boom-bap',
//     'LFO',

// ]
// let adjective = [
//     'PCM',
//     'ice',
//     'crystal',
//     'PWM',
//     'slap',
//     'psycho',
//     'resonant',
//     'modulated',
//     'ringmod',
//     'distorted',
//     'ambient',
//     'aggro',
//     'modern',
//     'sad',
//     'big',
//     'chorused',
//     'interstellar',
//     'cheesy',
//     'haunting',
//     'mellow',
//     'thick',
//     'reedy',
//     'bouncy',
//     'delayed',
//     'CS-80',
//     'oberheim',
//     'prophet',
//     'modular',
//     'moog',
//     'roland',
//     'juno',
//     'jupiter',
//     'fat',
//     'soaring',
//     'tearing',
//     'ripping',
//     '80s',
//     '70s',
//     '90s',
//     'analog',
//     'digital',
//     'wavetable',
//     'granular',
//     'FM',
//     'sync',
//     'metallic',
//     'chaotic',
//     'bowed',
//     'plucked',
//     'electric',
//     'staccato',
//     'muted',
//     'long',
//     'short',
//     'detuned',
//     'clean',
//     'glitchy',
//     'mysterious',
//     'forlorn',
//     'ethereal',
//     'noise',
//     'jet',
//     '101',
//     'moog',
//     'power',
//     'atmosphere',
//     'majestic',
//     'vintage',
//     'slow',
//     'brass',
//     'phat',
//     'warm',
//     'fuzzy',
//     'rezo',
//     'hybrid',
//     'dark',
//     'vox',
//     'glass',
//     'velo',
//     'vocal',
//     'synth',
//     'bright',
//     'deep',
//     'sonic',
//     'phased',
//     'pulse',
//     'pop',
//     'glassy',
//     'shiny',
//     'chime',
//     'pure',
//     'tortured',
//     'poly',
//     'alternative',
//     'rocker',
//     'jazz',
//     'crunch',
//     'running',
//     'flying',
//     'steel',
//     'groovy',


// ]

// //generate random patch name
// function randomPatch() {
//     firstPart = adjective[Math.floor(Math.random() * adjective.length)];
//     secondPart = instrument[Math.floor(Math.random() * instrument.length)];
//     suffixPart = suffix[Math.floor(Math.random() * suffix.length)];
//     genrePart = genre[Math.floor(Math.random() * genre.length)];

//     //titlecase
//     firstPartTitleCase = firstPart.slice(0, 1).toUpperCase() + firstPart.slice(1);
//     secondPartTitleCase = secondPart.slice(0, 1).toUpperCase() + secondPart.slice(1);
//     suffixPartTitleCase = suffixPart.slice(0, 1).toUpperCase() + suffixPart.slice(1);
//     genrePartTitleCase = genrePart.slice(0, 1).toUpperCase() + genrePart.slice(1);



//     //chance of adding layers
//     let chance = (Math.random());
//     if (chance >= 0.75) {
//         return `${firstPartTitleCase} ${secondPartTitleCase} ${suffixPartTitleCase}`
//     } else if (chance >= 0.5) {
//         return `${firstPartTitleCase} ${genrePartTitleCase} ${secondPartTitleCase}`
//     }

//     else {
//         return `${firstPartTitleCase} ${secondPartTitleCase}`
//     }
// }
const instrumentsList = {
    keys: ['Grand',
      'Rhodes',
      'Wurli',
      'Organ',
      'Hammond',
      'Clav',
      'Clavinet',
      'Harpsichord',
      'Saw',
      'Pulse',
      'Piano',
      'Upright',
      'Vibes',
      'Tines',
      'Keys',
      'Farfisa',
      'Pipes',
      'Drawbar',
      'E-piano',
    ],
    lead: ['Guitar',
      'Feedback',
      '303',
      'Lead',
      'Solo',
      'Sync',
      'Saw',
      'Square',
      'Pulse',
      'PWM',
      'Sitar',
      'Vox',
    ],
    pad: ['Pad',
      'Wash',
      'Clouds',
      'Washes',
      'Air',
      'Soundtrack',
      'Ambience',
      'Drone',
      'Voices',
      'Ooh',
      'Aah',
      'Choir',
    ],
    brass: ['Horn',
      'Trumpet',
      'Tuba',
      'Sax',
      'Piccolo',
      'Flute',
      'Oboe',
      'Clarinet',
      'Sax',
      'Bassoon',
      'Reed',
      'Harmonica',
      'Swell',
    ],
    string: ['Viola',
      'Violin',
      'Cello',
      'Ensemble',
      'Orchestra',
      'Orch',
      'Harp',
      'Bass',
      'Bow',
      'Stringer',
      'Solina',
      'Orchestron',
    ],
    fx: ['Plane',
      'Transients',
      'Chopper',
      'kick',
      'cowbell',
      'bongos',
      'conga',
      'Krell',
      'Chimes',
      'Cricket',
      'Bell',
      'Wind',
      'Thunder',
      'Dream',
      'Echo',
      'Rain',
      'Noise',
      'Ocean',
      'Machine',
      'Drum',
      'Drone',
      'hit',
      'Sequence',
      'Vocoder',
    ],
  }
  const adjectivesList = ['resonant',
    'octave',
    'retro',
    'filtered',
    '2600',
    'mono',
    'fancy',
    'wet',
    'repeating',
    'Chicago',
    'detroit',
    'berlin',
    'french',
    'modulated',
    'hard',
    'soft',
    'juicy',
    'springy',
    'wild',
    'ringmod',
    'pitched',
    'microtonal',
    'distorted',
    'otherworldly',
    'fantasy',
    'future',
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
    'euphoric',
    'digital',
    'wavetable',
    'granular',
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
    'SH-101',
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
    'broken',
    'tuned',
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
    'rocking',
    'jazz',
    'crunchy',
    'running',
    'flying',
    'steel',
    'Groovy',
    'unison',
  ]
  const genreList = [
    'Berlin School',
    'atmospheric',
    'generative',
    'acid',
    'stereo',
    'quadraphonic',
    'synth',
    'Blade Runner',
    'supersaw',
    'sci-fi',
    'techno',
    'alien',
    'industrial',
    'house',
    'trance',
    'psy',
    'droning',
    'ambient',
    'mega',
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
    'gabber',
    'tube',
    'rave',
    'boom-bap',
    'LFO',
  ]
  const suffixList = [
    'layers',
    'stack',
    'split',
    'drone',
    'bass',
    'lead',
    'delay',
    'blips',
    'sequence',
    'bleeps',
    'bloops',
    'stab',
  
  ]
  
  const buttonKeys = document.querySelector('.buttonKeys');
  const buttonPad = document.querySelector('.buttonPad');
  const buttonLead = document.querySelector('.buttonLead');
  const buttonBrass = document.querySelector('.buttonBrass');
  const buttonString = document.querySelector('.buttonString');
  const buttonFx = document.querySelector('.buttonFx');
  
  const buttonGenerate = document.querySelector('.buttonGenerate')
  
  //set default instrument as keys
  let inst = instrumentsList.keys;
  
  //assign instrument type
  buttonKeys.addEventListener('click', function() {
    inst = instrumentsList.keys;
  });
  buttonPad.addEventListener('click', function() {
    inst = instrumentsList.pad;
  });
  buttonLead.addEventListener('click', function() {
    inst = instrumentsList.lead;
  });
  buttonBrass.addEventListener('click', function() {
    inst = instrumentsList.brass;
  });
  buttonString.addEventListener('click', function() {
    inst = instrumentsList.string;
  });
  buttonFx.addEventListener('click', function() {
    inst = instrumentsList.fx;
  });
  
  function randomPatch() {
    // assign random item from list to variables
    let instrument = inst[Math.floor(Math.random() * inst.length)];
    let adjective = adjectivesList[Math.floor(Math.random() * adjectivesList.length)];
    let genre = genreList[Math.floor(Math.random() * genreList.length)];
    let suffix = suffixList[Math.floor(Math.random() * suffixList.length)];
  
    //uppercase
    adjective = adjective.slice(0, 1).toUpperCase() + adjective.slice(1);
    genre = genre.slice(0, 1).toUpperCase() + genre.slice(1);
    suffix = suffix.slice(0, 1).toUpperCase() + suffix.slice(1);
    instrument = instrument.slice(0, 1).toUpperCase() + instrument.slice(1);
  
    //random structures based on chance
    let chance = (Math.random());
    if (chance >= 0.75) {
      return `${adjective} ${genre} ${instrument} ${suffix}`
    } else if (chance >= 0.4) {
      return `${adjective} ${genre} ${instrument}`
    } else if (chance >= 0.25) {
      return `${adjective} ${instrument}`
    } else {
      return `${genre} ${instrument}`
    }
  }

  // end new code

  
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
