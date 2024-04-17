import Navbar from "./components/confirm/navbar";
import ConfirmContent from "./components/confirm/confirm_content";
import './static/confirm.css'

function Confirm(){
    return (
        <div className="confirmation">
            <Navbar/>
            <hr className="nav-break"/>
            <ConfirmContent/>
        </div>
    )
}

export default Confirm;