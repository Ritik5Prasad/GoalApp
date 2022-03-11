import React from "react";
import './GoalScreen.css';
const GoalScreen = props => {
    
    return(
        
          <ul className="goal-list">
             {props.goals.map((goal)=>{
                  return <div ><li className="Bar" key={goal.id}>
                    {goal.text}
                    <div className="button" >
                    <button onClick={props.onDelete.bind(this, goal.id)} >Delete</button>
                    </div>
                  </li>
                  
                  </div>
             })}
          </ul>
      
    );
}
export default GoalScreen;