import React, { useState } from 'react'
import Card from './Card';


const Cards = ({courses,category}) => {
 
  const [likedCourses,setLikedCourses] = useState([]);


  //returns u a list of all courses received from the api response
  const getCourses = ()=>{
    if(category ==="All"){
      let allCourses =[];
      Object.values(courses).forEach((courseCategory)=>{
          courseCategory.forEach((course)=>{
              allCourses.push(course);
          })
      })
      return allCourses;
    }

    else{
      return courses[category]
    }
     
    }
  return (
    <div className='cards'>
       {
       getCourses().map((course)=>{
          return <Card key={course.id} course ={course}   
                 likedCourses = {likedCourses} 
                 setLikedCourses = {setLikedCourses}
          ></Card>
       })
       }
    </div>
  )
}

export default Cards