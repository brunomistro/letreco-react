import React, { useEffect, useState, useSyncExternalStore } from 'react'

const keypadArray = [
	{"key": "a"},
	{"key": "b"},
	{"key": "c"},
	{"key": "d"},
	{"key": "e"},
	{"key": "f"},
	{"key": "g"},
	{"key": "h"},
	{"key": "i"},
	{"key": "j"},
	{"key": "k"},
	{"key": "l"},
	{"key": "m"},
	{"key": "n"},
	{"key": "o"},
	{"key": "p"},
	{"key": "q"},
	{"key": "r"},
	{"key": "s"},
	{"key": "t"},
	{"key": "u"},
	{"key": "v"},
	{"key": "w"},
	{"key": "x"},
	{"key": "y"},
	{"key": "z"}
];

export default function Keypad() {
	const [letters, setLetters] = useState(null)

	useEffect(() => {
		setLetters(keypadArray)
	}, [])

	return (
		<div className='keypad'>
			{letters && letters.map(l => {
				return (
					<div key={l.key}>{l.key}</div>
				)
			})}
		</div>
	)
}
