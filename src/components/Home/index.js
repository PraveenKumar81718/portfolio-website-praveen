import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logotitle from'../../assets/images/P.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['r','a','v','e','e','n']
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l', 'o','p','e','r', '.']

    useEffect(() => {
        
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={Logotitle} alt="P1" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>Fronted Developer / JavaScript Expert / YouTuber</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home