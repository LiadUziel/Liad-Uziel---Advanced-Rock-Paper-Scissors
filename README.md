## Installation

This project uses Yarn as package manager. To install all dependencies run

```
yarn install
```

## Local development

To run the game, use the provided command

```
yarn runGame
```

# Discussion Questions

## Part One

### 7. DISCUSSION: What are the options to improve the experience of a Human VS Human game play?

The experience of HUMAN VS HUMAN can be improved by saying the result after each hand selection and not after 3 hands selection.
This way it will be easier to follow and it will more resemble a real game where you know who the winner is right away after choosing a hand.

### 8. DISCUSSION:

#### a. What is a proper way of dealing with a crash?

#### b. What is a proper way of dealing with a situation where the app was closed in the middle of a game?

In my opinion, the best way to deal with a crash is to save the selections in the DB so that the data is not lost. You can also use this to collect statistics and display them for the user.

If you save the hand selections in the DB, then in the event that the application crashes in the middle, you can restore the existing information and return to play from that point.

## Part Three

### DISCUSSION: Let’s say that it takes ~x units of time for a CPU player to draw hand(s) - In such a case,how can we get the result of the game without having to wait for the entire game to be played round by round in a CPU player VS CPU player game?

If we want to get the result of the game without having to wait for the whole game to play a round we can use Promise.all() to parallel rounds when you want to speed up CPU vs CPU matches without waiting for one round before starting the next.
