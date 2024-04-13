import './static/signup.css'
import logo from './assets/dribble_logo.png'
import flairImage from './assets/flair_image.png'

function Signup(){
    return (<div className="container">
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
        <form>
            <div className="form">
            <div className="form-element name">
                <input className="input" placeholder=""/>
                <label className="text">Name</label>
            </div>

            <div className="form-element username">
                <input className="input" placeholder=""/>
                <label className="text">Username</label>
            </div>

            <div className="form-element email">
                <input className="input" placeholder=""/>
                <label className="text">Email</label>
            </div>

            <div className="form-element password">
                <input className="input" placeholder=""/>
                <label className="text">Password</label>
            </div>
            </div>

            <div className="agreement">
            <div style={{"position":"relative","width":"12%"}}>
                <input type="checkbox"/>
            </div>
            <p className="text" style={{"marginTop":"0","marginBottom":"0"}}><span style={{"color":"gray"}}>Creating an account means that you are okay with our <span style={{"color":"purple"}}>Terms of Service</span>, <span style={{"color":"purple"}}>Privacy Policy</span>, and our default <span style={{"color":"purple"}}>Notification Settings</span> </span></p>
            </div>

            <button type="submit"> <span style={{"color":"white"}}>Create Account</span> </button>

        <hr width="100%" size="2" style={{"marginTop":"40px","marginBottom":"0px","opacity":"0.5"}}/>
        </form>
        <p className="text" style={{"textAlign":"center"}}>Already a member? <span style={{"color":"purple"}}>Sign In</span></p>
        </div>
    </div>)
}

export default Signup;