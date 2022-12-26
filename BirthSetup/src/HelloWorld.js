import React,{useState} from 'react';
import data from './data.js';
import List from './List.js';
const HelloWorld =()=>
{
 const[people,setPeople]=useState(data);
 return(
 <main>
 <section className='container'>
  <List people={people}/>
  <button onClick={()=>setPeople([])}>Clear the Queue</button>
 </section>
 </main>);
};
export default HelloWorld; 