

function Location({setLocation}){

    const changeHandler = (e) => {
        if (e.target.value != ""){
            setLocation(true)
        } else {
            setLocation(false)
        }
    }

    return(
        <div className="location">
            <input type="text" placeholder="Enter a location" onChange={ changeHandler }/>
        </div>
    )
}

export default Location;