import { useState } from 'react'
import '../../static/multichoice.css'
import Choice from './choice'
import { useNavigate } from 'react-router-dom'
import idea from '../../assets/idea.png'
import design from '../../assets/design.png'
import hire from '../../assets/hire.png'

function Multichoice(){
    const [oneSelected, setOneSelected] = useState(false)
    const [twoSelected, setTwoSelected] = useState(false)
    const [threeSelected, setThreeSelected] = useState(false)

    const allSet = {
        width: "200px",
        marginTop: "40px",
        marginBottom: "5px",
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

    const navigate = useNavigate();

    const allNotSet={
        ...allSet,
        backgroundColor: "#F192B8",
    }

    const nextClickHandler = () => {
        navigate('/confirmation')
    }

    return(
        <div className="multichoice">
            <h1 style={{fontWeight: "bolder", margin:"10px", marginBottom: "5px", textAlign: 'center'}}>What brings you to Dribbble?</h1>
            <p style={{margin: "10px", textAlign: 'center'}}>Select the options that best describe you. Don't worry, you can explore other options later</p>
            <div className='selection'>
                <Choice heading="I'm looking for design inspiration" selected={oneSelected} setSelected={setOneSelected} image={ idea }>
                    With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration.
                </Choice>

                <Choice heading="I'm looking to hire a designer" selected={twoSelected} setSelected={setTwoSelected} image={ hire }>
                    Discover talented designers from around the world. Browse portfolios, read reviews, and hire the perfect match for your design needs.
                </Choice>

                <Choice heading="I'm a designer looking to share my work" selected={threeSelected} setSelected={setThreeSelected} image={ design }>
                    Connect with a global audience of design enthusiasts. Share your portfolio, receive feedback, and gain exposure for your work.
                </Choice>
            </div>
            <button style={ (oneSelected || twoSelected || threeSelected)? allSet : allNotSet} onClick={ nextClickHandler }>Next</button>
        </div>
    )
}

export default Multichoice