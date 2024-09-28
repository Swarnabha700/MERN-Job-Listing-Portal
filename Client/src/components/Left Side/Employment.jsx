import React from 'react'
import InputField from '../InputField'

const Employment = ({handleChange}) => {
  return (
    <div className='text-primary'>
      <h4 className='text-lg font-medium mb-2'>Types of Employment</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>All type
        </label>

        <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
        <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
        <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
      </div>
    </div>
  )
}

export default Employment
