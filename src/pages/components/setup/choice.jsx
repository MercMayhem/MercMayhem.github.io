import logo from '../../assets/flair_image.png'

function Choice({children, heading, selected, setSelected, image}){
    const clickHandler = () => {
        if (selected) {
            setSelected(false)
        } else {
            setSelected(true)
        }
    }

    return(
        <div className={`choice ${selected ? "selected" : "not-selected"}`} onClick={ clickHandler }>
            <div className={`heading-box ${selected ? "raise" : ""}`}>
                <div><img src={ image } style={{ height: "110px", width: "auto" }}/></div>
                <h3 className="heading" style={{marginTop:"3px"}}>{ heading }</h3>
                <p className={`contents ${selected ? 'raise' : ""}`}>{ children }</p>
            </div>
        </div>
    )
}

export default Choice