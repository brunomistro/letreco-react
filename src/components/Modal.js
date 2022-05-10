export default function Modal({ isCorrect, solution, turn }) {
	return (
		<div className="modal">
			<div>
				<p className="solution">{solution}</p>
				{isCorrect && (
					<>
						<h1>You Win!</h1>
						<p>You did it, in {turn} guesses :)</p>
					</>
				)}
				{!isCorrect && (
					<>
						<h1>You Lose!</h1>
						<p>See u later Boy :)</p>
					</>
				)}
				<a href="/"><button>Try Again</button></a>
			</div>
		</div>
	)
}
