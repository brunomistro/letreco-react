import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currrentGuess, turn }) {
	return (
		<div>
			{guesses.map((guess, index) => {
				if(turn === index) {
					return <Row key={index} currrentGuess={currrentGuess} />
				}
				return <Row key={index} guess={guess} />
			})}
		</div>
	)
}
