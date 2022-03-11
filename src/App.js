import React,{useState} from 'react';
import './App.css';
import GoalScreen from './GoalScreen';
import NewGoal from './NewGoal/NewGoal';
 //Class Components

// class App extends React.Component {
//   render() {
//     return (
//    <GoalScreen />
//   )
// }
// }

//Functional Component
const App = () => {


  const [courseGoal,setCourseGoal] = useState(
    [{id:'1' ,text : 'Learn React'},
    {id:'2' ,text : 'Learn React Native'},
    {id:'3' ,text : 'Learn Redux'},
  ]);
  const addnewGoalHandler = (newGoal) => {
    
    setCourseGoal(courseGoal.concat(newGoal));
  }
  // setCourseGoal((prevCourseGoal)=>{
  //   return prevCourseGoal.concat(newGoal);
  // });
  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  
  return (
    
      <div className='background'>
            <div className='header'><span>🖊️ Your Goals</span></div>
           <NewGoal onAddGoal={addnewGoalHandler} />
          <GoalScreen goals={courseGoal} onDelete={removeGoalHandler}/>
       </div>

  );
}
export default App;
