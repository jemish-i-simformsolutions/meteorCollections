import React from 'react';
import { Task } from './Task.jsx';
import {useTracker} from 'meteor/react-meteor-data'
import { TaskCollection } from '../api/TaskCollection.js';
import {Form1} from './Form1'
// const task=[
//   {id:1,text:'first Task'},
//   {id:2,text:'first Task'},
//   {id:3,text:'third Task'}
// ];

export const App = () => {
  const task=useTracker(()=>TaskCollection.find({},{ sort: { createdAt: -1 }}).fetch());
  return(

  <div>
    {console.log(task)}
    <Form1/>
    <ul>
      {task.map((task,index)=>{
        return(
        <Task key={index} task={task}/>
        );

      })}
    </ul>
  </div>
  );
    };
//find and fetch
//useTracker(()=>TaskCollection.find({}).fetch())
//array.find({}) means u want to find every data from array
