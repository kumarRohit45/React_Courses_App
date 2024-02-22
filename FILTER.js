import React from 'react'

const FIlter = (props) => {
let filterData = props.filterData;
let category = props.category;
let setCategory = props.setCategory;

  function filterHandler(title){
     setCategory(title);
     
  }



  return (

  
    <div className='filter-data'>
      {
      filterData.map((data)=>{
       return(
         <button className={'filter-btn' } key={data.id}  onClick={() => filterHandler(data.title)}
         >{data.title}</button>
       )
      })
      }
    </div>
  )
}

export default FIlter