import { SiBlogger } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiKakaotalk } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='main-footer'>
      <div className="sns">
        <Link to='#'><SiBlogger /></Link>
        <Link to='#'><SiInstagram /></Link>
        <Link to='#'><SiKakaotalk /></Link>
      </div>
      <p className='copy'>&copy; 2023 portfolio</p>
    </footer>
  )
}
