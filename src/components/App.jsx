import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

class App extends Component{

  state={
    good:0,
    neutral:0,
    bad:0,

  }

  onLeaveFeedback=option=>{
    this.setState(prevState=>({
      [option]:prevState[option]+1
    }))
  }

  countTotalFeedback=()=>this.state.good+this.state.neutral+this.state.bad;


  countPositiveFeedbackPercentage=()=>{
    
    if(this.state.good===0){return 0}else{
      return Math.round((this.state.good*100)/(this.state.good+this.state.neutral+this.state.bad))
    }
  }


  render(){
    const{good,neutral,bad}=this.state

    return <div>
      <Section title="Please leave feedback">
       <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>
    
     <Section title="Statistics">
        {this.countTotalFeedback()>0?
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}/>:
          <Notification message ="There is no feedback"/>}
      </Section>
        </div>
   
  
}
};

export default App;