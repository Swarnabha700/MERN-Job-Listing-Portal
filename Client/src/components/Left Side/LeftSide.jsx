import React from 'react'
import Location from './Location'
import Salary from './Salary'
import Date from './Date'
import Experience from './Experience'
import Employment from './Employment'

const LeftSide = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      <Location handleChange={handleChange}/> 
      <Salary handleChange={handleChange} handleClick={handleClick}/>
      <Date handleChange={handleChange}/>
      <Experience handleChange={handleChange}/>
      <Employment handleChange={handleChange}/>
    </div>
  )
}

export default LeftSide
