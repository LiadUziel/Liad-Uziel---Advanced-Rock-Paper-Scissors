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
