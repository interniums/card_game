/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import styles from '../styles/Cards.module.css'
import axios from 'axios'
import Tilt from 'react-parallax-tilt'
import flip from '../assets/flip.png'

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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
	const [flip, setFlip] = useState(false)
	console.log(data)
	console.log(flip)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
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
        setLoading(false)
      }
    }

    fetchData()
  }, [props.initialCards])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

	const onClick = () => {

	}
	return (
		<div className={styles.container}>
			{data.map((item)=>(
				<Tilt
					tiltReverse={true}
					glareMaxOpacity={0.4}
					className={styles.card} 
					glarePosition="all"
					glareColor={"white"}
					reset
					key={item.id}
				>
					<div className={styles.inner}>
						<div className={styles.front}>
							<img src={item.sprites.front_default} alt="" className={styles.cardImage}/>
							<div className={styles.text }>{item.name}</div>
						</div>
						<div className={styles.back}>
							<img alt="" />
						</div>
					</div>
				</Tilt>
			))}
			<button onClick={()=>setFlip(flip == true ? false : true)}>OKOKOKO</button>
		</div>
	)
}