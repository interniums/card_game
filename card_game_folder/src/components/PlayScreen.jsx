/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styles from '../styles/PlayScreen.module.css'
import pokeball from '../assets/pokeball.png'
import trophy from '../assets/trophy.svg'
import { useState } from 'react'
import CardsDisplay from './CardsDisplay'

export default function PlayScreen(props) {
	const [score, setScore] = useState(0)
	const [bestScore, setBestScore] = useState(0)
	const [cards, setCards] = useState(0)
	const [initialCards, setInitialCards] = useState(5)

	return (
		<div className={styles.gameContainer}>
			<header className={styles.header}>
					<img src={pokeball} alt="" />
					<div className={styles.headerText}><div className={styles.red}>Poke</div><div className={styles.white}>Moke</div></div>
				</header>
				<main className={styles.main}>
					<div className={styles.scoreContainer}>
						<div className={styles.flex}>
							<div>SCORE: {score}</div>
							<div className={styles.bestScore}>BEST SCORE: <img className={styles.trophy} src={trophy} alt="" />{bestScore}</div>
						</div>
						<div className={styles.countContainer}>{cards}/{initialCards}</div>
					</div>
					<div className={styles.cardsContainer}>
						<CardsDisplay initialCards={initialCards}/>
					</div>
				</main>
		</div>
	)
}