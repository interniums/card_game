/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styles from '../styles/PlayScreen.module.css'
import pokeball from '../assets/pokeball.png'
import trophy from '../assets/trophy.svg'
import { useEffect, useState } from 'react'
import CardsDisplay from './CardsDisplay'
import GameOver from './GameOver'

export default function PlayScreen(props) {
	const [score, setScore] = useState(0)
	const [bestScore, setBestScore] = useState(1)
	const [cards, setCards] = useState(0)
	const [initialCards, setInitialCards] = useState(count())
	const [game, setGame] = useState(true)
	const [win, setWin] = useState(false)
	const [loading, setLoading] = useState(false)

	function count () {
		if	(props.difficulty == 1) return 5
		if	(props.difficulty == 2) return 8
		if	(props.difficulty == 3) return 12
	}

	useEffect(()=>{
		if (cards == initialCards) setWin(true), setGame(false)
	}, [cards, initialCards])
	// console.log(win)
	// console.log(game)
	// console.log(score)
	// console.log(props.difficulty)
	console.log(loading)

	const addScore = () => {
		setScore(prevScore => prevScore + 1)
		setBestScore(score + 1)
	}

	const addCards = () => {
		setCards(prevCards => prevCards + 1)
	}

	return (
		<div className={styles.gameContainer}>
			<header style={{cursor: 'pointer', display: loading == false ? 'flex' : 'none'}} onClick={()=>{
				props.setStart(true); 
				setCards(0); 
				setWin(false);
				setGame(true);
				setInitialCards(6);
				}} className={styles.header}>
					<img src={pokeball} alt="" />
					<div className={styles.headerText}><div className={styles.red}>Poke</div><div className={styles.white}>Moke</div></div>
				</header>
				<main className={styles.main}>
					<div style={{display: loading == false ? 'grid' : 'none'}} className={styles.scoreContainer}>
						<div className={styles.flex}>
							<div>SCORE: {score}</div>
							<div className={styles.bestScore}>BEST SCORE: <img className={styles.trophy} src={trophy} alt="" />{score <= 1 ? score : bestScore}</div>
						</div>
						<div className={styles.countContainer}>{cards}/{initialCards}</div>
					</div>
					<div className={styles.cardsContainer}>
						<CardsDisplay 
							addCards={addCards}
							setCards={setCards}
							setScore={setScore}
							addScore={addScore}
							initialCards={initialCards}
							game={game}
							setGame={setGame}
							setInitialCards={setInitialCards} 
							difficulty={props.difficulty}
							loading={loading}
							setLoading={setLoading}
						/>
					</div>
					{
						game == false ? <GameOver
							setCards={setCards} 
							setStart={props.setStart} 
							setWin={setWin} setGame={setGame} 
							win={win} 
							score={score} 
							setInitialCards={setInitialCards}
							setScore={setScore}
						/> : null
					}
				</main>
		</div>
	)
}