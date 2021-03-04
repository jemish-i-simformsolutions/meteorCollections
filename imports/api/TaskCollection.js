import {Mongo} from 'meteor/mongo';
export const TaskCollection=new Mongo.Collection('task');
// TaskCollection.allow({
//     upsert:(userid,docs)=>{
//         return docs.owner===userid;
//     },
//     fetch: ['owner']
// }
// )
//meteor create mongodb  collection for us 
//for  work our collection  we need to import it in server 