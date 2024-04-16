import '../../static/info.css'
import Pic from './profilepic'
import Location from './location'
import { useState } from 'react'

function Info(){
    const [pic, setPic] = useState(false);
    const [location, setLocation] = useState(false);

    const allSet = {
        width: "200px",
        marginTop: "40px",
        height: "40px",
        backgroundColor: "#ea4b8b",
        border: "0",
        borderRadius: "10px",
        fontSize: "100%",
        cursor: "pointer",
        color: "white",
        fontWeight: "bold",
        fontSize: "14px"
    }

    const allNotSet={
        ...allSet,
        backgroundColor: "#F192B8",
    }

    return(
        <div className="info">
            <div className='content'>

                <h1 style={{marginBottom: "5px"}}>Welcome! Let's create your profile</h1>
                <p>Let others get to know you better!</p>
                <h3 style={{marginBottom: "5%"}}>Add an avatar</h3>

                <Pic setPic={ setPic }/>

                <h3 style={{marginTop: "20%"}}>Add your location</h3>

                <Location setLocation={ setLocation }/>

                <button style={ (pic && location)? allSet : allNotSet}>Next</button>

            </div>

        </div>
    )
}

export default Info;