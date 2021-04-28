# Quizz App

## API 
- POST /games
  - creates a new game with a unique id and a list of questions, returns the id to redirect the user
  - optional query params like this /games?amount=5&difficulty=easy&category=10&type=multiple
    - if these are left out then random values will be assigned  
 
 - GET /games/:id e.g /games/6086c0c4d44a15002cf791b4
   - returns array of questions for that game
   
```
   {
  "id": "6086c0c4d44a15002cf791b4",
  "questions": [
    {
      "category": "Sports",
      "type": "boolean",
      "question": "Peyton Manning retired after winning Super Bowl XLIX.",
      "possible_answers": [
        "True",
        "False"
      ]
    }, ... 
   ]
  }
```
 - GET /games/:id/simple 
   - returns an object with info about that game but no questions

```
{
  "completed": false,
  "started": true,
  "type": "multiple",
  "category": "Politics",
  "length": 5
}
```

- POST /games/:id/player/:playername e.g /games/6086c0c4d44a15002cf791b4/player/bob
  - no body
  - creates a new player in that game  


- POST /games/:id/player/:playername/answers e.g /games/6086c0c4d44a15002cf791b4/player/bob/answers
  - is sent at the end of the game
  - needs a body of an array of a users answers e.g ["True", "False", "True"] or ["Ozzy Osbourne", "Abigail", "5"]
  - adds users answers to the game

- Get /games/:id/results e.g /games/6086c0c4d44a15002cf791b4/results
  - sends a list of validated answers for the players in a game
  - also sends scores
