// 'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'


const ContactUsPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>

        <ContactUs />

    </div>
  )
}

export default ContactUsPage;
