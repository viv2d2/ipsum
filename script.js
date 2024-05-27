/** Constants. */
const LOREM_IPSUM_DIV_ID = 'lorem-ipsum';
const SENTENCE_MIN_WORDS = 6;
const SENTENCE_MAX_WORDS = 10;
const NUM_SHUFFLES = 10;

/** Returns random integer between min (inclusive) and max (exclusive). */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/** Shuffles given array. */
function shuffle(array, numShuffles = 1) {
  let i = 0;
  while (i < numShuffles) {
    array.sort((a, b) => { return getRandomInt(-1, 2) });
    i += 1;
  }
}

/** Converts array of words into formatted sentence string. */
function convertWordsToSentence(words) {
  const sentence = words.join(' ');
  return `${sentence.slice(0, 1).toUpperCase()}${sentence.slice(1)}.`;
}

/** Partitions given array of words into sentences. */
function getSentences(words) {
  const sentences = [];
  let i = 0;

  while (i < words.length) {
    const length = getRandomInt(SENTENCE_MIN_WORDS, SENTENCE_MAX_WORDS + 1);
    sentences.push(convertWordsToSentence(words.slice(i, i + length)));
    i += length;
  }

  return sentences;
}

/** Generate and insert sentences. */
const words = PEOPLE.concat(BUGS).concat(LOCATIONS).concat(CLOTHING);

shuffle(words, NUM_SHUFFLES);
const sentences = getSentences(words);

const ipsumDiv = document.getElementById(LOREM_IPSUM_DIV_ID);
ipsumDiv.innerHTML = sentences.map(s => `<p>${s}</p>`).join('\n');
