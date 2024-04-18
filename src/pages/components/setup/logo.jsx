import logo from '../../assets/dribble_logo_2.png';
import '../../static/logo.css';
import backButton from '../../assets/Back Arrow.svg'
import { useNavigate } from 'react-router-dom';

function Logo({showBack, url}){
    const navigate = useNavigate();

    const backClickHandler = () => {
        navigate(url)
    }

    return (
        <div className='logo' style={{display: 'flex', alignItems: 'center'}}>
            <div className='logo-box'>
                <img src={ logo }/>
            </div>
            { showBack ? <img className='back' onClick={backClickHandler} src= { backButton }/> : null} 
        </div>
    )
}

export default Logo;