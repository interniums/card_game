/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import styles from '../styles/Cards.module.css'
import axios from 'axios'
import Tilt from 'react-parallax-tilt'
import loading from '../assets/loading.png'

function getRandomIndices(total, count) {
  const indices = new Set()
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * total) + 1
    indices.add(randomIndex)
  }
  return Array.from(indices)
}

export default function CardsDisplay (props) {
	const [data, setData] = useState([])
  const [error, setError] = useState(null)
	const [flip, setFlip] = useState(true)
	const [clicked, setClicked] = useState([])
	// console.log(data)
	// console.log(clicked)

	useEffect(()=>{
		if	(props.difficulty == 1) props.setInitialCards(5)
		if	(props.difficulty == 2) props.setInitialCards(8)
		if	(props.difficulty == 3) props.setInitialCards(12)
	})

	useEffect(() => {
    if (flip && props.game) {
      setTimeout(() => {
        setFlip(false)
      }, 850)
    }
  }, [flip, props.game])

  useEffect(() => {
    const fetchData = async () => {
			props.setLoading(true)
      setError(null)
      try {
        const totalObjects = 721
        const randomIndices = getRandomIndices(totalObjects, props.initialCards)
        const fetchPromises = randomIndices.map(index =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
        )

        const responses = await Promise.all(fetchPromises)
        const fetchedData = responses.map(response => response.data)

        setData(fetchedData)
      } catch (err) {
        setError(err)
      } finally {
        props.setLoading(false)
      }
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.initialCards])

  if (props.loading) return <div className={styles.loadingContainer}>
		<div className={styles.loadingImgContainer}>
			<img src={loading} className={styles.loadingImg} alt="" />
		</div>
		<div className={styles.loadingText}>
			<h1>Loading...</h1>
		</div>
	</div>
  if (error) return <div>Error: {error.message}</div>

	function shuffleArray(array) {
		let shuffledArray = [...array] 
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
		}
		return shuffledArray
	}

	const shufle = (e) => {
		if (clicked.includes(e) && flip !== true) {
			props.setCards(0)
			props.setGame(false)
			setFlip(true)
		} else if (flip !== true && !clicked.includes(e)) {
			props.addScore()
			props.addCards()
			setClicked(prevClicked => [...prevClicked, e])
			setFlip(true)
			setTimeout(() => {
				setData(shuffleArray(data))
			}, 650)
		} 
	}

	return (
		<div className={styles.container}>
			{data.map((item)=>(
				<Tilt
					tiltReverse={true}
					glareMaxOpacity={0.6}
					className={styles.card} 
					glarePosition="all"
					glareColor={"lightblue"}
					glareBorderRadius="15px"
					glareEnable={true}
					reset
					key={item.id}
				>
					<div onClick={()=>{shufle(item.id)}} className={`inner ${flip ? 'back' : 'front'}`}>
						<div className={styles.front}>
							<img src={item.sprites.front_default} alt="" className={styles.cardImage}/>
							<div className={styles.text}>{item.name}</div>
						</div>
						<div className={styles.back}>
							<img alt="" />
						</div>
					</div>
				</Tilt>
			))}
		</div>
	)
}