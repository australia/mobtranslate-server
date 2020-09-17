# MOB TRANSLATE

[https://mobtranslate.com](https://mobtranslate.com)

A fully open source community orientated endeavour to make "Google Translate" for as many Australian Aboriginal languages as possible.

Our contributor discussions happen on Telegram -> [https://t.me/mobtranslate](https://t.me/mobtranslate)

## Project Goals

It is essentially impossible to make a fully grammatically correct translation service for languages that are not widely used and not well documented.

The projects mission will be to;

- Help people learn basic vocabulary even if used grammatically incorrect e.g. "I caught a fish" -> "I caught a kuyu"
- Attempt to create a hybrid language between English and Tribal dialects, for example [Singlish](https://en.wikipedia.org/wiki/Singlish) (Singaporean English)
- In the absence of grammatical knowledge, the project _could_ also possibly make efforts to invent some new grammatical concepts.

(The infrastructure will be built with the thought in mind that there are many global minority languages that could also benefit from this framework)

## Getting Started

Download and install dependencies

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

## Technical Project Plan

- [Transcription](#Transcription)
  - [Transcription Instructions](#Transcription-Instructions)
- [Translation Engine](#Translation-Engine)
- [Dictionary Format](#Dictionary-Format)
- [Servers](#Servers)
- [Client](#Client)
- [Deployment](#Deployment)

### Transcription

There are over 400 tribal languages in Australia and they are stored in many different ways.

The process of getting a particular dialect will differ each time.

We have only started on Kuku Yalanji for which there are some basic instructions below.

#### Transcription Instructions

Language Dictionary: http://www.ausil.org.au/sites/ausil/files/WP-B-7%20English%20-%20Kuku-Yal%20Dict._0.pdf

##### Requirements

- Check out `./dictionaries/kuku_yalanji/dictionary.yaml` to see what hasn't been done yet
- Your work should end up in `./dictionaries/kuku_yalanji/dictionary.yaml`
- It should be in alphabetical order
- The word type should be saved correctly e.g. noun, verb, transitive-verb, adjective (full table below)
- It should be valid YAML (you can check your syntax by pasting into here ->http://www.yamllint.com)
- You have to use your better judgement when choosing potential translations per word (I explain more below)

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

Above is how the data should look in `./dictionaries/kuku_yalanji/dictionary.yaml`

`word` - The Aboriginal version of the word

`type` - The type of word, the dictionary generally list it e.g. yuyku (n), therefore it should be `noun` (word types below)

`definitions` - A line for each supplied definition

`synonyms` - Some words will have synonyms, it should have a new line for each aboriginal word synonym.

`translations` - This one requires a bit of creativity. If the word translates to "hello", add a new line for "hello", but maybe add a new
line for "hi" and "hey". (Use your best judgement here)

Word Types;

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

### Translation Engine

As outlined at the top, the projects mission is to help teach Aboriginal languages to those who want to learn. Again, it is a very hard task to make the project accurate or an authority by any means.

As a first step, most people would just like to expand their vocabulary. This can easily be achieved through simple string replacement using [string similarity](https://www.npmjs.com/package/string-similarity) techniques.

The second step would be trying to get sentences grammatically correct. This will involve more extensive research, more conditional logic (does this verb makes sense proceeding this noun) and more complex natural language processing to achieve. All ideas on how to achieve this are extremely welcome.

The third step, or project end goal, would be to revive the language. Given that many people can't speak conversational dialect's, there might be a requirement to also invent or inspire new grammar inside the specified language. (Perhaps machine learning models have the answer to this, and an answer that everyone might be happy to appropriate)

### Dictionary Format

There is no doubt that this will likely be the most contentious issue.

Language is one of those rabbit hole subjects, the complexity is duly noted.

That being said, this project will be considered a success if all it ever does is help people expand their vocabularies.

But the project does also aim to be a bit more ambitious so the data format should be able to evolve over time.

We will begin in YAML because;

- The current research on Aboriginal languages is quite primitive, there isn't much recorded information on linguistic nuances (there isn't many relationships between words)
- YAML is easy to read, understand and edit
- YAML requires no extra tooling on a contributors behalf
- YAML is quite "portable"

Once it seems that project is about to evolve pass the limitations of YAML we will port it to another format.

The desired format is undecided at this point but would likely be a database or XML files.

### Servers

Currently hosted on Heroku. Doesn't need much else yet.

### Client

Built with React (Next.js), the client code can be found at [https://github.com/australia/mobtranslate-client](https://github.com/australia/mobtranslate-client)

### Deployment

Deployed on Heroku, automatically deploys master branch.

### Useful Links:

- [http://ausil.org/Dictionary/Djinang/lexicon/index.htm](http://ausil.org/Dictionary/Djinang/lexicon/index.htm)
- [https://ebible.org/study/?w1=bible&t1=local:gvn&v1=JN1_1](https://ebible.org/study/?w1=bible&t1=local:gvn&v1=JN1_1)
