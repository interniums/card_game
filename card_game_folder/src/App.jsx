/* eslint-disable no-unused-vars */
import { useState } from "react"
import Background from "./components/Background"
import StartScreen from "./components/StartScreen"
import PlayScreen from "./components/PlayScreen"

function App() {
	const [start, setStart] = useState(true)
	const [difficulty, setDifficulty] = useState(0)

	const changeDifficulty = (e) => {
		setDifficulty(e)
		setStart(false)
	}

	console.log(difficulty)
  return (
		<>
		<Background start={start} />
			{
				start == true ? <StartScreen difficulty={difficulty} changeDifficulty={changeDifficulty} /> : <PlayScreen difficulty={difficulty}/>
			}
		</>
  )
}

export default App
