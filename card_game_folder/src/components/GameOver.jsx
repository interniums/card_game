/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styles from '../styles/GameOver.module.css'

export default function GameOver(props) {
	return (
		<div className={styles.container}>
			<div className={styles.border}>
				<div className={styles.main}>
					<h2 className={styles.h2}>
						{props.win == true ? 'You Win!' :
							'Game Over!'
						}
					</h2>
					<div className={styles.gif}>
						{
							props.win == false ? <img src='https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif' className={styles.video}/> :
							<img className={styles.video} src="https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" alt="" />
						}
					</div>
					<div>
						<div className={styles.scoreContainer}>Your final score is: <span className={styles.bold}>{props.score}</span></div>	
						<div className={styles.buttons}>
							<div onClick={()=>{props.setCards(0); props.setScore(0); props.setWin(false); props.setGame(true); props.setInitialCards(props.inititalCards)}} className={styles.button}>Play Again</div>
							<div onClick={()=>{props.setCards(0); props.setWin(false); props.setStart(true); props.setGame(true)}} className={styles.button}>Quit</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}