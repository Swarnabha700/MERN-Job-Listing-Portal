import React from 'react'
import InputField from '../InputField'

const Experience = ({handleChange}) => {
  return (
    <div className='text-primary'>
      <h4 className='text-lg font-medium mb-2'>Types of Work</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>All type
        </label>

        <InputField handleChange={handleChange} value="Internship" title="Internship" name="test"/>
        <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>

      </div>
    </div>
  )
}

export default Experience
