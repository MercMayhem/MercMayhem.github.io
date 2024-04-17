import '../../static/multichoice.css'
import Choice from './choice'

function Multichoice(){
    return(
        <div className="multichoice">
            <h1 style={{fontWeight: "bolder", marginBottom: "5px"}}>What brings you to Dribbble?</h1>
            <p>Select the options that best describe you. Don't worry, you can explore other options later</p>
            <div className='selection'>
                <Choice heading="I'm looking for design inspiration">
                    With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration.
                </Choice>

                <Choice heading="I'm looking to hire a designer">
                    With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration.
                </Choice>

                <Choice heading="I'm a designer looking to share my work">
                    With over 7 million shots from a vast community of designers. Dribbble is the leading source for design inspiration.
                </Choice>
            </div>
        </div>
    )
}

export default Multichoice