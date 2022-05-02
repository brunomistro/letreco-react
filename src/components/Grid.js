import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currrentGuess, turn }) {
	return (
		<div>
			{guesses.map((guess, index) => {
				return <Row key={index} />
			})}
		</div>
	)
}
