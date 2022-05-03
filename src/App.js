import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

const dataBase = [
	{"id": 1, "word": "ninja"},
	{"id": 2, "word": "spade"},
	{"id": 3, "word": "pools"},
	{"id": 4, "word": "drive"},
	{"id": 5, "word": "relax"},
	{"id": 6, "word": "times"},
	{"id": 7, "word": "train"},
	{"id": 8, "word": "cores"},
	{"id": 9, "word": "pours"},
	{"id": 10, "word": "blame"},
	{"id": 11, "word": "banks"},
	{"id": 12, "word": "phone"},
	{"id": 13, "word": "bling"},
	{"id": 14, "word": "coins"},
	{"id": 15, "word": "hello"}
];

export default function App() {
	const [solution, setSolution] = useState(null)

	useEffect(() => {
		// Math.floor - e.g. 4.97 = 4, 3.1 = 3
		// Math.random - any number between 0 and 1, e.g. 0,6911
		// So we get an random number and multiple that by the array length and e floor that number
		const random = dataBase[Math.floor(Math.random() * dataBase.length)]
		setSolution(random.word)
	},[setSolution])

  return (
    <div className="App">
      <h1>Letreco (Wordle)</h1>
			{solution && <Wordle solution={solution} />}
    </div>
  );
}

/* 
data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6
game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'
*/