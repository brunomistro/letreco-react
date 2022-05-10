import { useState } from "react"

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0)
	const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)
	const [usedKeys, setUsedKeys] = useState({})

	const formatGuess = () => {
		let solutionArray = [...solution]

		let formattedGuess = [...currentGuess].map(letter => {
			return {key: letter, color: "grey"}
		})

		formattedGuess.forEach((letter, index) => {
			if(solution[index] === letter.key) {
				formattedGuess[index].color = "green"
				solutionArray[index] = null;
			}
		})

		formattedGuess.forEach((letter, index) => {
			if(solutionArray.includes(letter.key) && letter.color !== "green") {
				formattedGuess[index].color = "yellow";
				solutionArray[solutionArray.indexOf(letter.key)] = null;
			}
		})

    return formattedGuess
	}
	
	const addNewGuess = (formattedGuess) => {
		if(currentGuess === solution) setIsCorrect(true)
		
		setGuesses((prevGuesses) => {
			let newGuesses = [...prevGuesses]
			newGuesses[turn] = formattedGuess
			return newGuesses
		})
		setHistory(prevHistory => { return [...prevHistory, currentGuess] })
		setTurn((prevTurn) => { return prevTurn + 1 })
		setUsedKeys(prevUsedKeys => {
      formattedGuess.forEach(l => {
        const currentColor = prevUsedKeys[l.key]

        if (l.color === 'green') {
          prevUsedKeys[l.key] = 'green'
          return
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[l.key] = 'yellow'
          return
        }
        if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[l.key] = 'grey'
          return
        }
      })

      return prevUsedKeys
    })
		setCurrentGuess("")
	}
  const handleKeyup = ({ key }) => {
		const regex = /^[A-Za-z]$/;

		if(key === "Enter") {
			if (turn > 5) return
      if (history.includes(currentGuess)) return
      if (currentGuess.length !== 5) return
			
			const formatted = formatGuess()
			addNewGuess(formatted)
		}

		if(key === "Backspace") {
			setCurrentGuess(prev => prev.slice(0, -1));
			return
		}

		if(regex.test(key)) {
			if(currentGuess.length < 5) {
				setCurrentGuess(prev => prev + key)
			}
		}
  }

	return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
}

export default useWordle