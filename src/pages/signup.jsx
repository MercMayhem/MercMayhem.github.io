import './static/signup.css'
import logo from './assets/dribble_logo.png'
import flairImage from './assets/flair_image.png'
import { useContext, useState } from 'react'
import UserContext from '../context'
import { useNavigate } from 'react-router-dom'

function Signup(){
    const [email, setEmail] = useContext(UserContext)
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    let submitHandler = (e) => {
        e.preventDefault();
        navigate('/setup');
    }

    let inputChangeHandler = (target, setInp) => {
        setInp(target.value);
        target.setCustomValidity("");
    }

    return (
    <div className='signup'>
    <div className="container">
        <div className="flair">
        <div className="text-box">
            <img className="logo" src={logo}/>
            <h2 className="text subheading">Discover the world's top Designers & Creatives.</h2>
        </div>
        <img className="flair-image" src={flairImage}/>
        <div className="text-box" id="credit" style = {{"fontFamily":"Arial, Helvetica, sans-serif","color":"#846014"}} ><p>Art by <u>Peter Tarka</u></p></div>
        </div>
        <div className="function">
        <h1 className="text heading">Sign up to Dribbble</h1>
        <form onSubmit={submitHandler}>
            <div className="form">
            <div className="form-element name">
                <input required className="input" placeholder=""/>
                <label className="text">Name</label>
            </div>

            <div className="form-element username">
                <input required className="input" placeholder=""/>
                <label className="text">Username</label>
            </div>

            <div className="form-element email">
                
                <input required type='email' 
                    value={ email } 
                    onChange={ (e) => { inputChangeHandler(e.target, setEmail) } } 
                    onInvalid={(e)=>{e.target.setCustomValidity("Please enter your email")}}
                    className="input" placeholder=""/>
                
                <label className="text">Email</label>
            </div>

            <div className="form-element password">

                <input required type="password"
                    value = { password }
                    pattern = ".{6,}"
                    onChange = { (e) => { inputChangeHandler(e.target, setPassword) } }
                    onInvalid = { (e) => { e.target.setCustomValidity("Password should be atleast 6 characters long") } }
                    className="input" placeholder=""/>

                <label className="text">Password</label>
            </div>
            </div>

            <div className="agreement">
            <div style={{"position":"relative","width":"12%"}}>
                <input required type="checkbox"/>
            </div>
            <p className="text" style={{"marginTop":"0","marginBottom":"0"}}><span style={{"color":"gray"}}>Creating an account means that you are okay with our <span style={{"color":"purple"}}>Terms of Service</span>, <span style={{"color":"purple"}}>Privacy Policy</span>, and our default <span style={{"color":"purple"}}>Notification Settings</span> </span></p>
            </div>

            <button type="submit"> <span style={{"color":"white"}}>Create Account</span> </button>

        <hr width="100%" size="2" style={{"marginTop":"40px","marginBottom":"0px","opacity":"0.5"}}/>
        </form>
        <p className="text" style={{"textAlign":"center"}}>Already a member? <span style={{"color":"purple"}}>Sign In</span></p>
        </div>
    </div>
    </div>)
}

export default Signup;