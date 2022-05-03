import React from 'react'

export default function Row({ guess, currrentGuess }) {

	if(guess) {
		return (
			<div className="row past">
				{guess.map((letter, index) => (
					<div key={index} className={letter.color}>{letter.key}</div>
				))}
			</div>
		)
	}

	if(currrentGuess) {
		let letters = currrentGuess.split('')

		return (
			<div className="row current">
				{letters.map((letter, index) => (
					<div key={index} className="filled">{letter}</div>
				))}
				{[...Array(5 - letters.length)].map((_, index) => (
					<div key={index}></div>
				))}
			</div>
		)
	}

	return (
		<div className="row">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
