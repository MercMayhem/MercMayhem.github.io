import { useContext } from 'react'
import UserContext from '../../../context'
import confirmImg from '../../assets/Email confirmation.png'
import '../../static/confirm.css'
import logo from '../../assets/dribble_logo.png'

function ConfirmContent(){
    const [email, setEmail] = useContext(UserContext)

    return(
        <div className='confirm-content-container'>
            <div className="confirm-content">
                <h1 style={{textAlign: "center"}}>Please verify your email...</h1>
                <img src={confirmImg}/>
                <p>We have sent the email to:</p>
                <p style={{fontWeight: "bolder"}}>{ email }</p>
                <p>Click the confirmation link to begin using Dribbble</p>
                <p style={{textAlign: "center"}}>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it
                    , you can <span style={{color: "#E039A5"}}>resend the confirmation email.</span>
                </p>
                <p>Wrong email address? <span style={{color: "#E039A5"}}>Change it.</span></p>
            </div>

        </div>
    )
}

export default ConfirmContent