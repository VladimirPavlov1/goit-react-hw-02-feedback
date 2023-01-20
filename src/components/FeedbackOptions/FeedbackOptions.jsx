import { List,Btn } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions=({options,onLeaveFeedback})=>
(
   
    <List>
        {options.map(option=>(
            <li key={option}><Btn type="button" onClick={()=>{onLeaveFeedback(option)}}>{option}</Btn></li>
        ))}
    </List>
)

FeedbackOptions.propTypes={
        options:PropTypes.arrayOf(PropTypes.string).isRequired,  
        onLeaveFeedback:PropTypes.func.isRequired
}
