# MOB TRANSLATE

[https://mobtranslate.com](https://mobtranslate.com)

A fully open source community orientated endaevour to make "Google Translate" for as many Australian Aboriginal languages as possible.

I am currently converting one dictionary (Yalanji) from PDF to YAML but it is super time intensive.

Looking for any other developers who would like to help out. (writing YAML files mostly to begin with)

I've made an [issue](https://github.com/australia/mobtranslate-server/issues/1) for volunteers to get in touch with.

We also have a Telegram channel for contributors to chat on -> [https://t.me/mobtranslate](https://t.me/mobtranslate)

## Getting Started

Download and install project

```bash
git clone git@github.com:australia/mobtranslate-server.git
cd mobtranslate-server
npm i
```

Start and run development server

```bash
node server.js
# There is no auto-reload yet so restart manually after file changes
```

## Project Plan

Blah blah split into some sections

- [Transcription](#Transcription)
- [Translation Engine](#Translation-Engine)
  - [Transcription Instructions](#Transcription-Instructions)
- [Servers](#Servers)

### Transcription

- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test

### Translation Engine

- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test

#### Transcription Instructions

Language Dictionary: http://www.ausil.org.au/sites/ausil/files/WP-B-7%20English%20-%20Kuku-Yal%20Dict._0.pdf

##### Requirements

- Transcripts pages 155 - 167 (All words starting with "Y")
- Your output should end up in one file called `dictionary.yaml`
- It should be in alphabetical order
- The word type should be saved correctly e.g. noun, verb, transitive-verb, adjective (full table below)
- It should be valid YAML (you can check your syntax by pasting into here ->http://www.yamllint.com)
- You have to use your better judgement when choosing a potential translations per word (I explain more below)

In short, one has to take the words, definitions and grammar from the PDF and transcribe them into the common data format YAML. The dictionary PDF can be a bit inconsistent so you will have to use a bit of common sense when transcribing.

Here is an example of the output below, you should end up with file called `dictionary.yaml`.

```
- word: badur
  type: n
  definitions:
    - hook and line. "ngayu badurriji bundanday", "I'm fishing (sitting with hook and line)"
  translations:
    - hook
    - fishing
    - fishing line

- word: baja
  type: mod
  definitions:
    - again. "jana kuljubu jarba kunin baja, kunin baja", "They hit the snake again and again with stones"
    - more. "yundu wunay baja?", "do you have more?"
    - I don't know. "ngayu wanyu baja balkal", "I don't know what to tell" (This is used only with a question word)
  translations:
    - more
    - again

- word: bajanji
  type: noun
  definitions:
    - stubborn
  synonyms:
    - dukul-dandi
    - walu-walu
    - walu-dandi
  translations:
    - stubborn
```

^ Above is how the data should look in `dictionary.yaml`

`word` - The Aboriginal version of the word

`type` - The type of word, the dictionary generally list it e.g. yuyku (n), therefore it should be `noun` (word types below)

`definitions` - A line for each supplied definition

`synonyms` - Some words will have synonyms, it should have a new line for each aboriginal word synonym.

`translations` - This one requires a bit of creativity. If the word translates to "hello", add a new line for "hello", but maybe add a new
line for "hi" and "hey". (Use your best judgement here)

Word Types

```
adj - adjective
ass - associative
aux - auxilary
conj - conjuction
dir - directional
excl - exclamation
i - idiom
intrv - intransitive-verb
m - manner
mod - modifier
n- noun
neg - negative
t - time
trv - transitive verb
```

- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test

### Servers

- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test
- test

### Frontend

test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test

### Deployment

test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test
test

Useful Links:

- faith based translations
- different apps

```

```
