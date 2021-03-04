import React, { useState } from 'react';
import {Meteor} from 'meteor/meteor'
import { TaskCollection } from '../api/TaskCollection';

export const Form1=()=>{
    const [data,setData]=useState('');
    const [updateId,setUpdateId]=useState(null);
    const [removeId,setRemoveId]=useState(null);
    const [upsertId,setUpsertId]=useState(null);

    return(
    <form>
      
      <input type='text' placeholder='enter task here' onChange={(event)=>setData(event.target.value)}/>
      <button onClick={()=>TaskCollection.insert({text:data})}>Click to add</button> <br/>
      <input placeholder='enter ID here' onChange={(event)=>{setUpdateId(event.target.value)}} type='text'/>
      <button onClick={()=>{TaskCollection.update(updateId,{$set:{text:'nice to meet you'}})}}>click to update task</button>  <br/>
      <input type="text" placeholder='enter ID here' onChange={event=>setRemoveId(event.target.value)}/><button onClick={()=>{TaskCollection.remove(removeId,(res)=>console.log(res))}}>Click to remove</button>    
      {/* <input type='text' placeholder='enter ID here' onChange={event=>setUpsertId(event.target.value)}/>
      <input type='text' placeholder='enter text here' onChange={event=>setUpsertId(event.target.value)}/>
      <button onClick={()=>{TaskCollection.upsert(upsertId,{$set:{text:'happy happy'}})}}>Submit</button> */}
    </form>
    );
}

//collection.update(id,{$set:{attribute:text which you want to change}})
//collection.insert({text:data})
//collection.update(condition object,action object, allowance true) means below stntax
//Mongo.Collection#upsert(selector, modifier, [options], [callback])