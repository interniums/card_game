/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from '../styles/Background.module.css'
import pikachu from '../assets/pikachu.png'
import bird from '../assets/bird.png'
import backgroundImage from '../assets/pixel-background.jpg'

export default function Background(props) {

	return (
		<div style={{opacity: props.start == true ? .6 : 1, backgroundImage: `url(${backgroundImage})`}} className={styles.background}>
			<div className={styles.pikachu}>
				<img className={styles.pikachuImg} src={pikachu} alt="" />
			</div>
			<div className={styles.bird}>
				<img src={bird} alt="" className={styles.birdImg} />
			</div>
			<img src="" alt="" />
			<img src="" alt="" />
			<img src="" alt="" />
			<img src="" alt="" />
		</div>
	)
}