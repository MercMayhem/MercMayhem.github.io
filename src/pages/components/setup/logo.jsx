import logo from '../../assets/dribble_logo_2.png';
import '../../static/logo.css';

function Logo(){
    return (
        <div className='logo'>
            <img src={ logo }/>
        </div>
    )
}

export default Logo;