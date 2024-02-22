import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';


const Card = ({course,likedCourses,setLikedCourses}) => {

 function clickHandler(){
  if(likedCourses.includes(course.id)){
    //already liked
    setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
    toast.warning("like removed");
  }

  else{
    // not liked before
    // we have to insert in liked courses me
    if(likedCourses.length === 0){
      setLikedCourses([course.id]);
    }
    else{
      // non empty pehle se
      setLikedCourses((prev)=>[...prev,course.id]);
    }

    toast.success("liked Successfully");

  }
 }


  return (
    <div className='card'>
      <div>
        <img src={course.image.url} />
        </div>
        <div>
          <button onClick={clickHandler} >
            {
              likedCourses.includes(course.id)?
              (<FcLike fontSize="1.75rem"/> ):(<FcLikePlaceholder fontSize="1.75rem"/>)
          }
             </button>
          </div>

      
      <div className='course-info'>
        <p>{course.title}</p>
        <p>
          {
            course.description.length>100 ? course.description.substr(0,100) + "...":
            course.description

          }</p>
      </div>
    </div>
  )
}

export default Card