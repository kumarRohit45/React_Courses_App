import React,{useEffect, useState} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import FILTER from './components/FILTER';
import {apiUrl,filterData} from './components/data';
import { toast } from 'react-toastify';
import Cards from './components/Cards'
import Spinner from './components/Spinner';



function App() {
const [courses , setCourses] = useState("");
const [loading , setLoading] = useState(true);
const [category, setCategory]= useState(filterData[0].title)
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        //save data into a variable
        setCourses(data.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <div>

<Navbar></Navbar>
      </div>
     <div>

       <FILTER filterData= {filterData}
        category = {category}
        setCategory ={setCategory}>
        
       </FILTER>
    </div>
 <div className='app'>
 {loading? (<Spinner/>):(<Cards courses = {courses} category = {category}></Cards>)}
 </div>
 

  
    </div>
  );
}

export default App;
