import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/emoji.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  //create a function to generate the array of letters from the string
  const generateArray = (str) => {
    const arr = []
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i])
    }
    return arr
  }

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
  }, 4000)
  
  return () => {
              clearTimeout(timeoutId)
          }
   
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
              style={{ width: '50px', height: '50px', margin: '0 1px -5px 10px' }}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={generateArray('Ezequiel')}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={generateArray('Web developer')}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / Sr. React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
