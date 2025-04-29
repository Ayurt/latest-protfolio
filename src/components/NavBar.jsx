import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub, FaYoutube} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
import {motion} from "framer-motion"


const NavBar = ()  => {
  return (

    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-2xl' style={{fontSize:'36px'}}>AR </h1>
        </div>
        <motion.div
        className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin style={{cursor:'pointer'}} onClick={()=>window.open('https://www.linkedin.com/in/ayush-rawat-029a7520b/')}/>
            <FaGithub style={{cursor:'pointer'}} onClick={()=>window.open('https://github.com/Ayurt?tab=repositories')}/>
            <FaInstagram style={{cursor:'pointer'}} onClick={()=>window.open('https://www.instagram.com/_ayurt_/')}/>
            <FaYoutube style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.youtube.com/@AyushRawatAyurt/videos')} />
        </motion.div>
    </nav>
  )
}

export default NavBar
