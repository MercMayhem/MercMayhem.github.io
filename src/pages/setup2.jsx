import Logo from './components/setup/logo'
import Multichoice from './components/setup/multichoice';
import './static/setup.css'

function Setup2(){
    return (
    <div className='setup'>
        <div className='container'>
            <Logo showBack={true} url={'/setup'}/>
            <Multichoice/>
        </div>
    </div>
    )
}

export default Setup2;