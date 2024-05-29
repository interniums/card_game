import { useEffect, useState } from "react"
import styles from '../styles/StartScreen.module.css'

export default function Text() {
	const [text, setText] = useState('')
  const textToType = "Seelect difficulty level"
  const typingSpeed = 50

  useEffect(() => {
    let index = 0

    function type() {
      if (index < textToType.length) {
        setText((prev) => prev + textToType.charAt(index))
        index++
        setTimeout(type, typingSpeed)
      }
    }

    type()
  }, [])

  return (
    <div className={styles.text_container}>
      <span className={styles.text}>{text}</span>
      <span className={styles.cursor}>|</span>
    </div>
  );
}