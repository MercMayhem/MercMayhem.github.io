import Logo from './components/setup/logo'
import Info from './components/setup/info'
import './static/setup.css'

function Setup(){
    return (
    <div className='setup'>
        <div className='container'>
            <Logo/>
            <Info/>
        </div>
    </div>
    )
}

export default Setup;