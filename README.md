# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Charles Wu**

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/first-loud-show

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.codecademy.com/ - for html learning
https://www.w3schools.com/html/ - for referencing unfamiliar html elements
https://developer.mozilla.org/en-US/docs/Web/JavaScript - for referencing unfamiliar 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One challenge I had while creating this project was the game loop. At first, I was overconfident and thought I could program it all at once and without planning. I ran into
a problem where I would get to the end and press the correct sequence, however, the game would not register my win. I was going to get frustrated but I slowed down, drew a decsion
flow chart on a white board, and saw that I was not checking what would happen if the guessCounter was equal to the progress, only less than. I learned that even for things that
seem trivial, I will carefully draw and plan anyway. One other thing a was a challenge was getting use to how html and css intereact, and the concept of adding classes to 
document objects and assigning CSS behavior to those classes. Although this was unfamiliar at first, the project made me read a lot more about these interactions and I now feel like
I can understand it and can create flexible elements using these classes. One last thing that I struggled with was that when I added more buttons, I had to experiment with different pitches
to see what sounded OK and learned about the 2^(1/12) rule for frequencies, since I did not know much about sounds and frequencies.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
One question I have is how we might connect from a frontend like our project to a backend, and in what cases to do everything on the frontend
or to delegate some things to the backend. I would like to know about backend in order to understand it, or to possibly develop my knowledge in
a fullstack direction. One other question is how nice color schemes and designs are chosen. Although I have done graphicdesign in the past, I'm 
not sure how it works in a web development environment. I would also like to know the current technologies used in today's modern web development
and how to learn them, so I can contribute immediately in my career.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours, I would spend them implementing a scoring system and a nicer typography (fonts and spacing). Coming from graphic design, I have learned
to recognize many default fonts, so I avoid them out of principle. One feature I thought would be interesting is if the buttons scrambled places every round as a 
super difficult option if the player chose. I think that adding scoring and difficult extends the life of our game and players may want to share it or come back to 
the game to beat their score, and if their score was stored in cookies, they may be able to save their progress locally without making an account.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.