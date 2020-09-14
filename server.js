const fs = require("fs");
const yaml = require("js-yaml");
const _ = require("lodash");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// ====== Setup Server

// adj - adjective
// ass - associative
// IDEA - geo locator for which land you are on - hate politics of it
// parse application/json
app.use(bodyParser.json());

// enable cors
app.use(cors());

// ====== Application Code

const parseDictionary = (dictionaryName) => {
  let dictionary = null;
  // read file from dir
  try {
    dictionary = yaml.safeLoad(
      fs.readFileSync(
        `./dictionaries/${dictionaryName}/dictionary.yaml`,
        "utf8"
      )
    );
  } catch (e) {
    console.log(e);
  }
  return dictionary;
  // parse from yaml to json object
  // return object (and maybe other properties)
};

// words: [
//   {
//     word: "jalbu",
//     type: "noun",
//     definition: "woman",
//     translations: ["female", "woman"],
//   },
// ];

const parseText = (text) => {
  const textWords = text.split(" ");
  return textWords;
};

const lookupWord = (dictionary, word) => {
  let wordData = null;
  const wordObj = _.find(dictionary.words, (w) => {
    let foundTranslation = false;
    _.each(w.translations, (potentialTranslatedWord) => {
      if (potentialTranslatedWord === word) {
        foundTranslation = true;
      }
    });
    if (foundTranslation) {
      wordData = w;
    }
  });
  return wordData;
};

// GET /dictionaries
// GET /lookup/{word}

app.get("/", function (req, res) {
  const dictionary = parseDictionary("kuku_yalanji");

  res.send(dictionary);
});

app.get("/lookup/:word", function (req, res) {
  const { word } = req.params;
  const dictionary = parseDictionary("kuku_yalanji");
  const wordData = lookupWord(dictionary, word);

  res.send({ dictionary, wordData });
});

app.post("/translate", function (req, res) {
  const { text } = req.body;
  const dictionary = parseDictionary("kuku_yalanji");
  const textArray = parseText(text);
  const translationArray = _.clone(textArray);
  _.each(textArray, (textWord, index) => {
    // try find translation and do override
    const translatedWord = lookupWord(dictionary, textWord);
    if (translatedWord) {
      translationArray[index] = translatedWord.word;
    }
  });

  // convert translations array back to string
  const translation = translationArray.join(" ");
  console.log("Found user search", {
    originalText: text,
    translatedText: translation,
  });
  res.send({ originalText: text, translatedText: translation });
});

app.listen(process.env.PORT || 4000);
