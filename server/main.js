import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import {TaskCollection} from '../imports/api/TaskCollection'

const inserTask=(taskText)=>TaskCollection.insert({text:taskText})
// Meteor.startup(()=>{
 

// });



Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if(TaskCollection.find().count()===0){
    
    [
    'first task',
    'second Task',
    'Third Task',
    'fourth task',
    'fifth task',
    'sixth task'
  ].forEach(inserTask);
  
}
inserTask('seventh task')
  
});
