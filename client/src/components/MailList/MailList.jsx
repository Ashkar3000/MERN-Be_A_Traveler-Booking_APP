/* eslint-disable react/no-unescaped-entities */
import './MailList.css'

export default function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time, save money!</h1>    
        <span className="mailDesc">Sign up we'll send the best deals to you</span> 
           <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
           </div>
    </div>
  )
}
