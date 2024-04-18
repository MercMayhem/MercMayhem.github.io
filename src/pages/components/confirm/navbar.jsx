import logo from '../../assets/dribble_logo_2.png'

function Navbar() {

    return (
        <div className="navbar">

            <div className="img-box">
                <img className="img" src={logo} alt="Logo" />
            </div>

            <div className='nav-link'>
                <p className='nav-link-text'>Inspiration</p>
            </div>


            <div className='nav-link'>
                <p className='nav-link-text'>Find Work</p>
            </div>

            <div className='nav-link'>
                <p className='nav-link-text'>Learn Design</p>
            </div>

            <div className='nav-link'>
                <p className='nav-link-text'>Go Pro</p>
            </div>

            <div className='nav-link'>
                <p className='nav-link-text'>Hire Designers</p>
            </div>
        </div>
    );
}

export default Navbar;