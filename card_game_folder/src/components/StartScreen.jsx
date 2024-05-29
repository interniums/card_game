/* eslint-disable react/prop-types */
import styles from '../styles/StartScreen.module.css'
import github_logo from '../assets/github-mark.png'
import Text from './Text'

export default function StartScreen(props) {

	return (
		<div className={styles.container}>
			<div className={styles.border}>
				<div className={styles.menu}>
					<div className={styles.header}>
						<div className={styles.h1}>
							<Text />
						</div>
					</div>
					<div className={styles.main}>
						<div onClick={()=> props.changeDifficulty(1)} className={styles.option}>Easy</div>
						<div onClick={()=> props.changeDifficulty(2)} className={styles.option}>Medium</div>
						<div onClick={()=> props.changeDifficulty(3)} className={styles.option}>Hard</div>
					</div>
					<div className={styles.footer}>
						Made by 
						<div className={styles.anchor}>
							<a className={styles.a} href="">
								INTERNIUM 
							</a>
							<img className={styles.logo} src={github_logo} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}